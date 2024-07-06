import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <SocialLinks />
      <Contact />
    </>
  )
}

export default App
