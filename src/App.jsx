
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Process from './pages/process'
import About from './pages/About'
import NavBar from './components/NavBar/NavBar'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import Dashboard from './pages/Dashboard'

function App() {
  const navitem =[
    {
      content:"Home",
      href:"/"
    },
    {
      content:"Work",
      href:"/work"
    },
    {
      content:"Process",
      href:"/process"
    },
    {
      content:"About",
      href:"/about"
    },
    {
      content:"Dashboard",
      href:"/dashboard"
    },
    {
      content:"Contact",
      href:"/contact_us"
    }
  ]
  const liFooter = [
    { content: "Home" },
    { content: "Services" },
    { content: "Work" },
    { content: "Process" },
    { content: "About" },
    { content: "Careers" },
    { content: "Contact" }
  ]
  return (
    <>
    <NavBar
      logo="assets/img/logo-navbar.png"
      items={navitem}
      btn="Contact Us"
      media_btn= "assets/img/nav-ul-media.svg"
    />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/process" element={<Process/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/contact_us" element={<Contact/>}/>
    </Routes>
    <Footer
      logo="assets/img/logo-navbar.png"
      items={liFooter}
    />
    </>
  )
}

export default App
