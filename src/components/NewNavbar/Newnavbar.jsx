import { VisibilityOff } from "@mui/icons-material";
import newnavv from "./Newnavbar.module.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Newnavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className={newnavv.navvbarContainer}>
        <header className={newnavv.header}>
          <div className={newnavv.logoContainer}>
            
            <Link to="/">
                <img
                  src="/Index/logo.png"
                  alt="Qurocity Logo"
                  className={newnavv.logo}
                />
            </Link>

           
          </div>

          <a href="https://qurocity.ai/lms/" className={newnavv.Btn}>
            <div className={newnavv.sign}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                stroke-width="0"
                fill="currentColor"
                stroke="currentColor"
                class="icon"
              >
                <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
              </svg>
            </div>

            <div className={newnavv.text}>Student Portal</div>
          </a>
          {/* <button href="https://qurocity.ai/lms/" className={newnavv.Btn}>
              
            </button> */}

          <button
            className={`${newnavv.hamburger} ${
              sideNavOpen ? newnavv.hidden : ""
            }`}
            onClick={toggleSideNav}
          >
            &#9776;
          </button>
        </header>

        <div className={newnavv.imgline}>
          <img src="/navbar/navbarLine.png" alt="Qurocity color line" />
        </div>

        <div
          className={`${newnavv.navList} ${sideNavOpen ? newnavv.showNav : ""}`}
        >
          <button className={newnavv.closebtn} onClick={toggleSideNav}>
            &times;
          </button>
          <nav className={newnavv.nav}>
            <div className={newnavv.dropdown} ref={dropdownRef}>
              <a onClick={toggleDropdown} className={newnavv.dropbtn}>
                Languages
              </a>
              {dropdownOpen && (
                <div className={newnavv.dropdownContent}>
                  <Link to="/learnenglish">
                    <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}
                    English
                  </Link>
                  <Link to="/learnspanish">
                  <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}Spanish</Link>
                  <Link to="/learnfrench">
                  <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}French</Link>
                  <Link to="/learngerman">
                  <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}German</Link>
                  <Link to="/learnrussian">
                  <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}Russian</Link>
                  <Link to="/learnmandarin">
                  <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}Mandarin</Link>
                  <Link to="/learndutch">
                  <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}Dutch</Link>
                  <Link to="/learnjapanese">
                  <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}Japanese</Link>
                  <Link to="/learnkorean">
                  <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}Korean</Link>
                  <Link to="/learnportuguese">
                  <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}Portuguese</Link>
                  <Link to="/learnarabic">
                  <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}Arabic</Link>
                  <Link to="/learndanish">
                  <span
                      style={{
                        position: "absolute", // Positioning it absolutely
                        clip: "rect(0, 0, 0, 0)", // Clipping the element
                        width: "1px", // Ensuring it takes minimal space
                        height: "1px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn
                    </span>{" "}Danish</Link>
                </div>
              )}
            </div>
            
            <Link to="/blogs">Blogs</Link>
            <Link to="/becometutor">Become a Tutor</Link>
            <Link to="/aboutus">About us</Link>
            <Link to="/one-on-one-session" className={newnavv.contactUs}>
                  <span>1-on-1 Session</span>
                </Link>

            <a
              href="https://qurocity.ai/lms/"
              className={newnavv.sideStudentPortal}
            >
              Student Portal
            </a>
          </nav>
        </div>
        {sideNavOpen && (
          <div className={newnavv.overlay} onClick={toggleSideNav}>
            <div>
              <div className={newnavv.sidelogoContainer}>
                <Link to="/">
                  <img
                    src="/Index/logo-course.png"
                    alt="Qurocity Logo"
                    className={newnavv.logo}
                  />
                </Link>

                <button className={newnavv.closebtn} onClick={toggleSideNav}>
                  &times;
                </button>
              </div>
              <nav className={newnavv.sidenav}>
                <div className={newnavv.navdropdown} ref={dropdownRef}>
                  <a onClick={toggleDropdown} className={newnavv.dropbtn}>
                    Languages
                  </a>
                  {dropdownOpen && (
                    <div className={newnavv.dropdownContent}>
                      <Link to="/learnenglish">
                      <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}
                      English
                    </Link>
                      <a href="/learnspanish">
                    <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}Spanish</a>
                    <Link to="/learnfrench">
                    <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}French</Link>
                    <Link to="/learngerman">
                    <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}German</Link>
                    <Link to="/learnrussian">
                    <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}Russian</Link>
                    <Link to="/learnmandarin">
                    <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}Mandarin</Link>
                    <Link to="/learndutch">
                    <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}Dutch</Link>
                    <Link to="/learnjapanese">
                    <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}Japanese</Link>
                    <Link  to="/learnkorean">
                    <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}Korean</Link>
                    <Link to="/learnportuguese">
                    <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}Portuguese</Link>
                    <Link to="/learnarabic">
                    <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}Arabic</Link>
                    <Link to="/learndanish">
                    <span
                        style={{
                          position: "absolute", // Positioning it absolutely
                          clip: "rect(0, 0, 0, 0)", // Clipping the element
                          width: "1px", // Ensuring it takes minimal space
                          height: "1px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Learn
                      </span>{" "}Danish</Link>
                  </div>
                  )}
                </div>
                <Link to="/blogs">Blogs</Link>
                {/* <a href="/blogs">Blogs</a> */}
                <Link to="/becometutor">Become a Tutor</Link>
                {/* <a href="/becometutor">Become a Tutor</a> */}
                <Link to="/aboutus">About us</Link>
                {/* <a href="/aboutus">About us</a> */}
                <Link to="/one-on-one-session" className={newnavv.contactUs}>
                  <span>1-on-1 Session</span>
                </Link>
                <a
                  href="https://qurocity.ai/lms/"
                  className={newnavv.studentPortalsidenavbar}
                >
                  Student Portal
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Newnavbar;
