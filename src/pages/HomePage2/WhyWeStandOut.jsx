import React from 'react';
import styles from '../HomePage2/WhyWeStandOut.module.css';

const cardData = [
    {
        title: 'Learning from the best',
        description:
            'Learn from native language & Indian teachers passionate about empowering youngsters to break global barriers.',
    },
    {
        title: 'Customize as per your goals',
        description:
            'Customize the course based on your personal and professional goals to make the learning journey more focused.',
    },
    {
        title: 'Continuous improvement',
        description:
            'Take formative periodic tests & quizzes to continuously improve with real-time analytics for in-depth reports about your learning.',
    },
    {
        title: 'Everything’s user-friendly',
        description:
            'Attend live, interactive, and dynamic lectures with device-friendly course material and modules for self-paced learning.',
    },
    {
        title: 'Been there, done that',
        description:
            'Be a part of a learning ecosystem that is backed by two decades of niche experience in the online education space.',
    },
    {
        title: 'Meaningful preparation',
        description:
            'Prepare for all globally-recognized language certifications – our courses are aligned with the framework of your respective country.',
    },
];

function WhyWeStandOut() {
    return (
        <div className={styles.standOutSection}>
            {/* Left Section */}
            <div className={styles.leftSection}>
                <div className={styles.text}>
                    <h2>Why we stand out</h2>
                </div>
                <div className={styles.images}>
                    <img src="/Index/why we stand out section.png" alt="We Stand Out!" />
                </div>
            </div>

            {/* Right Section */}
            <div className={styles.rightSection}>
                <div className={styles.container}>
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${index === cardData.length - 1 ? styles.lastCard : ''}`}
                        >
                            <div className={styles.cardLeft}>
                                <h3>{card.title}</h3>
                            </div>
                            <div className={styles.cardRight}>
                                <p>{card.description}</p>
                                <hr></hr>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyWeStandOut;
