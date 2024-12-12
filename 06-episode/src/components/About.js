import React from 'react'

const About = () => {
  return (
    <div className="w-[800px] mx-auto mt-8 text-lg leading-10">
      <p>
        Frontend Developer I'm a passionate Frontend Developer with a solid
        background in creating user-friendly, responsive, and performant web
        applications. With hands-on experience in React, Redux, Tailwind CSS,
        and JavaScript, I’ve developed several dynamic projects, including food
        ordering apps and movie platforms, utilizing APIs for real-time features
        and enhanced UI/UX. My expertise also includes optimizing app
        performance through lazy loading, code reusability, and state
        management. I have a strong understanding of front-end technologies,
        agile methodologies, and team collaboration, ensuring high-quality code
        and seamless user experiences.
        <div className='text-center mt-3'>
          <h1 className="font-bold">Technical Skills:</h1>
          HTML5, CSS3, JavaScript, React, Redux, Tailwind CSS, Parcel, Babel,
          Jest, Git, VSCode.
        </div>
        <div className='text-center mt-3'>
          <h1 className='font-bold'>Certifications:</h1>
          <p>Frontend Development Certification – Brainnest</p> 
          <p>Information Technology Specialist Certifications – Cenit College </p>
          <p>React Certification –NamasteDev.com</p>
        </div>
      </p>
    </div>
  );
}

export default About