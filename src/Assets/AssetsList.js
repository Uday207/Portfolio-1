// Projects
import ecommlogo from "../Assets/Project-Images/Online Groceries-amico.svg";
import portfolioLogo from "../Assets/Project-Images/Thesis-amico.svg";
import mealsLogo from "../Assets/Project-Images/Coffee shop-amico.png";
import weatherAppLogo from "../Assets/Project-Images/Weather-bro.svg";
import imdbLogo from "../Assets/Project-Images/Movie Night-amico.svg";
import loader from "../Assets/loader.svg"

// Animations
import aboutAnimation from "./Animations/AboutAnimation.json";
import contactAnimation from "./Animations/ContactAnimation.json";
import heroAnimation from "./Animations/HeroAnimation.json";
import skillsAnimation from "./Animations/SkillsAnimation.json";
import project from "./Animations/Project.json";
import { Link } from "react-scroll";


// Skills

import JavaScript from '../Assets/Skills/JavaScript.svg'
import ReactJS from '../Assets/Skills/ReactJS.svg'
import TailwindCSS from '../Assets/Skills/TailwindCSS1.svg'
import GraphQL from '../Assets/Skills/GraphQL.png'
import NodeJS from '../Assets/Skills/NodeJS.svg'
import MongoDB from '../Assets/Skills/MongoDB.svg'
import Github from '../Assets/Skills/Github.svg'
import NextJS from '../Assets/Skills/Next.js.png'
import ExpressJS from '../Assets/Skills/ExpressJS.svg'
import Mysql from '../Assets/Skills/mysql-logo-svgrepo-com.svg'

// Main  Logo

export const MainLogo =
  <Link
    to="/"
    onClick={() => window.scroll(0, 0)}
    className="nav-logo font-black leading-none text-gray-800 font-bebas-neue   dark:text-lightText flex items-center ml-4 cursor-pointer  no-underline text-4xl "
  >
    U&nbsp;
    <span className="r font-bebas-neue text-mainTheme text-5xl font-bold">द</span>
    &nbsp;y
  </Link>

// All  Projects Images

export const ECmomLogo = ecommlogo;
export const PortfolioLogo = portfolioLogo;
export const MealsLogo = mealsLogo;
export const WeatherAppLogo = weatherAppLogo;
export const IMDBLogo = imdbLogo;
export const Loader = loader;

// All Animations

export const AboutAnimation = aboutAnimation;
export const ContactAnimation = contactAnimation;
export const HeroAnimation = heroAnimation;
export const ProjectAnimation = project;
export const SkillsAnimation = skillsAnimation;

// All Skills
export const JavaScriptLogo = JavaScript
export const ReactJSLogo = ReactJS
export const TailwindCSSLogo = TailwindCSS
export const GraphQLLogo = GraphQL
export const NodeJSLogo = NodeJS
export const MongoDBLogo = MongoDB
export const GithubLogo = Github
export const NextJSLogo = NextJS
export const ExpressJSLogo = ExpressJS
// export const NetlfyLogo = Netlify
export const MysqlLogo = Mysql

