import Image from 'next/image'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

export default function NavbarLogout () {
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['jwt'])

  const logout = async () => {
    removeCookie('jwt')
    await router.push('/')
  }

  return (
    <button className="nbl" onClick={logout}>
      <span className="font-body-1 font-medium">Выйти</span>
      <Image src="/images/arrow.svg" alt="arrow" height={24} width={24}/>

      <style jsx>{`
        .nbl {
          border-radius: var(--border-radius-secondary);
          box-shadow: var(--box-shadow);
          padding: 14px 20px;
          position: absolute;
          background: var(--color-background);
          right: 0;
          bottom: -44px;
          display: none;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          width: 180px;
          transition: var(--transition);
          z-index: 1;

          &:hover {
            color: var(--color-accent);
          }
        }
      `}</style>
    </button>
  )
}
