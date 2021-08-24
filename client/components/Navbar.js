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

        {isOpenMobileInfo && <MobileInfo/>}
        <NavbarUserInfo userInfo={user}/>}
      </div>

      {user && <div className="divider"/>}

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: var(--max-content);
          margin: auto;

          @media (min-width: 769px) {
            width: var(--max-content);
            height: 110px;
          }
        }

        .divider {
          position: absolute;
          border-bottom: var(--line);
          top: 80px;
          left: 0;
          width: 100%;

          @media (min-width: 769px) {
            min-width: var(--max-content);
            top: 110px;
          }
        }
      `}</style>
    </>
  )
}
