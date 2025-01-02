import React from 'react';
import styles from "../HomePage2/Testimonial.module.css";

function Testimonial() {
  const testimonials = [
    {
      image: './Index/review - swapna.png',
      text: 'Being part of a big organization, one of my 2023 goals was to learn a foreign language. So, I got to learn from Priya Nagpal, my Korean tutor at Qurocity.',
      name: 'Swapna Jain',
      company: 'Korean TOPIK 1 Level 1 - Brewer, Maine, US',
    },
    {
      image: './Index/review - reeva.png',
      text: 'Firstly, it was a lot of fun to learn with Qurocity. The teaching process was perfect, and the tutor ensured I was thoroughly engaged. So I enjoyed it a lot!.',
      name: 'Reeva Arsinghakar',
      company: 'Spanish B1 - Akola, Maharashtra',
    },
    {
      image: './Index/review - swapna.png',
      text: 'Firstly, it was a lot of fun to learn with Qurocity. The teaching process was perfect, and the tutor ensured I was thoroughly engaged. So I enjoyed it a lot!',
      name: 'Swapna Jain',
      company: 'XYZ Corp',
    },
    {
      image: './Index/review - riya.png',
      text: '"Learning a new language has always been on my bucket list, and 2023 was the perfect year to achieve it. Thanks to Priya Nagpal, my Korean tutor at Qurocity.',
      name: 'Emily',
      company: 'Alpha Solutions',
    },
  ];

  return (
    <>
    <div className={styles.maincontener}>
      <h3 style={{textAlign:"center"}}>What Learner's say!</h3>
    <div className={styles.Testimonialcontainer}>
      <div className={styles.left_Container}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.card_img}>
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className={styles.card_body}>
              <p>{testimonial.text}</p>
              <h4>{testimonial.name}</h4>
              <span>{testimonial.company}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.right_Container}>
        <h3>Meet Dhruv, a 5-year-old mastering Mandarin like a pro in just 5 months! Watch him speak fluently and inspire your own language journey.</h3>
        {/* Placeholder for video */}
        <iframe
          width="80%"
          height="520"
          src="https://www.youtube.com/embed/8coJVB4FlEE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
      </div>
    </>
  );
}

export default Testimonial;
