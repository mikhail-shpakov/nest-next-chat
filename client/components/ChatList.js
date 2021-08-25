import GithubLink from './GithubLink'
import AuthorLink from './AuthorLink'
import ChatBox from './ChatBox'

export default function ChatList () {
  return (
    <div className="cl">
      <div className="cl__chats-wrapper">
        <p className="font-body-1 font-medium cl__title">Список чатов</p>
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
