import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./components/Loading";
import {
  Contact,
  Hero,
  Navbar,
  Tech,
  Projects,
  Contracts,
  Achievements,
  CosmicBackground,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <div className="relative bg-primary">
          <div className=" fixed h-screen w-full left-0 top-0 overflow-hidden">
            <CosmicBackground />
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
          <Achievements />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
