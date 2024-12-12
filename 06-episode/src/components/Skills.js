import React from "react";

const Skills = () => {
  return (
    <div className=" flex gap-2  justify-around  items-center flex-wrap h-screen object-cover">

      <div className="text-center shadow-xl px-5 py-5 border w-[200px] h-[200px] ">
        <h1 className="font-bold text-2xl">Languages</h1>
        <ul className="mt-3 font-xl leading-normal">
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
        </ul>
      </div>

      <div className="text-center shadow-xl px-5 py-5 border w-[200px] h-[200px] ">
        <h1 className="font-bold text-2xl">Framework</h1>
        <ul className="mt-3 font-xl leading-normal">
          <li>REACT</li>
          <li>TAILWIND CSS</li>
        </ul>
      </div>

      <div className="text-center shadow-xl px-5 py-5 border w-[200px] h-[200px] ">
        <h1 className="font-bold text-2xl">Libraeies</h1>
        <ul className="mt-3 font-xl leading-normal">
          <li>REDUX</li>
          <li>REACT-ROUTER</li>
          <li>CONTEXT-API</li>
          <li>PARCEL</li>
          <li>BABEL</li>
        </ul>
      </div>

      <div className="text-centershadow-xl px-5 py-5 border w-[200px] h-[200px] ">
        <h1 className="font-bold text-2xl">Testing</h1>
        <ul className="mt-3 font-xl">
          <li>Unit-Testing -- Jest</li>
        </ul>
      </div>

      <div className="text-center shadow-xl px-5 py-5 border w-[200px] h-[200px] ">
        <h1 className="font-bold text-2xl">Tools</h1>
        <ul className="mt-3 font-xl leading-normal">
          <li>Chrome Tools</li>
          <li>VS code</li>
          <li>Git</li>
          <li>Agile</li>
          <li>Devops</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
