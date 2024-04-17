import React from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom';
import typescripts from '../images/Typescript.png';
import javascript from '../images/javascript.jpg';
import reduximage from '../images/redux.png'
import reactrouter from '../images/react_Router.png'
import reactimage from '../images/react.png'
import gitimage from '../images/git.jpg'
import e2eimage from '../images/e2e.jpg'
import cicd from '../images/e2e.jpg'
import jenkins from '../images/jenkins.png'
import html5 from '../images/HTML5.jpg'
import css3 from '../images/css3.jpg'
import flexboximage from '../images/flexbox.png'
import bootstrapimage from '../images/bootstrap.jpg'
import nextjs from '../images/nextjs.png'
import agile from '../images/agile.png'
import adobe from '../images/Adode.png'
import abn from '../images/abn_amro.png'
import hughes from '../images/Hughes.png'
import LinkedIn from '../images/linkedin.png'
import gmail from '../images/gmail.png'
import github from '../images/github.png'

export const Home = () => {
  
  return (
    <div className="containerHome">
      <nav>
        <ul>
          <li>
          <a href='#skills' >Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#Education">Education</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <hr/>
      <section>
        <header className="header">
          <h1 className="bigFont"> <span>The porfolio of </span><span>Puja Kumari,</span><span>Front-end Developer</span> 
           </h1>  
        </header>
      </section>
      <hr/>
      <section className="skills" id="skills">
        <div>
          <h1 className="heading-2"><ul><li>Skills</li></ul></h1>
          
          <img src={typescripts} alt="Typescript" />
          <img src={javascript} alt="javascript" />
          <img src={reactimage} alt="react" />
          <img src={reactrouter} alt="react-router" />
          <img src={reduximage} alt="redux image" />
          <img src={nextjs} alt="next.js" />
          <img src={agile} alt="AGILE" />
          <img src={html5} alt="HTML5" />
          <img src={css3} alt="CSS3" />
          <img src={flexboximage} alt="FLEXBOX" />
          <img src={bootstrapimage} alt="bootstrap" />
          <img src={e2eimage} alt="End to End Testing" />
          <img src={gitimage} alt="GIT" />
          <img src={cicd} alt="CI/CD" />
          <img src={jenkins} alt="Jenkins" />
        </div>
      </section>
      <hr/>
      <section id="projects">
      <h1 className="heading-2"><ul><li>Projects</li></ul></h1>
      <div className='projects'>
       <div id="Hughes">           
              <img src={adobe} alt="Adobe Systems" />                          
            </div>
        <div>
            <h1>Adobe Systems (Hughes Systique Corporation)</h1>
            <span>April 2021- March 2024</span>
            <ul>
              <li>                
                Created interactive and user-friendly web interfaces using HTML,
                CSS, JavaScript, React, Next.js and
                Typescript. Strong understanding of state management using Redux
                and react hooks.
              </li>
              <li>
                Ensured web applications met accessibility standards. Automated
                accessibility verification using Axe Devtools.
              </li>
              <li>
                Developed reusable UI components and libraries to streamline
                development processes.
              </li>
              <li> Used styling solutions with CSS, SCSS and Flexbox.</li>
              <li> Worked on development build tools Node, NPM and maven. </li>
              <li> Experience of working on LINUX machines.</li>
              <li>
                Conducted code reviews and provided constructive feedback to
                team members.
              </li>
              <li>
                Looked after the health of the application using UI Test
                framework based on WDIO4 and WDIO7, Mocha, Chai using Jenkins
                CI/CD pipelines. Lead the task of migration from WDIO4 to WDIO7.
              </li>
              <li>
                Actively participated in agile development methodologies,
                including daily standups and sprint planning. Acted as scrum
                master for a team of other developers and testers.
              </li>
              <li>
                Experience in mentoring and actively supporting team members.
              </li>
            </ul>

        </div>            
        
        <div id="Hughes">
          <img src={hughes} alt="Hughes Network System" />
          </div>          
          <div>
          <h1>Hughes Unified Broadband</h1>
          <span>July 2019-March 2021</span>
          <ul>
            <li>
              Introduced use of React along-side Perl in the backend to add new
              feature of versioning.
            </li>
            <li>Experienced in working on the consumption of REST APIs.</li>
            <li>
              Created high level design for the requirement in various
              development cycle.
            </li>
            <li>
              Participated in code reviews and provided constructive feedback to
              team members.
            </li>
            <li>
              Experienced in working on network applications creating software
              to plug and play hardware devices within a network.
            </li>
          </ul>
        </div>
        <div id="Hughes">
          <img src={abn} alt="ABN AMRO" />
          </div>
          <div>
          <h1>ABN AMRO (TATA CONSULTANCY SERVICES)</h1>
          <span >November 2016-June 2021</span>
          <ul>
            <li>
            Collaborated with the development team to build and maintain responsive web applications using JavaScript, jQuery, HTML, CSS, and Bootstrap
            </li>
            <li>Transformed the already existing application’s UI to modern standards using CSS and Bootstrap. Solely owned the task and delivered the product within
desired timeline.</li>
            <li>
            Created new widgets such as favourite, app-drawer, graphs, charts etc.
Experience in using various open source plugins.
            </li>
            <li>
            Implemented front-end designs and ensured cross-browser compatibility 
and performance optimization. Worked closely with UX designers and back-end 
developers to deliver high-quality products.
            </li>
            <li>Resolved front-end issues and bugs in a timely manner. Implemented 
responsive designs.
            </li>
            <li>Develop the code in a way that clients have a freedom to choose the widgets 
and theme while single git line maintenance.Experience in working on in-house product for multiple clients. Experienced in 
working on ABN AMRO banking application.</li>
          </ul>
        </div>
</div>
      </section>
      <hr/>
      <section className="education" id="education">
      <h1 className="heading-2"><ul><li>Education</li></ul></h1>
        <span>Bachelors of Technology </span> | <span>Computer Sceience and Engineering</span> | <span>Netaji Subhash Engineering College, Kolkata, India</span>
      </section>
      <hr/>
      <section className="contacts" id="contacts">        
          <Link to='https://github.com/Puja11' target='_blank'><img src={github} alt="github" /></Link>
          <img src={gmail} alt="gmail" onClick={() => {navigator.clipboard.writeText("puja11kumari@gmail.com")}}/>
          <Link to='https://www.linkedin.com/in/puja-kumari-0958a8b0' target='_blank'><img src={LinkedIn} alt="LinkedIN" /></Link>
      </section>
    </div>
  );
}
