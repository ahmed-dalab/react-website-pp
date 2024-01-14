import { useState } from 'react';
import './App.css';

function App() {
  const [skills, setSkills] = useState([
    {img:'./html.png',title:'HTML',id:1},
    {img:'./css-icon.jpeg',title:'CSS',id:2},
    {img:'./js.png',title:'JavaScript',id:3},
    {img:'./react-icon.png',title:'Reactjs',id:4},
    {img:'./tailwind-css.jpeg',title:'TailwindCss',id:5}
  ])
  const [services,setServices] = useState([
    {title:'Website Development',desc:'Design and development of responsive and user-friendly websites. Custom website development tailored to specific business requirements.',id:1},
    {title:'Front-End Development',desc:'Building interactive and engaging user interfaces. Implementing responsive design for seamless experiences across devices.',id:2},
    {title:'Back-End Development',desc:'Creating server-side logic and databases. Developing robust and scalable back-end systems.',id:3},
    {title:'Full-Stack Development',desc:'Combining front-end and back-end development for end-to-end solutions. Handling both client-side and server-side development.',id:4},
    {title:'E-Commerce Development',desc:'Building online stores with secure payment gateways. Implementing product catalogs, shopping carts, and order processing..',id:5},
    {title:'Web Application Development',desc:'Creating dynamic web applications using technologies like React.Implementing real-time features and interactions.',id:6},
  ])
  return (
    <div>
      <div className='nav-bar'>
        <h2 className='logo'>Ahmed Dalab</h2>
       <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#acheivements">Acheivements</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <svg className='menu' 
        xmlns="http://www.w3.org/2000/svg" x="0px"
         y="0px" width="100" height="100"
          viewBox="0 0 30 30">
<path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L
 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 
 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A
  1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21
   A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001
    1.0001 0 1 0 27 21 L 3 21 z"></path>
</svg>
      </ul>
     </nav>
      </div>
    

     <div className='hero-section'>
          <div className='left'>
            <h2>I'm <span>Ahmed Dalab</span></h2>
            <h4>Web Developer</h4>
            <p>Innovative coder with a passion for problem-solving,
               transforming concepts into elegant solutions that elevate user
               interactions and redefine digital landscapes.</p>
          </div>
          <div className='right'>
            <img src="./heroImg.png" alt="hero section" />
          </div>
     </div>

     <div id='skills'>
      <h2 className='skill-header'>Skills</h2>
      <div className='skills'>
        {skills.map(skill => (
          <ul className='list' key={skill.id}>
            <img src={skill.img} alt={`img ${skill.id}`} />
            <h2>{skill.title}</h2>
          </ul>
        ))}
      </div>
      
     </div>
     <div id='services' className='services'>
      <h2 className='header'>Services</h2>
       <div className='services-list'>
        {services.map(service => (
          <ul key={service.id}>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
          </ul>
        ))}
       </div>
     </div>

     <div id='acheivements' className='achievement-section'>
        <h2 className='achieve'>Achievements</h2>
        <div className='achievements'>
          <div className='left'>
            <img src="./ahcievement.avif" alt="achievements" />
          </div>
          <div className='right'>
            <ul>
              <li>
              <span>1</span>
               Full-Stack Developer
              </li>
              <li>
              <span>2</span>
               DevOps
              </li>
              <li>
              <span>3</span>
               Designer
              </li>
            </ul>
          </div>
        </div>
     </div>
     <div id='about' className='aboutPage'>
      <h2>About Me</h2>
      <div className='about'>
      <img src="./hero.jpg" alt="about me" />
         <div id='about' className='about-me'>
          <p>This is my portfolio and I'm Ahmed Dalab, a web developer that knows many skills,
            i can work different fields like front-end,backend and many others. 
            i am also a web designer who knows photoshop,Allustrator and figma.
          </p>
         </div>
      </div>
         
     </div>
     <footer>
      <p>  &copy; 2024 reserverd by Ahmed Dalab</p>
      <div className='footer'>
        <a href="#twitter">
          <img src="./twitter.png" alt="twitter" />
        </a>
        <a href="#whatsapp">
          <img src="./whatsapp.png" alt="whatsapp" />
        </a>
        <a href="#gmail">
          <img src="./gmail.png" alt="gmail" />
        </a>
        <a href="#fb">
          <img src="./facebook.png" alt="facebook" />
        </a>
      </div>
     </footer>
    </div>
  );
}

export default App;
