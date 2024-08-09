import React from 'react'
import Navbar from './assets/component/Navbar/Navbar'

const [theme, setTheme] = useState('light')


export const App = () => {
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App