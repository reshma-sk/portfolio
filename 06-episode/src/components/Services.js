import React from 'react';

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-6 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      
      {/* Web Development */}
      <div className="shadow-lg px-5 py-6 border border-gray-300 dark:border-gray-600 rounded-xl w-full sm:w-[45%] md:w-[30%] bg-white dark:bg-gray-800">
        <h2 className="font-bold text-2xl mb-2">Web Development</h2>
        <h3 className="text-lg font-semibold mt-3">Responsive Design</h3>
        <p>Creating websites that work well on all screen sizes.</p>

        <h3 className="text-lg font-semibold mt-3">HTML/CSS/JavaScript</h3>
        <p>Core frontend technologies.</p>

        <h3 className="text-lg font-semibold mt-3">Frameworks & Libraries</h3>
        <p>Experience with React, Redux.</p>

        <h3 className="text-lg font-semibold mt-3">Cross-Browser Compatibility</h3>
        <p>Ensure consistency across browsers.</p>
      </div>

      {/* UI Design */}
      <div className="shadow-lg px-5 py-6 border border-gray-300 dark:border-gray-600 rounded-xl w-full sm:w-[45%] md:w-[30%] bg-white dark:bg-gray-800">
        <h2 className="font-bold text-2xl mb-2">UI Design</h2>

        <h3 className="text-lg font-semibold mt-3">User Interface Design</h3>
        <p>Designing clean, usable layouts.</p>

        <h3 className="text-lg font-semibold mt-3">HTML/CSS/JavaScript</h3>
        <p>Building interactive UIs.</p>

        <h3 className="text-lg font-semibold mt-3">Interactive Elements</h3>
        <p>Crafting engaging components like buttons, forms, and menus.</p>
      </div>

      {/* Performance Optimization */}
      <div className="shadow-lg px-5 py-6 border border-gray-300 dark:border-gray-600 rounded-xl w-full sm:w-[45%] md:w-[30%] bg-white dark:bg-gray-800">
        <h2 className="font-bold text-2xl mb-2">Performance Optimization</h2>

        <h3 className="text-lg font-semibold mt-3">Speed Optimization</h3>
        <p>Improving loading times with best practices.</p>

        <h3 className="text-lg font-semibold mt-3">Code Optimization</h3>
        <p>Writing clean, efficient, reusable code.</p>
      </div>

      {/* API Integration */}
      <div className="shadow-lg px-5 py-6 border border-gray-300 dark:border-gray-600 rounded-xl w-full sm:w-[45%] md:w-[30%] bg-white ">
        <h2 className="font-bold text-2xl mb-2">API Integration</h2>

        <h3 className="text-lg font-semibold mt-3">Third-Party APIs</h3>
        <p>Connecting apps to external services & data sources.</p>
      </div>

      {/* Version Control */}
      <div className="shadow-lg px-5 py-6 border border-gray-300 dark:border-gray-600 rounded-xl w-full sm:w-[45%] md:w-[30%] bg-white dark:bg-gray-800">
        <h2 className="font-bold text-2xl mb-2">Version Control & Collaboration</h2>

        <h3 className="text-lg font-semibold mt-3">Git</h3>
        <p>Version control and history management.</p>

        <h3 className="text-lg font-semibold mt-3">Collaboration Tools</h3>
        <p>Experienced with GitHub, VS Code, DevOps tools.</p>
      </div>
    </div>
  );
};

export default Services;
