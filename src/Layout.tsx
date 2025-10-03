import {
  Contact,
  Hero,
  Navbar,
  Tech,
  Projects,
  CosmicBackground,
  Contracts,
} from "./components";

const Layout = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className=" fixed h-screen w-full z-[-10] left-0 top-0 overflow-hidden">
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
      {/* <SoftSkills /> */}
      {/* <Achievements /> */}
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
};

export default Layout;
