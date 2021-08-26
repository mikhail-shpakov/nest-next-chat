import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import ReactTooltip from 'react-tooltip'

export default function LangSwitcher () {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <Link href={router.pathname} locale={router.locale === 'en' ? 'ru' : 'en'}>
      <a data-tip={t('change-locale')}>
        <Image src={`/images/${router.locale === 'en' ? 'flag-en' : 'flag-ru'}.svg`} alt="lang" height={36} width={36}/>

        <ReactTooltip effect="solid" multiline className="cmb__tooltip" place="left"/>
      </a>
    </Link>
  )
}
