import useDarkMode from 'use-dark-mode'
import Image from 'next/image'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <button className="font-body-2 font-medium ts" type="button" onClick={darkMode.toggle}>
      <Image src={`/images/${darkMode.value ? 'dark' : 'light'}-mode.svg`} alt="mode" height={24} width={24}/>
      {darkMode.value ? 'Светлая тема' : 'Тёмная тема'}

      <style jsx>{`
        @import "../styles";

        .ts {
          cursor: pointer;
          display: flex;
          align-items: center;
          grid-gap: 8px;
          transition: $transition;
          color: $color-main;
          margin: 24px 0;
        }
      `}</style>
    </button>
  )
}

export default DarkModeToggle
