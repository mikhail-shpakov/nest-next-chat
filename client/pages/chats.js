import ChatArea from '../components/ChatArea'
import ChatList from '../components/ChatList'
import UserList from '../components/UserList'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function MessengerPage () {
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
