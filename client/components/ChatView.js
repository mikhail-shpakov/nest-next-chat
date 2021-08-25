import { useContext } from 'react'
import ContextMsgList from '../contexts/ContextMsgList'
import ChatMsgBox from './ChatMsgBox'

export default function ChatView () {
  const msgList = useContext(ContextMsgList)

  return (
    <div id="cv" className="cv">
      {msgList.map(msg =>
        <ChatMsgBox key={msg.createdAt} msg={msg} user={msg.user}/>
      )}

      <style jsx>{`
        @import "../styles";

        .cv {
          overflow-y: auto;
          display: grid;
          grid-template-columns: 1fr;
          flex-direction: column;
          justify-content: flex-end;
          grid-gap: 12px;
          margin: auto 0 24px;
          padding-right: 8px;

          @media (max-width: $mobile) {
            margin-top: 24px;
          }
        }
      `}</style>
    </div>
  )
}
