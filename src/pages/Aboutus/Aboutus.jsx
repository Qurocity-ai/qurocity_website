// import Footer from "../../components/Footer/Footer";
// import Covernav from "../../components/Navv/Covernav";
import Aboutuscss from "./About.module.css";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";
import { useEffect } from "react";

import { Helmet } from "react-helmet";
import Navbar2 from "../../components/Navbar2/Navbar2";
import WhatBrings from "./WhatBrings";
import FeatureTopColumns from "./FeatureTopColumns";


function Aboutus() {
  useEffect(() => {
    addGTM();
  }, []);

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
        <link rel="canonical" href="https://qurocity.ai/aboutus" />
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16458367327"
        ></script>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16458367327');
    `}
        </script>
      </Helmet>

      {/* <Covernav /> */}
      <Newnavbar />
      {/* <Navbar2/> */}
      {/* <!-- Heading section - top --> */}

      <div className={Aboutuscss.headingTag}>

        <div className={Aboutuscss.stats}>
          <img src="./about us/aboutmain.png" alt="" />
        </div>
      
      </div>

      {/* <!-- sidebar to be opened after clicking the register button --> */}

      <div className={Aboutuscss.sidebar} id="sidebar">
        <div className={Aboutuscss.closeBtn} onClick="closeSidebar()">
          ×
        </div>
        <h1>Quick and Simple enrollment</h1>
        <form
          className={Aboutuscss.registrationForm}
          action="https://backendapi-ay7s.onrender.com/enroll"
          method="post"
          id="quickFormUrl"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="fullName" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" required />

          <label htmlFor="languages">Languages:</label>
          <select id="languages" name="languages" required>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Hindi">Hindi</option>
            <option value="Sanskrit">Sanskrit</option>
            <option value="German">German</option>
            <option value="Japanese">Japanese</option>
            <option value="Mandarin">Mandarin</option>
            <option value="Korean">Korean</option>
            <option value="Italian">Italian</option>
          </select>
          {/* <!-- onClick="registerNow()" --> */}
          <button type="submit" className={Aboutuscss.registerNowBtn}>
            Register Now
          </button>
        </form>
      </div>

      {/* <!-- bio section --> */}

      <div className={Aboutuscss.bio}>
        <p>
          Over a billion people worldwide have embraced the challenge of
          learning a new language. At Qurocity, we believe in going beyond mere
          linguistic competence. Founded in 2020, we're an Indian startup
          dedicated to revolutionizing language learning. <br />
          <br />
          Our mission is to equip individuals of all ages with the ability to
          fluently speak, read, write, and understand new languages. By
          mastering a new language, we empower our learners to achieve
          extraordinary personal and professional milestones.
        </p>
      </div>

      {/* --------------- what brings us here section ---------- */}

      <WhatBrings/>


      {/* <!-- origin story section --> */}


       <FeatureTopColumns/>

      <div className={Aboutuscss.originStorySection}>
        <div className={Aboutuscss.rightSide}>
          <h1>ORIGIN STORY</h1>
          <br />
          <p>
            Like any great origin story, ours began with a challenge. In the
            chaos of 2020, as the pandemic disrupted lives globally, we saw an
            urgent need: the need for people—whether children or adults—to take
            control of their futures.
            <br />
            <br />
            As the world became more interconnected, we realized that mastering
            new languages could unlock limitless opportunities, enabling
            individuals to thrive in a rapidly changing world.
            <br />
            <br />
            Fast forward just over 4 years, and we’ve become one of India’s
            fastest-growing language learning platforms, empowering countless
            learners to reach their full potential.
          </p>
        </div>
      </div>

      {/* <!-- vision section --> */}

      

      <div className={Aboutuscss.foundersSection}>
        <h2>MEET OUR FOUNDERS</h2>

        <div
          className={Aboutuscss.founderCard}
        >
          <img
            src="./about us/sheetal-mam.jpg"
            alt="Sheetal Ramkumar"
            className={Aboutuscss.founderImage}
          />
          <div className={Aboutuscss.founderInfo}>
            <h3>Sheetal Ramkumar | Founder and CEO</h3>
            <hr className={Aboutuscss.founder_divider} />
            <p>
              Sheetal, CEO of Qurocity, brings two decades of education
              experience and is celebrated among India's influential women and
              business leaders. With an MBA from Symbiosis, a PG in PR &
              Advertising from MICA, and a diploma in International Telecom
              System Management from IIT Delhi. She's a powerhouse in both
              business and technical domains. Recognized among the 21 Most
              Influential Women Leaders in India and the 10 Most Inspiring
              Business Leaders, Sheetal is shaping the future of Qurocity with
              her leadership and expertise.
            </p>
          </div>
        </div>

        <div
          className={`${Aboutuscss.founderCard} ${Aboutuscss.right1}`}
          // style={{
          //   background: "#54364E",
          // }}
        >
          <img
            src="./about us/ram-sir.jpg"
            alt="Ramkumar Kayarat"
            className={Aboutuscss.founderImage}
          />
          <div className={Aboutuscss.founderInfo}>
            <h3>Ramkumar Kayarat | Founder and CHRO</h3>
            <hr className={Aboutuscss.founder_divider} />
            <p>
              Ram, Qurocity's Chief People and Culture Officer, brings over two
              decades of Telecom industry experience, prioritizing
              customer-centric approaches. With a background at Idea Cellular
              Ltd., Reliance Communications, and Tata Communications, he's adept
              in learning development. Besides, Ram is an avid football
              enthusiast, adventurer, cyclist, trekker, and sports blogger.
              Holding an MBA from IIM Ahmedabad and a PGCBM from XLRI
              Jamshedpur, he's committed to fostering a collaborative internal
              culture at Qurocity for mutual success.
            </p>
          </div>
        </div>
        <div
          className={Aboutuscss.right2}
          // style={{
          //   background: "#54364E",
          // }}
        >
          <img
            src="./about us/ram-sir.jpg"
            alt="Ramkumar Kayarat"
            className={Aboutuscss.founderImage}
          />
          <div className={Aboutuscss.founderInfo}>
            <h3>Ramkumar Kayarat | Founder and CHRO</h3>
            <hr className={Aboutuscss.founder_divider} />
            <p>
              Ram, Qurocity's Chief People and Culture Officer, brings over two
              decades of Telecom industry experience, prioritizing
              customer-centric approaches. With a background at Idea Cellular
              Ltd., Reliance Communications, and Tata Communications, he's adept
              in learning development. Besides, Ram is an avid football
              enthusiast, adventurer, cyclist, trekker, and sports blogger.
              Holding an MBA from IIM Ahmedabad and a PGCBM from XLRI
              Jamshedpur, he's committed to fostering a collaborative internal
              culture at Qurocity for mutual success.
            </p>
          </div>
        </div>
      </div>

  
      <Footer2 />
    </>
  );
}

export default Aboutus;
