import ChatInfo from './ChatInfo'
import GithubLink from './GithubLink'
import AuthorLink from './AuthorLink'
import ThemeSwitcher from './ThemeSwitcher'

export default function MobileInfo () {
  return (
    <div className="mei">
      <div className="mei__ci-wrapper">
        <ChatInfo/>
      </div>

      <div className="mei__links-wrapper">
        <ThemeSwitcher/>
        <GithubLink/>
        <AuthorLink/>
      </div>

      <style jsx>{`
        @import "../styles";

        .mei {
          background: $color-background;
          position: absolute;
          top: 80px;
          left: 0;
          min-height: 500px;
          height: calc(100vh - 80px);
          z-index: 1;
          padding: 0 20px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          @media (min-width: $tablet) {
            display: none;
          }

          &__ci-wrapper {
            margin: 0 -20px;
          }
        }
      `}</style>
    </div>
  )
}
