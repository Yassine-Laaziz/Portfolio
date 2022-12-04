import { useId } from "react"
import "./Main.css"
import { Projects, Contracts } from "../constants"

const Main = () => {
  // Navbar
  const toggleMenu = () =>
    document.querySelector(".navbar-links").classList.toggle("active")

  // Content
  const Generate = () => useId()

  return (
    <main className="Main">
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
              <a href="#contracts">Contracts</a>
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
          <a href="#about-me" className="Title">
            About Me
          </a>
          <h3>
            Hello there, I'm Yassine, a Front-end web developer who've had some
            experience in backend because I like Web development overall, and
            currently I'm trying to master Front-end web development, And don't
            worry if i don't know a skill because I'm a Fast Learner.
          </h3>
        </section>

        {/* Skills */}
        <section id="skills">
          <a href="#skills" className="Title">
            skills
          </a>
          <div className="flexbox">
            <div>
              <h4>Html/Css</h4>
              <p>
                Tailwind <br />
                Framer Motion <br />
                Advanced html/css concepts <br />
                Responsiveness <br />
                ...
              </p>
            </div>
            <div>
              <h4>javascript</h4>
              <p>
                React-js <br />
                Next-js <br />
                TypeScript <br />
                Axios, JSON/AJAX <br />
                ...
              </p>
            </div>
            <div>
              <h4>Other</h4>
              <p>
                Git & Github <br />
                Regex <br />
                npm <br />
                ...
              </p>
            </div>
            <div>
              <h4>Learning</h4>
              <p>
                Bootstrap <br />
                TypeScript <br />
              </p>
            </div>
            <div>
              <h4>Backend</h4>
              <p>
                MERN Stack <br />
                Signup / Login <br />
                Authentication <br />
                Authorization <br />
                ...
              </p>
            </div>
          </div>
        </section>
        {/* Contracts */}
        <section id="contracts">
          <a href="#contracts" className="Title">
            contracts
          </a>
          <div className="flexbox" style={{ gap: "40px" }}>
            {Contracts.map((Contract) => {
              const { Img, webLink, codeLink, description } = Contract
              return (
                <div className="Project" key={Generate()}>
                  <div className="project-main">
                    <Img />
                    <a
                      className="web-link"
                      href={webLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Show Website
                    </a>
                    {codeLink ? (
                      <a
                        className="code-link"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={codeLink}
                      >
                        Show Code
                      </a>
                    ) : (
                      <div className="code-link unavailable">Unavailable</div>
                    )}
                  </div>

                  <div className="project-description">{description}</div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <a href="#projects" className="Title">
            projects
          </a>
          <div className="flexbox" style={{ gap: "40px" }}>
            {Projects.map((Project, i) => {
              const { Img, webLink, codeLink, description } = Project
              return (
                <div className="Project" key={`Projects-project-${i}`}>
                  <div className="project-main">
                    <Img />
                    <a
                      className="web-link"
                      href={webLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Show Website
                    </a>
                    {codeLink ? (
                      <a
                        className="code-link"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={codeLink}
                      >
                        Show Code
                      </a>
                    ) : (
                      <div className="code-link unavailable">Unavailable</div>
                    )}
                  </div>

                  <div className="project-description">{description}</div>
                </div>
              )
            })}
          </div>
        </section>
        {/* Contact me */}
        <section id="contact-me">
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
    </main>
  )
}

export default Main
