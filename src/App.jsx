import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Dock></Dock>
       <Github></Github>
    </main>
  )
}

export default App