import Image from 'next/image'
import { useState } from 'react'

export default function ChatInput () {
  const [msg, setMsg] = useState('')

  const handleMsg = (e) => setMsg(e.target.value)

  return (
    <div className="ci">
      <input value={msg} onChange={handleMsg} className="font-body-2 ci__input" placeholder="Напишите сообщение..."/>
      <button className="ci__send">
        <Image src="/images/send.svg" alt="send" width={24} height={24}/>
      </button>

      <style jsx>{`
        .ci {
          display: flex;
          align-items: center;

          &__input {
            height: 40px;
            width: 100%;
            border-radius: var(--border-radius-secondary);
            border: var(--line);
            padding: 0 20px;
            transition: var(--transition);
            
            &:hover,
            &:active,
            &:focus {
              border-color: var(--color-accent);
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
