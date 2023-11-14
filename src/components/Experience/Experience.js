import React from 'react';
import './Experience.css';
import { useState } from 'react';


const Experience = () =>{

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return(

      <section id="Experience">
        <div className='ExperienceHeader'>
          <br/>
          <span className='ExperienceHeader_span'>Experience</span>
        </div>
        <div className="tab-buttons">
            <button
            className={activeTab === 'tab1' ? 'active' : ''}
            onClick={() => handleTabClick('tab1')}
            >
            Software Developer Intern
            </button>
            <button
            className={activeTab === 'tab2' ? 'active' : ''}
            onClick={() => handleTabClick('tab2')}
            >
            Software Developer
            </button>
        </div>
        <div className="tab-content">
            {activeTab === 'tab1' && (
            <div className='Individual_Exp'>
              <spam className='ExperienceContent'>Software Developer Intern</spam><br/>
              <p>During my tenure at BlackBerry in Waterloo, Ontario, Canada, I had the privilege to work with a diverse set of technologies that included TypeScript, PHP, React.js, jQuery, ASP.NET, GraphQL, OAuth, Jest, SharePoint, GitHub, Anypoint Studio, Anypoint Platform, DataWeave, MariaDB, Gerrit, Jira, and Confluence. My primary role revolved around the development and customization of SharePoint web parts, features, and solutions. This encompassed the creation of apps, master pages, and custom page layouts, all of which were meticulously designed to enhance the user experience and meet specific project requirements. It was a dynamic and challenging environment, and I was dedicated to ensuring that our solutions were not just functional but also user-friendly and visually appealing.</p>
              <p>Furthermore, I played a pivotal role in enhancing SharePoint forms and applications by incorporating technologies like JavaScript, TypeScript, jQuery, and ASP.NET. Implementing OAuth authentication was a significant part of my responsibilities, and it was paramount to ensure secure and user-friendly login experiences, including seamless integration with identity providers such as Okta. I also dedicated time to identifying and resolving multiple bugs within SharePoint web parts, ensuring that our solutions functioned seamlessly and provided users with an excellent experience. The use of CI/CD tools like Jenkins, Maven, and GitHub was instrumental in our development and deployment processes, allowing for efficient workflows and high-quality results.</p>
              <p>In addition to these responsibilities, I had the opportunity to work on crafting display templates for optimized search results presentation, ultimately providing users with a more intuitive and effective search experience. My proficiency in writing unit tests using Cypress was crucial in maintaining the code's quality, functionality, and reliability, ensuring the robustness of web applications through comprehensive test coverage and validation. I also had the privilege of designing and implementing content types and workflows within SharePoint, which streamlined document management and business processes, leading to increased efficiency. As part of my multifaceted role, I developed REST APIs using the Mulesoft Anypoint API Platform, and I collaborated extensively with cross-functional teams to gather requirements, analyze integration needs, and design scalable solutions. I also took on the task of designing and developing Mule APIs, facilitating efficient data flow between different applications and systems, including One Trust, NetSuite, Salesforce, JIRA SD, AWS S3 Bucket, and MariaDB.</p>
            </div>
            )}
            {activeTab === 'tab2' && (
            <div className='Individual_Exp'>
              <spam className='ExperienceContent'>Software Developer</spam><br/>
              <p>At Tata Consultancy Services, based in Hyderabad, Telangana, India, I played a pivotal role as a backend developer in a dynamic team of four. The core of our work was a transaction chatbot project designed to optimize efficiency and enhance user interactions. This chatbot was hosted on Azure cloud and accessible across various platforms, including SharePoint, Microsoft Teams, and Team Center. Leveraging advanced technologies such as LUIS (Language Understanding Intelligent Service) and Natural Language Processing (NLP) techniques, I was responsible for developing a versatile chatbot that not only understood user intent but also responded effectively.</p>
              <p>As part of this project, I used React and Python to create visually appealing dashboards that showcased the chatbot's enhanced performance to our clients. I also designed and built REST APIs using Node.js and Express.js, integrating the chatbot with ServiceNow and MuleSoft systems. This seamless integration allowed for the efficient flow of data and the execution of various functionalities. The chatbot was further connected to a MySQL database to store information consumed by the REST API, and I created cron jobs using Node.js to process database entries related to expired service tickets. Additionally, I employed SOAP web services to develop backend services triggered by the chatbot to perform various functions within the Teamcenter Application.</p>
              <p>My role extended to handling SQL queries, Views, Triggers, and Stored Procedures in Relational Database Management Systems like MySQL, ensuring the smooth operation of the system. I successfully integrated the chatbot with ServiceNow APIs using the MuleSoft interface, contributing to the development and growth of a SAAS product. Collaboration with a dynamic team allowed us to deliver key features, enhance the user experience, and optimize system performance, ultimately leading to increased customer satisfaction and retention. This project demanded meticulous management of tickets in Jira and the documentation of procedures using Confluence, all while striving to improve quality and processes. I actively engaged with clients to gather requirements for various new use cases, following an Agile methodology for developing a transaction bot. Moreover, I was involved in setting up and managing CI/CD pipelines, utilizing GitHub, Jenkins, and Microsoft Azure to streamline the development and deployment process. I maintained a strong commitment to quality, conducting unit testing and quality testing to ensure that our finished products consistently met production standards.</p>
            </div>
            )}
        </div>
        <div className='FooterMain'>
          <br/>
          <span className='Footer'>All Rights Reserved. © 2023 by Dheeraj Gavini.</span>
        </div>
      </section>

    )
}
export default Experience;