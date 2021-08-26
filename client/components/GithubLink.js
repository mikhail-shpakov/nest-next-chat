import ContentWrapper from './ContentWrapper'
import Image from 'next/image'
import useDarkMode from 'use-dark-mode'
import { useTranslation } from 'next-i18next'

export default function GithubLink () {
  const darkMode = useDarkMode()
  const { t } = useTranslation('common')

  return (
    <a className="gl" href="https://github.com/mikhail-shpakov/nest-next-chat" target="_blank"
       rel="noopener noreferrer">
      <ContentWrapper>
        <Image src={`/images/github-${darkMode.value ? 'dark' : 'light'}.svg`} alt="github" height={28} width={28}/>
        <p className="font-body-1 font-medium gl__title">{t('github-info')}</p>
      </ContentWrapper>

      <style jsx>{`
        .gl {
          text-decoration: none;

          &__title {
            margin-left: 12px;
          }
        }
      `}</style>
    </a>
  )
}
