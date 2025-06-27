import { FaGithub } from 'react-icons/fa';
import {
  FOOD_APP,
  AUTH_APP,
  MOVIE_STREAMING,
  YOUR_RECIPE,  
} from '../utils/constants';

import recipe from '../assets/image/recipe.png';
/* import grocery from '../assets/image/grocery.png';
import codepen from '../assets/image/codepen.png';
import video from '../assets/image/video.png'; */
import food from '../assets/image/food.png';
import movie from '../assets/image/movie.png';
import jwt from '../assets/image/jwt.png';
const projects = [
  {
    title: "Food Order App",
    img: food,
    link: FOOD_APP,
    desc: `Namaste Food is a React-based food ordering app built with Parcel for fast builds and modern bundling. 
    It features component-based architecture, state management using Redux Toolkit, and supports client-side routing. 
    The app includes unit testing using Jest and React Testing Library. Optimized with features like HMR, 
    tree shaking, code splitting, image optimization, and differential bundling for older browsers.`,
    source: "https://github.com/reshma-sk/react-series-09",
  },
  {
    title: "Movie Streaming App",
    img: movie,
    link: MOVIE_STREAMING,
    desc: `Built a Netflix-inspired movie app with Firebase authentication, Tailwind CSS, and TMDB API. Integrated OpenAI to enable GPT-powered movie search. Managed state using Redux Toolkit with custom slices and hooks. Features include secure login/signup, responsive UI, autoplaying trailers,
     protected routes, and environment-based config. Deployed to production with .env for API security.`,
    source: "https://github.com/reshma-sk/netflix-gpt-react-app",
  },
  /* {
    title: 'Video Streaming App',
    img: video,
    link: VIDEO_STREAMING,
    desc: `YouTube clone with video listing, lazy loading, threaded comments, live chat (API polling), and search suggestions using caching & debouncing.`,
    source: 'https://github.com/reshma-sk/video-streaming-app'
  }, 
  {
    title: 'CodePen Clone',
    img: codepen,
    link: CODE_PEN,
    desc: `A CodePen-style online editor built in React for HTML, CSS, and JavaScript live previews.`,
    source: 'https://reshma-sk.github.io/codepen-reshma/'
  },*/
  {
    title: "Authentication",
    img:jwt,
    link: AUTH_APP,
    desc: `JWT Authentication System
    Implemented a secure and seamless user authentication system with React and Node.js. Enhanced UX by enabling smooth token-based login with automatic refresh using HttpOnly cookies.
    Improved performance via React lazy loading and optimized API endpoints for fast, scalable interactions.`,
    source: "https://youtu.be/QkizgbGvB1A",
  },
  {
    title: "Get Your Recipe",
    img: recipe,
    link: YOUR_RECIPE,
    desc: `Recipe search app with ingredient and nutrition info using HTML, CSS, JS, and a third-party API.`,
    source: "https://reshma-sk.github.io/Javascrip_get-recipe-App/",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-6 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full sm:w-[45%] md:w-[30%] border border-gray-300 dark:border-gray-700 rounded-xl shadow-md p-4 bg-white dark:bg-gray-800 flex flex-col justify-between"
        >
          <h2 className="font-bold text-xl mb-2">{project.title}</h2>
          <img src={project.img} alt={project.title} className="w-[80%] h-[150px] object-cover mx-auto rounded" />
          <div className="mt-3 h-[120px] overflow-y-auto text-sm">
            <p>{project.desc}</p>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FaGithub className="bg-amber-400 rounded p-1" size={32} color="#000" />
            </a>
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline bg-amber-200 px-2 py-1 rounded"
            >
              Source Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
