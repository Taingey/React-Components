import React from 'react'
import './App.css'
import { Sidebar } from './Components/Sidebar'
import { Main } from './Components/Main/Main'
import { Header } from './Components/Header'


function App() {

  return (
    <div className="App h-screen w-full bg-slate-800/95 relative flex overflow-hidden">
      <Sidebar />
      <div className="w-full h-full flex flex-col justify-between">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
