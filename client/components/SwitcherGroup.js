import ThemeSwitcher from './ThemeSwitcher'
import LangSwitcher from './LangSwitcher'

export default function SwitcherGroup () {
  return (
    <div className="sg">
      <LangSwitcher/>
      <ThemeSwitcher/>

      <style jsx>{`
        .sg {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 28px;
          width: fit-content;
        }
      `}</style>
    </div>
  )
}
