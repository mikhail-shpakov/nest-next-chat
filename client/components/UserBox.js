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
        .ub {
          cursor: pointer;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 24px 0;
          border-bottom: var(--line);

          :global(img) {
            border-radius: var(--border-radius-secondary);
          }

          &__text {
            margin-left: 16px;
          }

          &__email {
            color: var(--color-alt);
          }

          &__status {
            border-radius: 100%;
            width: 8px;
            height: 8px;
            background-color: var(--color-alt);
            margin: 0 12px 0 auto;

            &-online {
              background-color: var(--color-success);
            }
          }
        }
      `}</style>
    </div>
  )
}
