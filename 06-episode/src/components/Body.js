import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {GITHUB} from '../utils/constants'
import { FaMobile } from 'react-icons/fa';
import { EMAIL } from '../utils/constants';
import profile from '../assets/image/profile.jpg'
import {MOBILE} from '../utils/constants'
import { LINKEDIN_URL } from '../utils/constants';
import { FaMailBulk } from 'react-icons/fa';

const Body = () => {
  return (
    <>
      <div className="flex justify-around mt-[10rem] w-full mx-auto leading-10">
        <div>
          <h2 className="font-bold text-lg">Hello, I am</h2>
          <h1 className="font-bold text-xl">Reshma Shaik</h1>
          <h3>
            <span className="font-bold text-xl">Frontend Developer</span>
          </h3>
          <p className="text-lg">
            Passionate about building accessible web apps that user loves!
          </p>
        </div>
        <img
          src={profile}
          className="w-[20rem] border shadow-lg"
          alt="my-pic"
        />
      </div>
      <div className="flex gap-3 w-[6rem] ml-[11rem] absolute -mt-10">
        <Link to={GITHUB}>
          <FaGithub size={30} color="#000" />
        </Link>
        <Link to={LINKEDIN_URL}>
          <FaLinkedin size={30} color="#000" />
        </Link>
      </div>
    </>
  );
}

export default Body
