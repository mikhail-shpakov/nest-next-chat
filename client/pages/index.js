import GoogleOAuthLink from '../components/GoogleOAuthLink'
import GithubLink from '../components/GithubLink'
import AuthorLink from '../components/AuthorLink'

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
      </main>

      <style jsx>{`
        .lp {
          &__container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: var(--max-content);
            margin: auto;
            min-height: calc(100vh - 160px);

          }

          &__content {
            width: 100%;
            max-width: var(--box-content);
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
              border-bottom: var(--line);
            }
          }
        }
      `}</style>
    </div>
  )
}
