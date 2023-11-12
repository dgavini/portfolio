import React from 'react';
import './About.css';
import AboutImage from '../../images/AboutPageImage.jpeg';



const About = () =>{
    return(

      <section id="About">
        <div className='AboutHeader'>
          <br/>
          <span className='AboutHeader_span'>About Me</span>
        </div>
        <div className='AboutBody'>
          <img src={AboutImage} className='AboutImage' alt='' />
          <div className='AboutContentMain'>
            <spam className='AboutContent'>I am a Software Developer</spam><br/>
            <br/>
            <br/>
            <p>With 3 years of experience in the IT industry, I bring a strong background in software and web development. My technical expertise covers backend technologies like Node.js, TypeScript, Java, and Python, as well as frontend technologies including React, Bootstrap, and jQuery. I'm proficient in designing and developing robust, scalable solutions and have a solid understanding of database systems.</p>
            <br/>
            <br/>
            <p>My professional journey includes roles at Tata Consultancy Services and BlackBerry. At Tata Consultancy Services, I excelled as a backend developer, contributing to a versatile chatbot project hosted on Azure. During my Software Developer Internship at BlackBerry, I specialized in SharePoint development, enhancing user experiences and implementing OAuth authentication.</p>
            <br/>
            <br/>
            <p>In my roles, I've consistently demonstrated the ability to deliver high-quality solutions, collaborate effectively with cross-functional teams, and adapt to dynamic project requirements. My commitment to staying updated with the latest industry trends and technologies allows me to bring innovative and efficient solutions to any project. I'm enthusiastic, dedicated, and ready to make meaningful contributions to diverse software and web development projects.</p>
          </div>
        </div> 
      </section>

    )
}
export default About;