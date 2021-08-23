import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { decode } from 'jsonwebtoken'
import { useCookies } from 'react-cookie'
import ChatArea from '../../components/ChatArea'
import ChatList from '../../components/ChatList'
import { io } from 'socket.io-client'
import UserList from '../../components/UserList'
import ContextUserList from '../../contexts/ContextUserList'
import ContextMsgList from '../../contexts/ContextMsgList'

export default function MessengerPage () {
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['jwt'])
  const [msgList, setMsgList] = useState([])
  const [userList, setUserList] = useState([])

  useEffect(() => { // todo перенести в middleware
    if (!router.isReady) return

    // чтобы разрешить доступ к странице,
    // проверяем, что jwt токен есть либо в query,
    // либо уже был ранее сохранён в куки,
    // и что он не истёк
    const currentJwt = router.query.jwt
    const previousSavedJwt = cookies.jwt
    const jwt = currentJwt || previousSavedJwt
    const currentTime = new Date().getTime() / 1000
    const checkJwt = jwt && decode(jwt).exp > currentTime

    if (!checkJwt) {
      removeCookie('jwt')
      ;(async () => { await router.push('/')})()
      return
    }

    setCookie('jwt', jwt)
    ;(async () => { await router.replace(router.pathname)})()
  }, [router.isReady])

  useEffect(() => { // todo обрывать сессию при уходе со страницы
    if (!cookies.jwt) return

    const socket = io(process.env.NEXT_PUBLIC_BASE_API_URL, {
      auth: { token: cookies.jwt },
      transports: ['websocket', 'polling']
    })

    socket.on('messages:all', (messages) => {
      setMsgList(messages)
    })

    socket.on('users:all', (users) => {
      setUserList(users)
    })
  }, [cookies.jwt])

  return (
    <div className="mp">
      <ContextUserList.Provider value={userList}>
        <ContextMsgList.Provider value={msgList}>
          <ChatList/>
          <ChatArea/>
          <UserList/>
        </ContextMsgList.Provider>
      </ContextUserList.Provider>

      <style jsx>{`
        .mp {
          height: calc(100vh - 110px);
          margin: auto;
          display: grid;

          @media (min-width: 769px) {
            grid-template-columns: 1fr 500px 1fr;
            width: var(--max-content);
          }
        }
      `}
      </style>
    </div>
  )
}
