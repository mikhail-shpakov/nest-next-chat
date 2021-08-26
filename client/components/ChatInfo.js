import { useTranslation } from 'next-i18next'

export default function ChatInfo () {
  const { t } = useTranslation('common')

  return (
    <div className="ci">
      <p className="font-body-1 font-medium ci__title">{t('greeting-title')}</p>
      <p className="font-body-2 ci__subtitle">{t('greeting-subtitle')}</p>

      <style jsx>{`
        @import "../styles";

        .ci {
          background: rgba($color-accent, 0.05);
          padding: 24px;

          &__title {
            color: $color-accent;
          }

          &__subtitle {
            color: $color-alt;
            margin-top: 8px;
          }
        }
      `}</style>
    </div>
  )
}
