import NavbarLogo from './NavbarLogo'
import NavbarUserInfo from './NavbarUserInfo'
import { useContext, useState } from 'react'
import NavbarButtonExpand from './NavbarButtonExpand'
import MobileInfo from './MobileInfo'
import ContextUser from '../contexts/ContextUser'

export default function Navbar () {
  const [isOpenMobileInfo, setIsOpenMobileInfo] = useState(false)
  const user = useContext(ContextUser)

  return (
    <>
      <div className="navbar">
        <NavbarLogo/>

        {user &&
        <NavbarButtonExpand isOpenMobileInfo={isOpenMobileInfo}
                            onClick={() => setIsOpenMobileInfo(!isOpenMobileInfo)}/>}

        {(user && isOpenMobileInfo) && <MobileInfo/>}

        {user && <NavbarUserInfo userInfo={user}/>}
      </div>

      {user && <div className="divider"/>}

      <style jsx>{`
        @import "../styles";

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: $max-content;
          margin: auto;

          @media (min-width: $tablet) {
            width: $max-content;
            height: 110px;
          }
        }

        .divider {
          position: absolute;
          border-bottom: $line;
          top: 80px;
          left: 0;
          width: 100%;

          @media (min-width: $tablet) {
            min-width: $max-content;
            top: 110px;
          }
        }
      `}</style>
    </>
  )
}
