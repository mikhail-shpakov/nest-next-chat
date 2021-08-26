import GithubLink from './GithubLink'
import AuthorLink from './AuthorLink'
import ChatBox from './ChatBox'
import { useTranslation } from 'next-i18next'

export default function ChatList () {
  const { t } = useTranslation('common')

  return (
    <div className="cl">
      <div className="cl__chats-wrapper">
        <p className="font-body-1 font-medium cl__title">{t('chat-list')}</p>
        <ChatBox/>
      </div>

      <div className="cl__links-wrapper">
        <GithubLink/>
        <AuthorLink/>
      </div>

      <style jsx>{`
        @import "../styles";

        .cl {
          padding: 32px 24px 32px 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          &__title {
            margin-bottom: 32px;
          }

          @media (max-width: $mobile) {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
