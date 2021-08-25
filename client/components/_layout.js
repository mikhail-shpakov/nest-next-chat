import Navbar from './Navbar'
import ContextUser from '../contexts/ContextUser'
import ContextSocket from '../contexts/ContextSocket'
import ContextUserList from '../contexts/ContextUserList'
import ContextMsgList from '../contexts/ContextMsgList'
import { io } from 'socket.io-client'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import { decode } from 'jsonwebtoken'

const initiateSocket = (jwt) =>
  io(process.env.NEXT_PUBLIC_BASE_API_URL, {
    auth: { token: jwt },
    transports: ['websocket', 'polling'],
  })

export default function _layout ({ children }) {
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['jwt'])
  const [user, setUser] = useState(null)
  const [msgList, setMsgList] = useState([])
  const [userList, setUserList] = useState([])
  const [socket, setSocket] = useState({})

  const scrollToLastMsg = () => {
    const cv = document.getElementById('cv')

    if (cv) {
      cv.scrollTop = cv.scrollHeight || 0
    }
  }

  useEffect(() => {
    if (!router.isReady) return

    /** чтобы разрешить доступ к странице,
     * проверяем, что jwt токен есть либо в query,
     * либо уже был ранее сохранён в куки,
     * и что он не истёк
     */

    const currentJwt = router.query.jwt
    const previousSavedJwt = cookies.jwt
    const jwt = currentJwt || previousSavedJwt
    const currentTime = new Date().getTime() / 1000
    const checkJwt = jwt && decode(jwt).exp > currentTime

    if (!checkJwt) {
      removeCookie('jwt')
      if (Object.keys(socket).length) { socket.disconnect() }
      ;(async () => { await router.push('/')})()
      return
    }

    setCookie('jwt', jwt)
    setUser(decode(jwt))
    ;(async () => { await router.push('/chats')})()
  }, [router.isReady, router.route])

  useEffect(() => {
    if (!cookies.jwt) {
      setUser(null)
      setSocket({})
      setMsgList([])
      setUserList([])
      return
    }

    const socket = initiateSocket(cookies.jwt)
    setSocket(socket)

    socket.on('messages:all', (messages) => {
      setMsgList(messages)
      scrollToLastMsg()
    })

    socket.on('messages:new', (message) => {
      setMsgList(oldMsg => [...oldMsg, message])
      scrollToLastMsg()
    })

    socket.on('users:all', (users) => {
      setUserList(users)
    })
  }, [cookies.jwt])

  return (
    <div className="layout">
      <ContextUser.Provider value={user}>
        <ContextSocket.Provider value={socket}>
          <ContextUserList.Provider value={userList}>
            <ContextMsgList.Provider value={msgList}>
              <Navbar/>
              <main>{children}</main>
            </ContextMsgList.Provider>
          </ContextUserList.Provider>
        </ContextSocket.Provider>
      </ContextUser.Provider>

      <style jsx>{`
        .layout {
          padding: 0 20px 0;
        }
      `}</style>
    </div>
  )
}
