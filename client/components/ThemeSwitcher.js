import useDarkMode from 'use-dark-mode'
import Image from 'next/image'
import ReactTooltip from 'react-tooltip'
import { useTranslation } from 'next-i18next'

export default function ThemeSwitcher () {
  const darkMode = useDarkMode(false)
  const { t } = useTranslation('common')

  return (
    <button data-tip={t('change-theme')} className="ts" type="button" onClick={darkMode.toggle}>
      <Image src={`/images/${darkMode.value ? 'dark' : 'light'}-mode.svg`} alt="mode" height={36} width={36}/>

      <ReactTooltip effect="solid" multiline className="cmb__tooltip" place="left"/>

      <style jsx>{`
        .ts {
          cursor: pointer;
        }
      `}</style>
    </button>
  )
}
