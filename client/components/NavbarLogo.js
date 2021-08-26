import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export default function NavbarLogo () {
  const { t } = useTranslation('common')

  return (
    <>
      <div className="nl">
        <Image src="/images/logo.svg" alt="logo" width={64} height={64}/>
        <span className="font-title-1 font-medium">{t('title')}</span>
      </div>

      <style jsx>{`
        @import "../styles";

        .nl {
          display: flex;
          align-items: center;
          color: $color-main;

          @media (max-width: $mobile) {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
