import React, { useState } from 'react'
import styles from "./HomeDynamicSection.module.css";
function HomeDynamicSection() {
const [activeIndex,setactiveIndex] = useState(0)
    // content 
    const items = [
        {
            title: 'Structure lessons',
            subtitle: 'Learn Step-by-Step',
            image: './Home/home3.png',
            description: 'Busy day? No problem! Learn when and where you want, with lessons tailored to fit your schedule.'
        },
        {
            title: 'Flexible Pace',
            subtitle: 'Your Time, Your Pace',
            image: './Home/home5.png',
            description: 'Lessons are tailored to match your skill level and goals.Focuses on practical use, not just theory.'
        },
        {
            title: 'Extensive Library',
            subtitle: 'Explore Endless Resources',
            image: './Home/home4.png',
            description: 'Access a treasure of notes, practice exercises, videos, and cultural content to make your learning experience better'
        },
        {
            title: 'Experienced Tutors',
            subtitle: 'Learn from the Best',
            image: './Home/home1.png',
            description: 'Get help from experienced tutors who can answer your questions and provide feedback.'
        },
        {
            title: 'Affordable Courses',
            subtitle: 'Quality That Fits Your Budget',
            image: './Home/home2.png',
            description: 'Access quality language courses at affordable prices, making learning accessible to everyone.'
        },
    ];
  return (
    <>
      <div className={styles.contener}>
        <div className={styles.leftSection}>
            {items.map((item,index)=>(
                <div key={index} className={`${styles.leftItem} ${activeIndex===index ? `${styles.active}`:""}`}
                 onClick={()=>setactiveIndex(index)}
                >
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
             </div>
            ))}
        </div>
        <div className={styles.rightSection}>
                  <img src={items[activeIndex].image} alt={items[activeIndex].title} className="right-image" />
                  <p>{items[activeIndex].description}</p>
        </div>
      </div>
    </>
  )
}

export default HomeDynamicSection