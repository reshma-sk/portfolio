import React from 'react'
import { Link } from 'react-router-dom'
import { CODE_PEN } from '../utils/constants';
import { FaGithub } from 'react-icons/fa';
import { FOOD_APP } from '../utils/constants';
import { VIDEO_STREAMING} from '../utils/constants';
import { MOVIE_STREAMING } from '../utils/constants';
import { YOUR_RECIPE } from '../utils/constants';
import { GROCERY_LIST } from '../utils/constants';
import recipe from '../assets/image/recipe.png'
import grocery from '../assets/image/grocery.png'
import codepen from '../assets/image/codepen.png'
import video from '../assets/image/video.png'
import food from '../assets/image/food.png'
import movie from '../assets/image/movie.png'

const Projects = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-around items-center h-screen object-cover text-center">
      <div className=" w-[40%] h-[300px] shadow-lg mt-3 border border-gray-600 ">
        <h2 className="font-bold">Food Order App</h2>
        <img src={food} alt="Food-App" className="w-[70%] h-[40%] mx-auto" />
        <article className="h-[150px] overflow-y-auto">
          <p>
            <Link to={FOOD_APP}>
              <FaGithub
                className="mt-2 ml-2 bg-amber-200 rounded-lg"
                size={30}
                color="#000"
              />
            </Link>
            Developed a config-driven web application using Swiggy's API to
            display restaurant listings and menus. Implemented with JavaScript,
            React, Tailwind, and Redux, utilizing functional components and
            hooks for dynamic, scalable UI. Optimized for performance using
            Parcel and Babel, ensuring efficient loading and rendering of
            restaurant data.{" "}
            <span className="bg-amber-200">
              Source link:reshma-sk/react-series-09
            </span>
          </p>
        </article>
      </div>

      <div className=" w-[40%] h-[300px] shadow-lg mt-3 border border-gray-600">
        <h2 className="font-bold">Movie Streaming App</h2>
        <img
          src={movie}
          alt="Movie-Streaming-App"
          className="w-[70%] h-[40%] mx-auto"
        />
        <article className="h-[150px] overflow-y-auto">
          <p>
            <Link to={MOVIE_STREAMING}>
              <FaGithub
                className="mt-2 ml-2 bg-amber-500 rounded-lg"
                size={30}
                color="#000"
              />
            </Link>
            Designed a responsive UI for a movie app using Open AI’s GPT API’s
            to provide features like dynamic search with debouncing, and
            genre-based filtering. Developed using React.js, Redux, and custom
            hooks, with state management optimized for performance. Integrated
            Parcel and Tailwind for a streamlined, modern user experience.
            <span className="bg-amber-200">
              Source link:reshma-sk/netflix-gpt-react-app{" "}
            </span>
          </p>
        </article>
      </div>

      <div className=" w-[40%] h-[300px] shadow-lg mt-3 border border-gray-600">
        <h2 className="font-bold">Video Streaming App</h2>
        <img
          src={video}
          alt="Video-streaming"
          className="w-[70%] h-[40%] mx-auto"
        />
        <article className="h-[150px] overflow-y-auto">
          <p>
            <Link to={VIDEO_STREAMING}>
              <FaGithub
                className="mt-2 ml-2 bg-amber-500 rounded-lg"
                size={30}
                color="#000"
              />
            </Link>
            Features YouTube Clone: The project is a replica of the YouTube
            platform, including its UI design and functionalities. YouTube Video
            List: The app displays a paginated list of YouTube videos fetched
            from the YouTube API. The list supports lazy loading to enhance
            performance. Implemented YouTube Video Preview, Search Suggestions,
            Optimized Search Using Caching and Debouncing, the app includes a
            comments section that allows users to view and post comments on a
            video. The comments are fetched from the YouTube API and are
            displayed in a threaded view to enhance readability. Live Chat of
            YouTube - Get Data Live, Update UI Continuously Developed with API
            Polling: The app includes a live chat feature that allows users to
            view and send messages in real-time. The chat is implemented using
            API polling, which means that the app regularly makes API calls to
            fetch new messages and updates the UI accordingly.
            <span className="bg-amber-200">
              Source ink: reshma-sk/video-streaming-app{" "}
            </span>
          </p>
        </article>
      </div>

      <div className=" w-[40%] h-[300px] shadow-lg mt-3 border border-gray-600">
        <h2 className="font-bold">CodePen</h2>
        <img src={codepen} alt="Codepen" className="w-[70%] h-[40%] mx-auto" />
        <article className="h-[150px] overflow-y-auto">
          <p>
            <Link to={CODE_PEN}>
              <FaGithub
                className="mt-2 ml-2 bg-amber-500"
                size={30}
                color="#000"
              />
            </Link>
            A CodePen clone built with React.js, providing an online code editor
            for HTML, CSS, and JavaScript.
            <span className="bg-amber-200">
              Sourse link:https://reshma-sk.github.io/codepen-reshma/
            </span>
          </p>
        </article>
      </div>

      <div className=" w-[40%] h-[300px] shadow-lg mt-3 border border-gray-600">
        <h2 className="font-bold">Get Your Recipe</h2>
        <img
          src={recipe}
          alt="Recipe-app"
          className="w-[70%] h-[40%] mx-auto"
        />
        <article className="h-[150px] overflow-y-auto">
          <p>
            <Link to={YOUR_RECIPE}>
              <FaGithub
                className="mt-2 ml-2 bg-amber-500"
                size={30}
                color="#000"
              />
            </Link>
            This Recipe App using HTML,CSS and JAVASCRIPT, allows users to
            search for recipes and view detailed information about each recipe,
            including ingredients, cooking instructions, and nutrition facts.
            The app fetches recipe data from a third-party API.
            <span className='bg-amber-200'>Source link:https://reshma-sk.github.io/Javascrip_get-recipe-App/#</span>
          </p>
        </article>
      </div>

      <div className=" w-[40%] h-[300px] shadow-lg mt-3 border border-gray-600">
        <h2 className="font-bold">Grocery Bud</h2>
        <img
          src={grocery}
          alt="Grocery-app"
          className="w-[70%] h-[40%] mx-auto"
        />
        <article className="h-[150px] overflow-y-auto">
          <p>
            <Link to={GROCERY_LIST}>
              <FaGithub
                className="mt-2 ml-2 bg-amber-500"
                size={30}
                color="#000"
              />
            </Link>
            Streamline Your Shopping: The Ultimate Grocery List App Powered by
            HTML, CSS, and JavaScript.
            <span className="bg-amber-200">
              Source ink:https://reshma-sk.github.io/grocery-list_javacript/
            </span>
          </p>
        </article>
      </div>
    </div>
  );
}

export default Projects