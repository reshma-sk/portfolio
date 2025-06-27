import React from "react";

const Skills = () => {
  return (
    <div className="flex gap-6 justify-center items-center flex-wrap min-h-screen px-4 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      
      {/* JavaScript & Frameworks */}
      <div className="text-center shadow-lg px-6 py-5 border rounded-xl w-72 bg-white dark:bg-gray-800">
        <h1 className="font-bold text-2xl mb-2">JavaScript & React</h1>
        <ul className="text-base leading-relaxed">
          <li>Proficient in JavaScript and its object model</li>
          <li>In-depth knowledge of React.js principles</li>
          <li>Experienced with Redux workflows & custom hooks</li>
          <li>Familiar with ECMAScript specs</li>
        </ul>
      </div>

      {/* APIs & Rendering */}
      <div className="text-center shadow-lg px-6 py-5 border rounded-xl w-72 bg-white dark:bg-gray-800">
        <h1 className="font-bold text-2xl mb-2">APIs & Rendering</h1>
        <ul className="text-base leading-relaxed">
          <li>Knowledge of RESTful APIs</li>
          <li>Experience with server-side rendering</li>
        </ul>
      </div>

      {/* Tooling */}
      <div className="text-center shadow-lg px-6 py-5 border rounded-xl w-72 bg-white dark:bg-gray-800">
        <h1 className="font-bold text-2xl mb-2">Dev Tools</h1>
        <ul className="text-base leading-relaxed">
          <li>Familiar with Babel, Webpack, NPM, and Yarn</li>
          <li>Proficient in Git & version control workflows</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="text-center shadow-lg px-6 py-5 border rounded-xl w-72 bg-white dark:bg-gray-800">
        <h1 className="font-bold text-2xl mb-2">Problem Solving</h1>
        <ul className="text-base leading-relaxed">
          <li>Translating business needs into technical solutions</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Skills;
