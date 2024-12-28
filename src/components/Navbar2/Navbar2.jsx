import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar2.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src='./navbar/newlogo.png' style={{ height: "40px" }} />
        </Link>

      </div>

      <ul className={`${styles.navLinks} ${isMobile ? styles.mobileNav : ''}`}>

      <div className={styles.languageContainer}>
          <li className={styles.dropdown}>
            <span>Languages</span>
            <div className={styles.dropdownMenu}>

              <button>
                <Link to="/learnenglish">English</Link>
              </button>

                <button>
                <Link to="/learnspanish">Spanish</Link>
                </button>

             
              <button>
                <Link to="/learnfrench">French</Link>
              </button>

                <button>
                <Link to="/learngerman">German</Link>
                </button>
             
              <button>
                <Link to="/learnchinese">Chinese</Link>
              </button>
            
                <button>
                <Link to="/learnrussian">Russian</Link>
                </button>
                
         

            <button>
                <Link to="/learnmandarin">Mandarin</Link>
            </button>
   
                <button>
                <Link to="/learndutch">Dutch</Link>
                </button>
              
          
                <button>
                <Link to="/learnjapanese">Japanese</Link>
                </button>
         
           
               <button>
                <Link to="/learnkorean">Korean</Link>
               </button>
             
               
             

             <button>
                <Link to="/learnportuguese">Portuguese</Link>
             </button>
              
              
           <button>
                <Link to="/learnarabic">Arabic</Link>
           </button>

            <button>
                <Link to="/learndanish">Danish</Link>
            </button>
                
              

  
            </div>
          </li>

          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/becometutor">Meet The Tutors</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/one-on-one-session">1:1 Session</Link></li>
        </div>



        <div className={styles.LearningCenterContainer}>
          <a href="https://qurocity.ai/lms/">
            <button className={styles.learningCenter}>Learning Center</button>
          </a>
        </div>


      </ul>

      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar2;
