import { BrowserRouter } from "react-router-dom";

import {
  Contact,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
  Contracts,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" fixed h-screen w-full z-[-10] left-0 top-0 overflow-hidden">
          <StarsCanvas />
        </div>
        <div className="relative bg-cover bg-opacity-20 bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* <About /> */}
        {/* <Experience /> */}
        <Contracts />
        <Projects />
        <Tech />
        {/* <SoftSkills /> */}
        {/* <Achievements /> */}
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
