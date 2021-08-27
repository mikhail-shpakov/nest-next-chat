import ChatArea from '../components/ChatArea'
import ChatList from '../components/ChatList'
import UserList from '../components/UserList'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MessengerPage () {
  const router = useRouter()

  useEffect(() => {
    /**
     * Так как при использовании OAuth мы покидаем
     * наше react приложение, то для того, чтобы сохранить выбранную
     * пользователем локаль, мы сохраняем её персистентно в localStorage
     * и при переходе обратно в наше приложении восстанавливаем её
     */
    const savedLocale = localStorage.getItem('locale')
    const { locale: currentLocale, pathname } = router

    if ((savedLocale !== currentLocale) && pathname === '/chats') {
      ;(async () => { await router.push(pathname, pathname, { locale: savedLocale })})()
    }
  }, [router.locale])

  return (
    <div className="mp">
      <ChatList/>
      <ChatArea/>
      <UserList/>

      <style jsx>{`
        @import "../styles";

        .mp {
          height: calc(100vh - 125px);
          margin: auto;
          display: grid;

          @media (min-width: 769px) {
            grid-template-columns: 1fr 500px 1fr;
            width: $max-content;
          }
        }
      `}
      </style>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
