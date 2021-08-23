import ContentWrapper from './ContentWrapper'
import Image from 'next/image'

export default function GoogleOAuthLink () {
  const googleAuthUrl = process.env.NEXT_PUBLIC_BASE_API_URL + '/auth/google' // todo

  return (
    <a className="goa" href={googleAuthUrl}>
      <ContentWrapper>
        <Image src="/images/google.svg" alt="google" height={40} width={40}/>
        <div className="goa__text">
          <p className="font-body-1 font-medium">Google</p>
          <p className="font-body-2">Войти с помощью OAuth 2.0</p>
        </div>
      </ContentWrapper>

      <style jsx>{`
        .goa {
          text-decoration: none;

          &__text {
            margin-left: 16px;
          }
        }
      `}</style>
    </a>
  )
}
