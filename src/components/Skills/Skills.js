import React from 'react';
import './Skills.css';
import FrontEnd from '../../images/FrontEnd.png';
import BackEnd from '../../images/BackEnd.png';
import DataBase from '../../images/DataBase.png';
import OtherTech from '../../images/OtherTech.png'


const Skills = () =>{
    return(

      <section id="Skills">
        <div className='SkillsHeader'>
          <br/>
          <span className='SkillsHeader_span'>Skills</span>
        </div>
        <br/>
        <section className='Skills_Body'>
            <div className='Skills_div'>
                <img src={FrontEnd} className='Skills_Img' alt=''/>
                <section className='Skills_Content'>
                        <div className='Indiv_Skills'>HTML</div>
                        <div className='Indiv_Skills'>CSS</div>
                        <div className='Indiv_Skills'>React.js</div>
                        <div className='Indiv_Skills'>jQuery</div>
                        <div className='Indiv_Skills'>BootStrap</div>
                        <div className='Indiv_Skills'>Angular</div>
                </section>   
            </div>
            <br/><br/>
            <div className='Skills_div'>
                <img src={BackEnd} className='Skills_Img' alt=''/>
                <section className='Skills_Content'>
                        <div className='Indiv_Skills'>JavaScript</div>
                        <div className='Indiv_Skills'>Node.js</div>
                        <div className='Indiv_Skills'>Express.js</div>
                        <div className='Indiv_Skills'>TypeScript</div>
                        <div className='Indiv_Skills'>Java</div>
                        <div className='Indiv_Skills'>Python</div>
                        <div className='Indiv_Skills'>C#</div>
                        <div className='Indiv_Skills'>.Net</div>
                </section>   
            </div>
            <br/><br/>
            <div className='Skills_div'>
                <img src={DataBase} className='Skills_Img' alt=''/>
                <section className='Skills_Content'>
                        <div className='Indiv_Skills'>MySQL</div>
                        <div className='Indiv_Skills'>SQL Server</div>
                        <div className='Indiv_Skills'>Oracle</div>
                        <div className='Indiv_Skills'>PostgreSQL</div>
                        <div className='Indiv_Skills'>MariaDB</div>
                        <div className='Indiv_Skills'>MongoDB</div>
                        <div className='Indiv_Skills'>SQLite</div>
                </section>   
            </div>
            <br/><br/>
            <div className='Skills_div'>
                <img src={OtherTech} className='Skills_Img' alt=''/>
                <section className='Skills_Content'>
                        <div className='Indiv_Skills'>Azure</div>
                        <div className='Indiv_Skills'>OAuth 2.0</div>
                        <div className='Indiv_Skills'>Jenkins</div>
                        <div className='Indiv_Skills'>Docker</div>
                        <div className='Indiv_Skills'>AnyPoint Studio</div>
                        <div className='Indiv_Skills'>AnyPoint Platform</div>
                        <div className='Indiv_Skills'>Data Weave</div>
                        <div className='Indiv_Skills'>Github</div>
                        <div className='Indiv_Skills'>Jira</div>
                        <div className='Indiv_Skills'>Confluence</div>
                </section>   
            </div>
        </section>    
      </section>

    )
}
export default Skills;