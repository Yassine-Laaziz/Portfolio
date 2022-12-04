export const Contracts = [
  {
    webLink: "https://tangierhorizons.netlify.app",
    description: `a normal React association website that i developed according to design where i handled large amounts of assets and files, implemented toggle between themes functionality and some css tricks along the way`,
    Img: () => (
      <img
        src={require("./Assets/TangierHorizons.png")}
        alt="Tangier Horizons Project"
        className="project-img"
      />
    ),
  },
  {
    webLink: "https://arganaya.vercel.app",
    codeLink: "https://github.com/Yassine-Laaziz/Arganaya.git",
    description:
      "This was a heavy next.js project where i used the MERN stack to implement Signup and Login functionalities, JOSE (like jwt,) for user authentication, authorization, middleware protected routes, also implemented all shopping functionalities and food customization, i planned that the 'checkout' functionality would contain multiple payment methods like stripe but the Company preferred the 'pay as you receive' method ",
    Img: () => (
      <img
        src={require("./Assets/Arganaya.png")}
        alt="Arganaya Project"
        className="project-img"
      />
    ),
  },
]

export const Projects = [
  {
    webLink: "https://metaverse-yl.vercel.app",
    codeLink: "https://github.com/Yassine-Laaziz/metaverse.git",
    description:
      "this is a project where the main subject is tailwind css and 'framer-motion'",
    Img: () => (
      <img
        src={require("./Assets/Metaverse.png")}
        alt="Metaverse Project"
        className="project-img"
      />
    ),
  },
  {
    webLink: "https://ip-tracker-yl.netlify.app",
    codeLink: "https://github.com/Yassine-Laaziz/Ip-tracker.git",
    description:
      "An IP Tracker Built using simple rest api's, user enters IP, website uses api to fetch the ip json, display it properly and assign it's latitude and longitude to an api map, if user enters a blank ip the website uses another api to get the ip first",
    Img: () => (
      <img
        src={require("./Assets/ip-tracker.png")}
        alt="IP Tracker Project"
        className="project-img"
      />
    ),
  },
  {
    webLink: "https://Yassine-Laaziz.netlify.app",
    codeLink: "https://github.com/Yassine-Laaziz/Portfolio.git",
    description: "A Super simple Portfolio.",
    Img: () => (
      <img
        src={require("./Assets/Background-img.png")}
        alt="Portfolio"
        className="project-img"
      />
    ),
  },
  {
    webLink: "https://frontend-creditcard-authentication.netlify.app",
    codeLink: "https://github.com/Yassine-Laaziz/Credit-card-validation",
    description: "an old project, generally Learnt DOM manipulation.",
    Img: () => (
      <img
        src={require("./Assets/Credit-card-validation.png")}
        alt="Credit Card Project"
        className="project-img"
      />
    ),
  },
]
