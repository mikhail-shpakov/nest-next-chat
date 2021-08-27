import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import ReactTooltip from 'react-tooltip'

export default function LangSwitcher () {
  const router = useRouter()
  const { t } = useTranslation('common')

  const toggleLocale = async () => {
    const { locale, pathname } = router
    const newLocale = locale === 'en' ? 'ru' : 'en'

    localStorage.setItem('locale', newLocale)
    await router.push(pathname, pathname, { locale: newLocale })
  }

  return (
    <a data-tip={t('change-locale')} onClick={toggleLocale}>
      <Image src={`/images/${router.locale === 'en' ? 'flag-en' : 'flag-ru'}.svg`} alt="lang" height={36} width={36}/>

      <ReactTooltip effect="solid" multiline className="cmb__tooltip" place="left"/>
    </a>
  )
}
