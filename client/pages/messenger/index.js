import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { decode } from 'jsonwebtoken'
import { useCookies } from 'react-cookie'

export default function MessengerPage () {
  const router = useRouter()
  const [cookies, setCookie] = useCookies(['jwt'])

  useEffect(async () => {
    if (!router.isReady) return

    const currentJwt = router.query.jwt
    const previousSavedJwt = cookies.jwt
    const jwt = currentJwt || previousSavedJwt
    const currentTime = new Date().getTime() / 1000
    const checkJwt = jwt && decode(jwt).exp > currentTime

    if (!checkJwt) {
      await router.push('/')
      return
    }

    setCookie('jwt', jwt)
    await router.replace(router.pathname)
  }, [router.isReady])

  return (
    <div className="mp">
      Страница мессенджера

      <style jsx>{`
        .mp {
          width: 100%;
          max-width: var(--max-content);
          margin: auto;
        }
      `}
      </style>
    </div>
  )
}
