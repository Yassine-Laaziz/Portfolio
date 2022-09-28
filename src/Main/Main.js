import { useId } from "react"
import "./Main.css"

const Main = () => {
  // Navbar
  const toggleMenu = () =>
    document.querySelector(".navbar-links").classList.toggle("active")

  // Content
  const Generate = () => useId()
  const Projects = [
    {
      imgSrc: require("../Assets/Background-img.jpg"),
      imgAlt: "Portfolio",
      webLink: "https://Yassine-Laaziz.netlify.app",
      codeLink: "https://github.com/Yassine-Laaziz/Portfolio.git",
      description: "A Super simple Portfolio",
    },
    {
      imgSrc: require("../Assets/credit-card-validation.png"),
      imgAlt: "Credit Card Project",
      webLink: "https://frontend-creditcard-authentication.netlify.app",
      codeLink: "https://github.com/Yassine-Laaziz/Credit-card-validation",
      description: `A Client Side Credit card Validation That simulates AJAX to backend, 
      and based on the responseText it Behaves, I Coul've made this with stripe or an api
      but i knew i'd learn more doing it without.`,
    },
    {
      imgSrc: require("../Assets/TangierHorizons.png"),
      imgAlt: "Credit Card Project",
      webLink: "https://tangierhorizons.netlify.app",
      description: `A Multi-Paged Website Made with React Route V6
      That Soldified to me The Experience of handling and organizing Large Amount of code`,
    },
  ]
  // Choose between Available Link or Unavailable Link in projects
  const Chooser = Project => {
    if (Project.codeLink !== undefined) {
      return (
        <a
          className="code-link"
          rel="noopener noreferrer"
          target="_blank"
          href={Project.codeLink}
          key={Generate()}
        >
          Show Code
        </a>
      )
    } else {
      return (
        <div className="code-link unavailable" key={Generate()}>
          Unavailable
        </div>
      )
    }
  }

  return (
    <>
      {/* ====Navbar===== */}

      <nav className="navbar">
        <div onClick={toggleMenu} className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact-me">Contact me</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* =====Content===== */}

      <div className="content">
        {/* About me */}
        <section id="about-me">
          <br /> <br />
          <a href="#about-me" className="Title">
            About Me
          </a>
          <h3 style={{ lineHeight: "50px" }}>
            I'm Yassine, an Adaptive Team Player, I like Web development,
            specially Making Useful Methods and New Creative Solutions, &
            Currently I'm trying to follow my passion in mastering web
            development, well.. Frontend for now, And don't worry if i don't
            know a skill or something then I'm a Fast Learner.
          </h3>
        </section>

        {/* Skills */}
        <section id="skills">
          <br /> <br />
          <a href="#skills" className="Title">
            skills
          </a>
          <br />
          <br />
          <div className="flexbox">
            <h3>
              <p className="list-title html-css">Html/Css</p> <br />
              Advanced Html/Css <br />
              Animation Basics <br />
              Css Variables <br />
              Regex <br />
              more.. <br />
            </h3>
            <h3>
              <p className="list-title learning">Learning</p> <br />
              Communicating with Backend <br />
              Advanced+ Html/Css <br />
              Advanced React/Javascript <br />
            </h3>
            <h3>
              <p className="list-title javascript">javascript</p> <br />
              Moderate Javascript <br />
              Moderate React <br />
              Json/Ajax <br />
              Regex <br />
              Api <br />
            </h3>
            <h3>
              <p className="list-title">Going To Learn</p> <br />
              Sass <br />
              Bootstrap <br />
              Backend <br />
            </h3>
            <h3>
              <p className="list-title other">Other</p> <br />
              Git <br />
              Github <br />
              Testing/Debugging <br />
              npm <br />
              Regex <br />
            </h3>
          </div>
        </section>
        {/* Projects */}
        <section id="projects">
          <br /> <br />
          <a href="#projects" className="Title">
            projects
          </a>
          <br /> <br />
          <div className="flexbox" style={{ gap: "40px" }}>
            {Projects.map((Project) => {
              return (
                <div className="Project" key={Generate()}>
                  <div className="project-main">
                    <img
                      className="project-img"
                      src={Project.imgSrc}
                      alt={Project.imgAlt}
                      key={Generate()}
                    />
                    <a
                      className="web-link"
                      href={Project.webLink}
                      rel="noopener noreferrer"
                      target="_blank"
                      key={Generate()}
                    >
                      Show Website
                    </a>
                    {Chooser(Project)}
                  </div>

                  <div className="project-description">
                    {Project.description}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        {/* Contact me */}
        <section id="contact-me">
          <br /> <br />
          <a href="#contact-me" className="Title">
            Contact Me
          </a>
          <form
            className="contact-form"
            action="https://formspree.io/f/xpznqllp"
            method="POST"
          >
            <input
              name="Name"
              placeholder="Name"
              title="Your Name"
              pattern="[a-zA-Z]+"
              required
            />
            <input
              name="Email"
              type="email"
              placeholder="Email"
              title="Please enter your email"
              pattern="[a-zA-Z\d].*[a-zA-Z\d]@.+\..{2,4}"
              required
            />
            <textarea
              name="Message"
              placeholder="Message"
              title="Please attach your message"
              required
            />

            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </>
  )
}

export default Main
