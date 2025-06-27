import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center px-6 py-10 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-4xl font-bold text-center ">
          About Me
        </h1>

        <p className="text-lg leading-relaxed">
          With <strong>3 years of experience</strong> in front-end development
          and web technologies, I specialize in crafting
          <strong>responsive websites</strong> and{" "}
          <strong>interactive user interfaces</strong>. I have a solid
          background in the
          <strong>IT industry 🏢</strong>, with a proven ability to design and
          build modern web applications 💻.
        </p>

        <p className="text-lg leading-relaxed">
          I work confidently with front-end tools and frameworks including{" "}
          <strong>React.js</strong>, <strong>Redux</strong>,
          <strong>JavaScript (ES6+)</strong>, <strong>HTML</strong>,{" "}
          <strong>CSS</strong>, <strong>Tailwind</strong>,{" "}
          <strong>Flexbox</strong>, and version control systems like{" "}
          <strong>GitHub</strong>. I’m also familiar with{" "}
          <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
          <strong>MongoDB</strong>, enabling me to build full-stack applications
          when needed.
        </p>

        <p className="text-lg leading-relaxed">
          Outside of work, I’m a passionate <strong>tech enthusiast 📝</strong>{" "}
          who’s always eager to learn new tools and frameworks. I’ve developed
          and deployed a few amazing projects — ranging from small demos to
          larger applications — using
          <strong>React.js</strong> and other technologies.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
            🛠️ Tech Stack
          </h2>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>
              <strong>Frontend:</strong> React.js, Redux, JavaScript (ES6+),
              TypeScript, HTML, CSS, Tailwind CSS, Flexbox
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, MongoDB (basic
              knowledge)
            </li>
            <li>
              <strong>Tooling:</strong> Git, GitHub, Webpack, Babel, NPM, Yarn
            </li>
            <li>
              <strong>Testing:</strong> Jest
            </li>
            <li>
              <strong>Other:</strong> Responsive Design, REST APIs, Agile
              Workflow
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
            💼 What I Do
          </h2>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>Develop and maintain scalable frontend architecture</li>
            <li>Build reusable, efficient components using React</li>
            <li>Translate UI/UX designs into interactive user interfaces</li>
            <li>Optimize performance and ensure responsiveness</li>
            <li>Collaborate using Git and follow agile methodologies</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed">
          Let’s connect and dive into the world of technology together. I love
          collaborating and bringing great ideas to life! 🙋🏻‍♂️
        </p>
      </div>
    </div>
  );
};

export default About;
