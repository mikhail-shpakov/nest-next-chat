import React from 'react'
import useDarkMode from 'use-dark-mode'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div>
      <button type="button" onClick={darkMode.disable}>
        Светлый
      </button>
      <button type="button" onClick={darkMode.enable}>
        Тёмный
      </button>
    </div>
  )
}

export default DarkModeToggle
