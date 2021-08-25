import Image from 'next/image'
import ContentWrapper from './ContentWrapper'
import { useContext, useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import dayjs from 'dayjs'
import ContextUser from '../contexts/ContextUser'

export default function ChatMsgBox (props) {
  const user = useContext(ContextUser)
  const [isSelfMsg, setIsSelfMsg] = useState(true)

  useEffect(() => {
    setIsSelfMsg(props.user.thirdPartyId === user.thirdPartyId)
  }, [user, props.user])

  return (
    <div className={`cmb ${isSelfMsg && 'cmb__self'}`}>
      <div className="cmb__img"
           data-tip={`${props.user.name} <br> ${dayjs(props.msg.createdAt).format('DD.MM.YYYY HH:mm:ss')}`}>
        <Image src={props.user.photo} alt="user-photo" width={24} height={24}/>
      </div>
      <ContentWrapper>{props.msg.message}</ContentWrapper>

      <ReactTooltip effect="solid" multiline className="cmb__tooltip" place="left"/>

      <style jsx>{`
        @import "../styles";

        .cmb {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: end;
          grid-gap: 12px;

          :global(img) {
            border-radius: $border-radius-secondary;
          }

          :global(.cw) {
            margin: 0;
            padding: 10px 20px;

            &:hover {
              background-color: $color-box;
            }
          }

          &__img {
            flex-shrink: 0;
          }

          :global(.cmb__tooltip) {
            border-radius: $border-radius-primary !important;
          }

          &__self {
            flex-direction: row-reverse;

            :global(.cw) {
              background-color: $color-accent;
              color: white;

              &:hover {
                background-color: $color-accent;
              }
            }
          }
        }
      `}</style>
    </div>
  )
}
