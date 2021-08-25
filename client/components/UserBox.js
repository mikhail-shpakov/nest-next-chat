import Image from 'next/image'

export default function UserBox (props) {
  return (
    <div className="ub">
      <Image src={props.user.photo} alt="user-photo" height={40} width={40}/>
      <div className="ub__text">
        <p className="font-body-1 font-medium">{props.user.name}</p>
        <p className="font-body-2 ub__email">{props.user.email}</p>
      </div>
      <div className={`ub__status ${props.user.isOnline ? 'ub__status-online' : null}`}/>

      <style jsx>{`
        @import "../styles";

        .ub {
          cursor: default;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 24px 0;
          border-bottom: $line;
          margin-right: 8px;

          :global(img) {
            border-radius: $border-radius-secondary;
          }

          &__text {
            margin-left: 16px;
          }

          &__email {
            color: $color-alt;
          }

          &__status {
            border-radius: 100%;
            width: 8px;
            height: 8px;
            background-color: $color-alt;
            margin: 0 4px 0 auto;

            &-online {
              background-color: $color-success;
            }
          }
        }
      `}</style>
    </div>
  )
}
