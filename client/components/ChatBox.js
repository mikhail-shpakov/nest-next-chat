import ContentWrapper from './ContentWrapper'
import Image from 'next/image'
import { useContext } from 'react'
import ContextMsgList from '../contexts/ContextMsgList'

export default function ChatBox () {
  const msgContext = useContext(ContextMsgList)

  return (
    <div className="cc">
      <ContentWrapper>
        <Image src="/images/common-chat-logo.svg" alt="common-chat-logo" height={40} width={40}/>
        <div className="cc__text">
          <p className="font-body-1 font-medium">Общий чат</p>
          <p className="font-body-2 cc__last-msg">
            {msgContext[msgContext.length - 1]?.message || 'В чате пока нет сообщений'}
          </p>
        </div>
      </ContentWrapper>

      <style jsx>{`
        .cc {
          cursor: pointer;

          &__text {
            margin-left: 16px;
          }

          &__last-msg {
            width: 230px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  )
}
