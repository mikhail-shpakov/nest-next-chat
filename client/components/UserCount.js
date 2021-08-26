import SwitcherGroup from './SwitcherGroup'
import { useTranslation } from 'next-i18next'

export default function UserCount (props) {
  const { t } = useTranslation('common')

  return (
    <div className="uc">
      <div>{t('user-count')} {props.userCount}</div>

      <SwitcherGroup/>

      <style jsx>{`
        @import "../styles";

        .uc {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 32px 0 32px 24px;
          background: $color-background;
          color: $color-alt;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
      `}</style>
    </div>
  )
}
