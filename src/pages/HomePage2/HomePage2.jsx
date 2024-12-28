import React from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import HomeDynamicSection from './HomeDynamicSection'
import Testimonial from './Testimonial'
import LearnLanguage from './LearnLanguage'
import Courselist from '../../components/CourseList/Courselist'
import WhyWeStandOut from './WhyWeStandOut'
import styles from "../HomePage2/HomePage2.module.css";
import LanguageComponent from '../../components/LanguageComponent/LanguageComponent'


function HomePage2() {
  return (
    <div className={styles.home_page2}>
      <Navbar2/>
      <LanguageComponent/>
      <HomeDynamicSection/>
      <Testimonial/>
      <LearnLanguage/>
      <WhyWeStandOut />
      <Courselist />
    </div>
  )
}

export default HomePage2