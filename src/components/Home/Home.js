import React from 'react';
import './Home.css';
import IntroPicture from '../../images/HomePage.jpeg';
import LinkedIcon from '../../images/LinkedIn-icon.png';
import GithubIcon from '../../images/Github-icon.svg';
import InstagramIcon from '../../images/instagram.svg';
import Resume from '../../Documents/DheerajResume.pdf'



const Home = () =>{
    return(
      <section id='Introduction'>
        <div className='IntroductionContent'>
             <span className='Hello'>Hello,</span>
             <span > I am <span className='Name'>Dheeraj Gavini</span> <span>,</span><br/> a Software Developer</span>
             <br/>
             <br/>
             <div className='SocialMedia'>
                <a href="https://www.linkedin.com/in/gavinidheeraj/"><img src={LinkedIcon} alt="LinkedIn"  className="PictureLink"/></a>
                <a href="https://github.com/dgavini"><img src={GithubIcon} alt="Github"  className="PictureLink"/></a>
                <a href="https://www.instagram.com/dheerajgavini/"><img src={InstagramIcon} alt="Instagram"  className="PictureLink"/></a>
                <a href={Resume}><button className='ResumeButton'>Resume</button></a>
             </div>
        </div>
        <img src={IntroPicture} alt="Profile" className='IntrductionPicture' />

      </section>

    )
}
export default Home;