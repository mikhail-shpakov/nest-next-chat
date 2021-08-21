import Image from 'next/image'
import Link from 'next/link'

export default function NavbarUserInfo () {
  return (
    <>
      <Link href="/">
        <a className="nl">
          <Image src="/images/logo.svg" alt="logo" width={64} height={64}/>
          <span className="font-title-1 font-medium">Мессенджер</span>
        </a>
      </Link>

      <style jsx>{`
        .nl {
          display: flex;
          align-items: center;
          transition: var(--transition);

          &:hover {
            color: var(--color-accent);
          }

          @media (max-width: 768px) {  // todo
            display: none;
          }
        }
      `}</style>
    </>
  )
}
