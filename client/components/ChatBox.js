import ContentWrapper from './ContentWrapper'
import Image from 'next/image'
import { useContext } from 'react'
import ContextMsgList from '../contexts/ContextMsgList'
import { useTranslation } from 'next-i18next'

export default function ChatBox () {
  const msgList = useContext(ContextMsgList)
  const { t } = useTranslation('common')

  return (
    <div className="cc">
      <ContentWrapper>
        <Image src="/images/common-chat-logo.svg" alt="common-chat-logo" height={40} width={40}/>
        <div className="cc__text">
          <p className="font-body-1 font-medium">{t('general-chat')}</p>
          <p className="font-body-2 cc__last-msg">
            {msgList[msgList.length - 1]?.message || t('empty-chat')}
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
