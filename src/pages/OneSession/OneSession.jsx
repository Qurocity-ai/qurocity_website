import Newnavbar from "../../components/NewNavbar/Newnavbar";
import newcover from "./OneSession.module.css";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazyload";


import { useState, useEffect } from "react";
import "../Home/Home.css";
// adding swiper
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// adding react-slick for sliding section
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer2 from "../../components/Footer/Footer2";
import CounsellingForm from "../../components/CounsellingForm/CounsellingForm";

import { FaCheckCircle } from "react-icons/fa"; // Example for vector icons
import CurriculumSection from "../../components/CurriculumSection/CurriculumSection";
import Navbar2 from "../../components/Navbar2/Navbar2";
import FAQ from "../HomePage2/FAQ";
import VideoReview from "./VideoReview";

function OneSession() {
  // pop up

  const [showPopup, setShowPopup] = useState(false);

  // ----------------

  const [showNewCard, setShowNewCard] = useState(false);

  // Handle next slide (right arrow)
  const handleNext = () => {
    setShowNewCard(true); // Show the second card
  };

  // Handle previous slide (left arrow)
  const handlePrev = () => {
    setShowNewCard(false); // Show the first card
  };

  const handleCardClick = () => {
    setShowNewCard(!showNewCard);
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  // for infinite slike
  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    arrows: false,
    swipe: false,
    slidesToShow: 6,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  useEffect(() => {
    // Show main content after splash screen duration
    const timer = setTimeout(() => {
      setShowDiv1(false);
      setShowDiv2(true);

      // Show popup a few seconds after splash screen hides
      const popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 3000); // Adjust this delay as needed

      return () => clearTimeout(popupTimer);
    }, 2000); // Splash screen duration (2 seconds)

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const addGTM = () => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-SXJ40ZYWNV";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SXJ40ZYWNV');
    `;
    document.head.appendChild(script2);
  };

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PDFXMX24"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Helmet>
        {/* Canonical Link */}
        <link rel="canonical" href="https://qurocity.ai/" />

        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>

        {/* Google Ads Conversion Tracking Script */}
        <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-16458367327/a0t5CM_Xm9MZEN-C-6c9'});`}
        </script>
      </Helmet>

      <div>
        <Newnavbar className={newcover.newnewnav} />
        
        {/* <Navbar2/> */}

        {/* cover page  */}
        <div className={newcover.covernewdiv}>
          <div className={newcover.coverleftnewside}>
            <div className={`${newcover.covernewcard} `}>
              <h2 className={newcover.covernewheading}>
                Get ahead in your language journey With our customized
                One-on-one sessions
              </h2>
              <hr className={newcover.divi} />
              <p className={newcover.covernewsubheading}>
                Get personal guidance like never before.
              </p>
              <p className={newcover.covernewdescription}>
                Experience the best language training, whether you're preparing
                for exams, planning to study abroad, or simply looking to
                develop an additional skill. Our expert instructors tailor each
                session to meet your unique needs, ensuring you're confident and
                fully prepared for any challenge. Whether it's mastering complex
                grammar, expanding your vocabulary, or perfecting pronunciation,
                we provide support every step of the way. With flexible learning
                options and engaging resources, you’ll experience language
                learning that fits your lifestyle and goals.
              </p>
            </div>
          </div>

          <div className={newcover.covernewrightside}>
            <img
              src="https://res.cloudinary.com/dvk1ynowq/image/upload/v1731586916/design_qw6htq.jpg"
              alt="Qurocity cove"
              className={newcover.rightImage}
            />
          </div>
        </div>

        <div className={newcover.covernewdiv1}>
          <div className={newcover.coverleftnewside}>
            <div className={`${newcover.covernewcard} `}>
              <h2 className={newcover.covernewheadingsub}>
                Get ahead in your language journey With our customized
                One-on-one sessions
              </h2>
              <hr />
              <p className={newcover.covernewsubheadingsub}>
                Get personal guidance like never before.
              </p>
              <p className={newcover.covernewdescriptionsub}>
                Experience the best language training, whether you're preparing
                for exams, planning to study abroad, or simply looking to
                develop an additional skill. Our expert instructors tailor each
                session to meet your unique needs, ensuring you're confident and
                fully prepared for any challenge. Whether it's mastering complex
                grammar, expanding your vocabulary, or perfecting pronunciation,
                we provide support every step of the way. With flexible learning
                options and engaging resources, you’ll experience language
                learning that fits your lifestyle and goals.
              </p>
            </div>
          </div>

          <div className={newcover.covernewrightside}>
            <img
              src="https://res.cloudinary.com/dvk1ynowq/image/upload/v1731586916/design_qw6htq.jpg"
              alt="Qurocity cover"
              color="black"
              className={newcover.rightImage}
            />
          </div>
        </div>
        
{/* This whatsapp Contact which will visible to all pages*/}

        <a
          href="https://api.whatsapp.com/send?phone=9373902340&text=Hello%21%20Can you assist me in..."
          target="_blank"
          className={newcover.whtsapp_href}
        >
          <div className={newcover.whatsapp}>
            <img
              width="65"
              height="65"
              src="https://img.icons8.com/color/48/whatsapp--v1.png"
              alt="whatsapp--v1"
            />

            <p>Contact Us</p>
          </div>
        </a>


        {/* counselling form */}
        <CounsellingForm />

        {/* course list */}




        {/* <CurriculumSection className={newcover.video1}/>
        <AccordianSessionCurr className={newcover.video2} /> */}


         <div>
          <h2 className={newcover.hheader}>
            Learn from the Best Teachers at Qurocity and Master Your Language
            Skills
          </h2>
          <div className={newcover.container}>
            <div className={newcover.leftContent}>
              <ul>
                <li>
                  <strong>Instant Doubt Resolution:</strong> Get your questions
                  answered in real-time, ensuring better understanding.
                </li>
                <li>
                  <strong>Customized Lessons:</strong> Tailored content to suit
                  your learning pace and needs.
                </li>
                <li>
                  <strong>Constructive Feedback:</strong> Immediate corrections
                  to refine your language skills.
                </li>
                <li>
                  <strong>Confidence Boosting:</strong> Learn in a supportive
                  environment, perfect for practicing and improving.
                </li>
                <li>
                  <strong>Practical Focus:</strong> Prepare for real-world
                  conversations with expert guidance.
                </li>
              </ul>
            </div>
            <div className={newcover.rightContent}>
              <iframe
                width="560"
                height="315"
                // src="https://www.youtube.com/embed/-P0pUL1r7uA?si=k7Dhlu3HFsu4OXP-"
                src="https://www.youtube.com/embed/dmXcB8_Vd0I?si=yulLT9X1msSmzT4D"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div> 

{/* single youtube video section */}
        <div className={newcover.engulf1}>
        <div className={newcover.rightContent1}>
          <iframe
            width="760"
            height="415"
            src="https://www.youtube.com/embed/-P0pUL1r7uA?si=k7Dhlu3HFsu4OXP-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        </div>

        {/* curriculum section */}
        <h2 className={newcover.hheader}>
            Learn from the Best Teachers at Qurocity and Master Your Language
            Skills
          </h2>
        <CurriculumSection/>

        {/* Newsppr section */}
      
     <VideoReview/>

        {/* wondering how learning */}
        <div className={newcover.wonderingContainer}>
          <h2>
            Wondering how learning a foreign language is going to benefit you ?
          </h2>

          <hr />

          <div className="container1">
            {/* card 1 */}
            <div className="container-cards">
              {/* <LazyLoad offset={100}> */}
                <img
                  width="97"
                  height="74"
                  src="/Index/learn foreign - 1.png"
                  alt="Academic Excellance"
                />
              {/* </LazyLoad> */}
              <h3>Academic Excellence</h3>
              <p>
                Ace exams like SAT & GRE and outperform the rest in
                school/college interviews.
              </p>
            </div>

            {/* card  2 */}
            <div className="container-cards">
              <LazyLoad offset={100}>
                <img
                  width="97"
                  height="74"
                  src="/Index/learn foreign - 2.png"
                  alt="Dream Careers"
                />
              </LazyLoad>

              <h3>Dream Careers</h3>
              <p>
                Boost your resume to world-className standards and apply for
                international job positions.
              </p>
            </div>

            {/* card 3 */}
            <div className="container-cards">
              <LazyLoad offset={100}>
                <img
                  width="97"
                  height="74"
                  src="/Index/learn foreign - 3.png"
                  alt="Real-Life Skills"
                />
              </LazyLoad>

              <h3>Real-Life Skills</h3>
              <p>
                Pick up valuable skills, such as multitasking, problem-solving,
                conflict management, etc.
              </p>
            </div>

            {/* card 4 */}
            <div className="container-cards">
              <LazyLoad offset={100}>
                <img
                  width="97"
                  height="74"
                  src="/Index/learn foreign - 4.png"
                  alt="Cognitive Focus"
                />
              </LazyLoad>

              <h3>Cognitive Focus</h3>
              <p>
                Raise your level of cognitive intelligence and sharpen your
                overall thinking process.
              </p>
            </div>
            {/* card 5 */}
            <div className="container-cards">
              <LazyLoad offset={100}>
                <img
                  width="97"
                  height="74"
                  src="/Index/learn foreign - 5.png"
                  alt="Self-Confidence Boost"
                />
              </LazyLoad>

              <h3>Self-Confidence Boost</h3>
              <p>
                Amplify your confidence levels to easily maximize strengths and
                manage weaknesses.
              </p>
            </div>
            {/* card 6 */}
            <div className="container-cards">
              <LazyLoad offset={100}>
                <img
                  width="97"
                  height="74"
                  src="/Index/learn foreign - 6.png"
                  alt="Cultural Empathy"
                />
              </LazyLoad>

              <h3>Cultural Empathy</h3>
              <p>
                Gain a deeper cultural perspective of diverse cultures and be
                more empathetic.
              </p>
            </div>

          </div>
        </div>


  

       
        {/* This is New FAQ Create by  Yogesh */}

        <FAQ/>
        {/* counselling form */}
        <CounsellingForm />

        {/* footer */}
        <Footer2 />
      </div>

      {/* Show popup after delay */}
      {/* {showPopup && <Popup onClose={closePopup} />} */}
    </>
  );
}

export default OneSession;
