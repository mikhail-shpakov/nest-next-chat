import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { decode } from 'jsonwebtoken'
import { useCookies } from 'react-cookie'
import ChatArea from '../../components/ChatArea'

export default function MessengerPage () {
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['jwt'])

  useEffect(async () => { // todo перенести в middleware
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
      await router.push('/')
      return
    }

    setCookie('jwt', jwt)
    await router.replace(router.pathname)
  }, [router.isReady])

  return (
    <div className="mp">
      <p>Список чатов</p>
      <ChatArea/>
      <p>Список пользователей</p>

      <style jsx>{`
        .mp {
          width: 100%;
          max-width: var(--max-content);
          height: calc(100vh - 110px);
          margin: auto;
          display: grid;

          @media (min-width: 769px) {
            grid-template-columns: 1fr 500px 1fr;
          }
        }
      `}
      </style>
    </div>
  )
}
