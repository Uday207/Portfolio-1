import {
  ECmomLogo,
  IMDBLogo,
  PortfolioLogo,
  MealsLogo,
  WeatherAppLogo,
} from "../Assets/AssetsList";

export const ProjectList = [
  
  {
    key: 1,
    name: "Orebi-shopping(E-commerce)",
    image: ECmomLogo,
    skills: ["ReactJS, Tailwind CSS, Framer Motion, React-Router-DOM"],
    codeLink: "https://github.com/Uday207/orebishopping",
    demoLink: "https://uday207-orebi-shopping.netlify.app/",
    info: "The e-commerce web app is a responsive, user-friendly platform built with React.js and Tailwind CSS. It features a dynamic header with dropdown login options for Admin and Customer. Login and signup are handled via animated modals on the same page. Users can search and filter products, view details, add items to the cart, and manage favorites. Product cards include images, names, and action buttons. Framer Motion adds smooth animations for better user experience.",
    
  },
  {
    key: 2,
    name: "Online-Food-Delivery-App",
    image: MealsLogo,
    skills: ["ReactJS, Reactstrap, CSS3, Bootstrap, JSX, React Router"],
    codeLink: "https://github.com/Uday207/react-food-delivery-app",
    demoLink: "https://uday207-react-food-delivery-app.netlify.app/home",
    info: "Designed a responsive and user-friendly food ordering interface featuring a clean navigation bar with links to Home, Foods, Cart, and Contact. The UI includes a dynamic cart icon that updates in real-time, enhancing user interaction. A visually engaging hero section with bold typography and a clear call-to-action button encourages menu exploration. Vibrant colors and fun illustrations create an appealing visual experience, while the layout is optimized for responsiveness and accessibility across all devices, ensuring smooth navigation and quick user engagement.",
  },
  {
    key: 3,
    name: "IMDB-Movie app Clone",
    image: IMDBLogo,
    skills: ["React,React Router,CSS,TMDB-API"],
    codeLink: "https://github.com/Uday207/imdb-clone",
    demoLink: "https://imdb-uday207.netlify.app/",
    info: "As a web developer, I designed and built an IMDB clone website using React JS, HTML, and CSS. The website allows users to browse popular, top-rated, and upcoming movies, in addition to searching for specific movies. Users can also watch trailers, view cast information, and read reviews for each movie.To make this website possible, I utilized my skills [in web] development to create a functional and user-friendly application. Specifically, I made API calls to retrieve the necessary data and implemented various design features to enhance the user experience.",
  },
  {
    key: 4,
    name: "Personal Portfolio",
    image: PortfolioLogo,
    skills: ["React,React Router, CSS"],
    codeLink: "https://github.com/Uday207/Portfolio",
    demoLink: "https://uday207-portfolio.netlify.app/",
    info: "I created a personal portfolio website using React JS, HTML, and CSS to showcase my projects, skills,[ and background.] The website serves as a platform for people to learn more about me and my professional accomplishments.My portfolio features information about my education, work experience, and technical skills,[ as well as a section highlighting my completed] projects. Overall, my portfolio serves as a valuable asset in advancing my career and achieving my professional goals.",
  },
  {
    key: 5,
    name: "Real Time Weather App",
    image: WeatherAppLogo,
    skills: ["React JS ,Open Weather API,HTML, CSS"],
    codeLink: "https://github.com/Uday207/weather-app",
    demoLink: "https://uday207-weather-app1.netlify.app/",
    info: "I developed a real-time weather web application that is powered by the OpenWeatherAPI. The website provides up-to-date information on the current temperature, as well as the maximum and minimum temperature, weather, wind speed, sunrise and sunset times, humidity, and pressure.The user- friendly interface allows users to easily access the weather information for any location in the world.",
  },
];

