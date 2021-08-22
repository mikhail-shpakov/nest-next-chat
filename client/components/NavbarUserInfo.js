import Image from 'next/image'
import NavbarLogout from './NavbarLogout'

export default function NavbarUserInfo (props) {
  return (
    <div className="nui">
      <div className="nui__wrapper">
        <p className="font-body-1 font-medium nui__name">{props.userInfo.name}</p>
        <p className="nui__email font-body-2">{props.userInfo.email}</p>
      </div>
      <Image className="nui__photo" src={props.userInfo.photo} alt="user-photo" width={42} height={42}/>

      <NavbarLogout/>

      <style jsx>{`
        .nui {
          position: relative;
          display: flex;
          align-items: center;
          height: 80px;

          &:hover :global(.nbl) {
            display: flex;
          }

          &__wrapper {
            display: flex;
            flex-direction: column;
            text-align: right;
            margin-right: 16px;
          }

          &__email {
            color: var(--color-alt);
          }

          :global(.nui__photo) {
            border-radius: 100px;
          }
        }
      `}</style>
    </div>
  )
}
