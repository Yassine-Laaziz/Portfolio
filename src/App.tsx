import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Hero, Navbar, Tech, Projects, StarsCanvas, Contracts } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-cover bg-opacity-20 bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Contracts />
        <Projects />
        <Tech />
        {/* <SoftSkills /> */}
        {/* <Achievements /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
