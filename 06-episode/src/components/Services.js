import React from 'react'

const Services = () => {
  return (
    <div className="flex flex-wrap gap-1 justify-around items-center h-screen object-cover mt-2 text-center">
      <div className="shadow-xl text-center px-3 py-2 leading-[1rem] h-[300px] w-[30%] border border-gray-500">
        <h2 className="font-bold text-2xl">Web Development</h2>

        <h3 className="mt-2 text-lg font-semibold">Responsive Design:</h3>
        <p>
          Creating websites that work well on various devices and screen sizes.
        </p>

        <h3 className="mt-2 text-lg font-semibold">HTML/CSS/JavaScript:</h3>
        <p>Proficiency in the core technologies for frontend development.</p>

        <h3 className="mt-2 text-lg font-semibold">
          Frameworks and Libraries:
        </h3>
        <p>Experience with popular tools like React,Redux</p>

        <h3 className="mt-2 text-lg font-semibold">
          Cross-Browser Compatibility:
        </h3>
        <p>Ensuring that websites function correctly on different browsers.</p>
      </div>

      <div className="shadow-2xl text-center px-3 py-3 leading-[1rem] h-[300px] w-[30%] border border-gray-500">
        <h2 className="font-bold text-2xl">UI Design</h2>

        <h3 className="mt-2 text-lg font-semibold">User Interface Design:</h3>
        <p>Designing intuitive and visually appealing interfaces.</p>

        <h3 className="mt-2 text-lg font-semibold">HTML/CSS/JavaScript:</h3>
        <p>Proficiency in the core technologies for frontend development.</p>

        <h3 className="mt-2 text-lg font-semibold">Interactive Elements:</h3>
        <p>
          Crafting engaging and intuitive interactive elements such as buttons,
          forms, and menus to enhance user interaction.
        </p>
      </div>

      <div className="shadow-2xl text-center px-3 py-3 leading-[1rem] h-[300px] w-[30%] border border-gray-500">
        <h2 className="font-bold text-2xl">Performance Optimi</h2>
        <h3 className="mt-2 text-lg font-semibold">Speed Optimization:</h3>
        <p>Techniques for improving website loading times.</p>
        <h3 className="mt-2 text-lg font-semibold">Code Optimization:</h3>
        <p>Writing efficient and maintainable code.</p>
      </div>

      <div className="shadow-2xl text-center px-3 py-3 leading-[1rem] h-[300px] w-[30%] border border-gray-500">
        <h2 className="font-bold text-2xl">API Integration</h2>
        <h3 className="mt-2 text-lg font-semibold">Third-Party API Integration:</h3>
        <p>Connecting websites with external services.</p>
      </div>

      <div className="shadow-2xl text-center px-3 py-3 leading-[2rem] h-[300px] w-[30%] border border-gray-500">
        <h2 className="font-bold text-2xl">Version Control and Collaboration</h2>
        <h3 className="mt-2 text-lg font-semibold">Git:</h3>
        <p>Using version control systems to manage codebase.</p>
        <h3 className="mt-2 text-lg font-semibold">Collaboration Tools:</h3>
        <p>Proficiency in tools like GitHub, Vscode, Devops</p>
      </div>
    </div>
  );
}

export default Services