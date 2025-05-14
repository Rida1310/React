import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './HeroSection'
import MainSection from './MainSection'
import { SectionThree } from './SectionThree'
import { SectionFour } from './SectionFour'
import SectionSix from './SectionSix'
import { SectionFive } from './SectionFive'
import SectionSeven from './SectionSeven'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainSection/>
      <HeroSection/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <Footer/>
    </>
  )
}

export default App
