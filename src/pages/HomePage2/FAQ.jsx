import React from 'react'
import Accordion from "../../components/Accordion"
import styles from "../../pages/HomePage2/FAQ.module.css"
function FAQ() {
    return (
        <>
            <div className={styles.faqcontener}>
                <div className="faqHeadingDivCss">
                    <h4
                        style={{
                            color: "#00046C",
                            fontSize:"1.7rem"
                        }}
                        className="faq-heading"
                    >
                        Frequently Asked Questions
                    </h4>
                </div>
                <div className="body-faq">
                    <div className="image-container">
                        <img src="/Index/faq.png" alt="FAQ FAQs" />
                    </div>
                    <div className="layout">
                        <Accordion/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ