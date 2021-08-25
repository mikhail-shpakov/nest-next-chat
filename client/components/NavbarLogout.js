import Image from 'next/image'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import ContextSocket from '../contexts/ContextSocket'
import useDarkMode from 'use-dark-mode'

export default function NavbarLogout () {
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['jwt'])
  const socket = useContext(ContextSocket)
  const darkMode = useDarkMode()

  const logout = async () => {
    removeCookie('jwt')
    socket.disconnect()
    await router.push('/')
  }

  return (
    <button className="nbl" onClick={logout}>
      <span className="font-body-1 font-medium">Выйти</span>
      <Image src={`/images/arrow-${darkMode.value ? 'dark' : 'light'}.svg`} alt="arrow" height={24} width={24}/>

      <style jsx>{`
        @import "../styles";

        .nbl {
          border-radius: $border-radius-secondary;
          box-shadow: $box-shadow;
          padding: 14px 20px;
          position: absolute;
          background: $color-background;
          right: 0;
          bottom: -44px;
          display: none;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          width: 180px;
          transition: $transition;
          z-index: 1;

          &:hover {
            color: $color-accent;
          }
        }
      `}</style>
    </button>
  )
}
