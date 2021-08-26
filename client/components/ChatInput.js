import Image from 'next/image'
import { useContext, useState } from 'react'
import ContextUser from '../contexts/ContextUser'
import ContextSocket from '../contexts/ContextSocket'
import { useTranslation } from 'next-i18next'

export default function ChatInput () {
  const socket = useContext(ContextSocket)
  const user = useContext(ContextUser)
  const [localMsg, setLocalMsg] = useState('')
  const { t } = useTranslation('common')

  const handleMsg = (e) => setLocalMsg(e.target.value)
  const handleClick = () => {
    if (!localMsg) return

    const message = { thirdPartyId: user.thirdPartyId, message: localMsg }

    socket.emit('messages:add', message)
    setLocalMsg('')
  }

  const handleKeypress = e => {
    if (e.code === 'Enter') {
      handleClick()
    }
  }

  return (
    <div className="ci">
      <input value={localMsg} onChange={handleMsg} onKeyPress={handleKeypress} className="font-body-2 ci__input"
             placeholder={t('input-placeholder')}/>
      <button onClick={handleClick} className="ci__send">
        <Image src="/images/send.svg" alt="send" width={24} height={24}/>
      </button>

      <style jsx>{`
        @import "../styles";

        .ci {
          display: flex;
          align-items: center;

          &__input {
            height: 40px;
            width: 100%;
            border-radius: $border-radius-secondary;
            border: $line;
            padding: 0 20px;
            transition: $transition;
            background: $color-background;
            color: $color-main;

            &:hover,
            &:active,
            &:focus {
              border-color: $color-accent;
            }
          }

          &__send {
            width: 40px;
            height: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-left: 4px;
            transition: all 50ms ease-in-out;

            &:active:not(&[disabled]) {
              transform: translateX(2px);
            }
          }
        }
      `}</style>
    </div>
  )
}
