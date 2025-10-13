import React, { useContext } from 'react'; 
import { ThemeContext } from './ThemeContext';
import './About.css';

const About = () => {

  const { theme } = useContext(ThemeContext);
  
 
  const sectionClass = theme === 'dark' ? 'dark-theme' : '';

  return (
    <>
     
      <section className="about-page">
        <div>
          <h1>About Us</h1>
          <p>Home <i className="fa fa-arrow-right" aria-hidden="true"></i> About</p>
        </div>
      </section>

   
      <section className={`about-section ${sectionClass}`}>
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <h6>ABOUT US</h6>
              <h2>We Have 10+ Years Of Experience.</h2>
           
              <p className={sectionClass}>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="about-right">
              <p className={sectionClass}>
                Lorem ipsum dolor sit amet, Ea consequuntur. Ea consequuntur illum
                facere aperiam sequi optio consectetur adipisicing elit. Fuga,
                suscipit totam animi consequatur saepe blanditiis.
              </p>
              <p className={sectionClass}>
                Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi
                optio consectetur adipisicing elit. Fuga, suscipit totam animi
                consequatur saepe blanditiis.
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About