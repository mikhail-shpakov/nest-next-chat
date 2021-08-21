import NavbarLogo from './NavbarLogo'

export default function Navbar () {
  return (
    <>
      <div className="navbar">
        <NavbarLogo/>
      </div>

      <div className="divider"/>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          max-width: var(--max-content);
          margin: auto;

          @media (min-width: 769px) { // todo
            height: 110px;
          }
        }

        @media (min-width: 769px) { // todo
          .divider {
            border-bottom: var(--line);
            margin: 0 -20px;
          }
        }
      `}</style>
    </>
  )
}
