import GoogleOAuthLink from '../components/GoogleOAuthLink'
import GithubLink from '../components/GithubLink'
import AuthorLink from '../components/AuthorLink'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function LoginPage () {
  return (
    <div className="lp__container">
      <main className="lp__content">
        <h1 className="font-title-1 font-medium lp__content-title">
          Онлайн чат, созданный с помощью Nest, Next и Socket.io
        </h1>
        <GoogleOAuthLink/>
        <div className="lp__content-divider"/>
        <GithubLink/>
        <AuthorLink/>

        <ThemeSwitcher/>
      </main>

      <style jsx>{`
        @import "../styles";

        .lp {
          &__container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: $max-content;
            margin: auto;
            min-height: calc(100vh - 160px);
          }

          &__content {
            width: 100%;
            max-width: $box-content;
            margin: auto;

            h1 {
              font-weight: normal;
            }

            &-title {
              text-align: center;
              margin: 64px 0 72px;
            }

            &-divider {
              margin: 48px 0;
              border-bottom: $line;
            }
            
            :global(.ts) {
              margin: 28px auto 0;
            }
          }
        }
      `}</style>
    </div>
  )
}
