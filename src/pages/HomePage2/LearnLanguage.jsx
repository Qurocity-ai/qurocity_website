import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../HomePage2/LearnLanguage.module.css";
const LearnLanguage = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen width
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    // Render levels
    const levels = [
        {
            title: "Level 1:",
            stitle: "Unlock the Basics",
            img: "./Home/level_1.png",
            desc: 'Learn simple words like "hello," "thank you," and "goodbye." These are your first step in your new world!',
        },
        {
            title: "Level 2:",
            stitle: "Learn to Read",
            img: "./Home/level_2.png",
            desc: "Start reading small words and short sentences. It helps you see how the language works!",
        },
        {
            title: "Level 3:",
            stitle: " Learn to Write",
            img: "./Home/level_3.png",
            desc: "Try writing simple words or copying short sentences. Writing helps you remember better!",
        },
        {
            title: "Level 4: ",
            stitle: "Learn to Listen",
            img: "./Home/level_4.png",
            desc: "Listen to songs or watch videos. This shows you how the words sound in real life.",
        },
        {
            title: "Level 5:",
            stitle: "Learn to Speak",
            img: "./Home/level_5.png",
            desc: "Practice saying words out loud. Start with easy sentences and build confidence!",
        },
        {
            title: "Final Level: ",
            stitle: "Speak & Shine",
            img: "./Home/level_1.png",
            desc: "Use your new words and sentences in daily life. You're on your way to becoming fluent!",
        },
    ];

    return (
        <div className={styles.container}>
            <h1 >Your Fun Guide to Learning a New Language!</h1>
            {isMobile ? (
                // Render carousel for mobile screens
                <Slider {...settings}>
                    {levels.map((level, index) => (
                        <div key={index} className={styles.level}>
                            <h2 >{level.title}</h2>
                            <h2>{level.stitle}</h2>
                            <img src={level.img} alt={level.title} className={styles.image} />
                            <p>{level.desc}</p>
                        </div>
                    ))}
                </Slider>
            ) : (
                // Render normal grid for larger screens
                <div className={styles.levels}>
                    {levels.map((level, index) => (
                        <div key={index} className={styles.level}>
                            <h2>{level.title}</h2>
                            <h2 >{level.stitle}</h2>
                            <img src={level.img} alt={level.title} className={styles.image} />
                            <p>{level.desc}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LearnLanguage;