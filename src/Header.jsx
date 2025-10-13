
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to explicitly close the menu (used after navigation)
  const closeMenu = () => setIsMenuOpen(false);

  // Function to toggle the menu (used by the bar icon)
  const toggleMenu = () => setIsMenuOpen(prev => !prev);


  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    return () => {
        document.body.classList.remove('dark-theme');
    };
  }, [theme]);

  const titleStyle = {
    color: '#fb8500', 
    whiteSpace: 'nowrap'
  };

  return (
    <header className={`header ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="container">
        <div className="navbar">
          
          <p style={titleStyle} className="site-title">Travel Agency</p>
          
          {/* Menu container. The 'active' class is controlled by state. */}
          <div className={`nav_element ${isMenuOpen ? 'active' : ''}`}> 
            <ul className="nav_ul"> 
              {/* Close menu on navigation click */}
              <li><Link to ="/" onClick={closeMenu}><span>Home</span></Link></li>
              <li><Link to ="/about" onClick={closeMenu}><span>About</span></Link></li>
              <li><Link to ="/services" onClick={closeMenu}><span>Services</span></Link></li>
              <li><Link to ="/destination" onClick={closeMenu}><span>Destination</span></Link></li>
              <li><Link to = "/contact" onClick={closeMenu}><span>Contact</span></Link></li>
            </ul>
          </div>

          <div className="nav_search">
            <input 
              type="text" 
              placeholder="search here" 
              className={theme === 'dark' ? 'dark-input' : ''} 
            />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <div className='both'>
             <div className="theme-switcher-container">
            <button 
              className={`theme-switcher ${theme === 'dark' ? 'dark-button' : ''}`} 
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>

          <div className="nav_icon">

            <i 
              className="fa fa-bars" 
              aria-hidden="true"
              // Open/Close menu on bar icon click
              onClick={toggleMenu} 
            ></i> 
          </div>
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default Header;