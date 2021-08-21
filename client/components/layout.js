import Navbar from './Navbar'

export default function Layout ({ children }) {
  return (
    <div className="main">
      <Navbar/>
      <main>{children}</main>

      <style jsx>{`
        .main {
          padding: 0 20px 32px;
        }
      `}</style>
    </div>
  )
}
