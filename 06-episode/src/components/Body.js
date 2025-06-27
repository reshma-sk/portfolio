import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk, FaMobile } from 'react-icons/fa';
import profile from '../assets/image/profile.jpg';
import { GITHUB, LINKEDIN_URL, EMAIL, MOBILE } from '../utils/constants';

const Body = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full px-6 mt-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Main Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {/* Text Content */}
        <div className="text-center md:text-left leading-10 mt-2">
          <h2 className="font-semibold text-lg">Hello, I am</h2>
          <h1 className="text-3xl font-bold">Reshma Shaik</h1>
          <h3 className="text-xl font-bold mt-2 f">Frontend Developer</h3>
          <p className=" font-semibold  max-w-md mt-2">
            Passionate about building accessible web apps that users love!
          </p>
        </div>

        {/* Profile Image */}
        <img
          src={profile}
          className="w-80 rounded-lg border shadow-lg mt-6"
          alt="Portrait of Reshma Shaik"
        />
      </section>

      {/* Social Links */}
      <div className="flex gap-4 mt-6">
        <a href={GITHUB} target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
       {/*  <a href={`mailto:${EMAIL}`}>
          <FaMailBulk size={30} />
        </a>
        <a href={`tel:${MOBILE}`}>
          <FaMobile size={30} /> 
        </a>*/}
      </div>
    </main>
  );
};

export default Body;
