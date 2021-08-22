import NavbarLogo from './NavbarLogo'
import NavbarUserInfo from './NavbarUserInfo'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import { decode } from 'jsonwebtoken'
import NavbarButtonExpand from './NavbarButtonExpand'
import MobileInfo from './MobileInfo'

export default function Navbar () {
  const [cookies] = useCookies(['jwt'])
  const [userInfo, setUserInfo] = useState(null)
  const [isOpenMobileInfo, setIsOpenMobileInfo] = useState(false)

  useEffect(() => {
    const info = !cookies.jwt ? null : decode(cookies.jwt)
    setUserInfo(info)
  }, [cookies.jwt])

  return (
    <>
      <div className="navbar">
        <NavbarLogo/>

        {userInfo &&
        <NavbarButtonExpand isOpenMobileInfo={isOpenMobileInfo}
                            onClick={() => setIsOpenMobileInfo(!isOpenMobileInfo)}/>}

        {isOpenMobileInfo && <MobileInfo/>}

        {userInfo && <NavbarUserInfo userInfo={userInfo}/>}
      </div>

      <div className="divider"/>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: var(--max-content);
          margin: auto;

          @media (min-width: 769px) {
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
            top: 110px;
          }
        }
      `}</style>
    </>
  )
}
