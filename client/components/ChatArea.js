import ChatInfo from './ChatInfo'
import ChatInput from './ChatInput'
import ChatView from './ChatView'

export default function ChatArea () {
  return (
    <div className="ca">
      <p className="font-title-1 font-medium ca__title">Общий чат</p>

      <div className="ca__ci-wrapper">
        <ChatInfo/>
      </div>

      <ChatView/>
      <ChatInput/>

      <style jsx>{`
        .ca {
          display: flex;
          flex-direction: column;
          padding: 24px 0 0;
          height: inherit;

          &__ci-wrapper {
            display: none;
            margin: 24px -24px;
          }

          @media (min-width: 769px) {
            border-left: var(--line);
            border-right: var(--line);
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
