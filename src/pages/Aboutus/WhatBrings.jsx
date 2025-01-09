import React from 'react'
import styles from "../../pages/Aboutus/WhatBring.module.css";
function WhatBrings() {
    return (
        <>
            <div class={styles.main_contener}>
                <h2> WHAT BRINGS US HERE ?</h2>
                <div class={styles.card_contener}>
                    <div class={styles.card}>
                        <h4>01</h4>
                        <p>
                            To empower individuals and institutions to harness the power of
                            learning foreign languages, turning simple curiosities into
                            career-defining and life-changing experiences.
                        </p>
                    </div>
                    <div class={styles.card}>
                        <h4>02</h4>
                        <p>
                            To create transformative multilingual journeys that foster a more
                            inclusive and empathetic society where language is not a barrier or
                            threat, but a bridge that connects people and cultures.
                        </p>
                    </div>
                    <div class={styles.card}>
                        <h4>03</h4>
                        <p>
                            Our core values are built around inclusivity, empathy, and growth,
                            ensuring that every learning experience bridges cultures, breaks
                            down barriers, and fosters understanding across diverse communities.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.whatBringContener}>
                {/* card1 */}
                <div className={styles.whatBringCard}>
                    <img src='./about us/group5.jpg' alt='image1' />

                    <p><strong>India’s fastest-growing language learning partner</strong> for individuals, educational institutions, and corporate companies</p>
                </div>
                {/* card2 */}
                <div className={styles.whatBringCard}>
                    <img src='./about us/group3.jpg' alt='image1'
                    //   style={{height:"112px",width:"100px"}}
                    />
                    <p>A massive and still growing ecosystem of Indian and <strong>private native tutors</strong> with a proven track record</p>
                </div>
                {/* card3 */}
                <div className={styles.whatBringCard}>
                    <img src='./about us/group1.jpg' alt='image1' />
                    <p>One platform that offers <strong>customizable and scalable</strong> Asian, European, and Indian Sign language courses</p>
                </div>
                {/* card4 */}
                <div className={styles.whatBringCard}>
                    <img src='./about us/group2.jpg' alt='image1' />
                    <p><strong>World-class preparation</strong> for globally-recognized language certifications <span style={{color:"white"}}>dsfdsfsdfdfdsfdsff</span>         </p>
                </div>
                {/* card 5 */}
                <div className={styles.whatBringCard}>
                    <img src='./about us/group6.jpg' alt='image1' />


                    <p><strong>Live and interactive lectures</strong> Hundreds of students from 15+ countries across 3 continents on-board</p>


                </div>

                {/* card 6 */}
                <div className={styles.whatBringCard}>
                    <img src='./about us/group4.jpg' alt='image1' />
                    <p><strong>Real-time analytics and custom reports</strong> to enhance learning outcomes<span style={{color:"white"}}>dsfafsfasfadsfss</span>
                    </p>
                </div>

            </div>

        </>
    )
}

export default WhatBrings