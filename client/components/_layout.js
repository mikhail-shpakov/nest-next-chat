import Navbar from './Navbar'

export default function _layout ({ children }) {
  return (
    <div className="main">
      <Navbar/>
      <main>{children}</main>

      <style jsx>{`
        .main {
          padding: 0 20px 0;
        }
      `}</style>
    </div>
  )
}
