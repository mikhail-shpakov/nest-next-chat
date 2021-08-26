import ChatInfo from './ChatInfo'
import ChatInput from './ChatInput'
import ChatView from './ChatView'
import { useTranslation } from 'next-i18next'

export default function ChatArea () {
  const { t } = useTranslation('common')

  return (
    <div className="ca">
      <p className="font-title-1 font-medium ca__title">{t('general-chat')}</p>

      <div className="ca__ci-wrapper">
        <ChatInfo/>
      </div>

      <ChatView/>
      <ChatInput/>

      <style jsx>{`
        @import "../styles";

        .ca {
          display: flex;
          flex-direction: column;
          padding: 24px 0 0;
          height: inherit;

          &__ci-wrapper {
            display: none;
            margin: 24px -24px;
          }

          @media (min-width: $tablet) {
            border-left: $line;
            border-right: $line;
            padding: 32px 24px;

            &__ci-wrapper {
              display: block;
            }
          }
        }
      `}</style>
    </div>
  )
}
