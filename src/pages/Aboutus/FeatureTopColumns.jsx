import React from 'react'
import newcover from "../../pages/Aboutus/FeatureTopColumns.module.css"
function FeatureTopColumns() {
    return (
        <>
            <div className={newcover.newsppr}>
                <div className={newcover.pprLayout}>
                    <h3>Featured in Top Columns</h3>
                    {/* TOI */}

                    <div className={newcover.pprContent}>
                        <div className={newcover.pprLeft}>
                            <img src="/Index/TOI.webp" alt="Featured in Times of India" />
                        </div>
                        <div className={newcover.pprRight}>
                            <p>
                                Meet our versatile and revolutionary Founder & CEO of
                                Qurocity- The ultimate language learning app, Mrs Sheetal
                                Ramkumar Featured on Times Of India For{" "}
                                <a
                                    target="_blank"
                                    href="https://timesofindia.indiatimes.com/business/india-business/most-inspiring-entrepreneurs-to-watch-in-2024/articleshow/111340764.cms"
                                >
                                    “The Most Inspiring Entrepreneurs to watch in 2024”
                                </a>
                                . Her phenomenal leadership skills and vision of building
                                Bharat’s first language learning app has created a much
                                greater impact on our team and other aspiring entrepreneurs
                                too. Her success story is truly inspiring and makes us want to
                                believe in ourselves too. Under her leadership in
                                revolutionizing edutech, Qurocity has been able to cater to
                                people all over the world, who are willing to make a change in
                                their life through language learning and that's how Qurocity
                                became the forefront of language education. To dive into the
                                journey of Qurocity read more :{" "}
                                <a
                                    target="_blank"
                                    href="https://timesofindia.indiatimes.com/business/india-business/most-inspiring-entrepreneurs-to-watch-in-2024/articleshow/111340764.cms"
                                >
                                    Times Of India
                                </a>
                            </p>
                        </div>
                    </div>

                    <hr className={newcover.newsppr_hr} />

                    {/* Eco Times */}
                    <div className={newcover.pprContentRight}>
                        <div className={newcover.pprRight}>
                            <p>
                                We are thrilled to announce that Qurocity- The Ultimate
                                Language Learning Platform is featured in The Economic Times'
                                prestigious list of{" "}
                                <a href="https://economictimes.indiatimes.com/news/india/most-trusted-brands-to-watch-in-2024/articleshow/111409176.cms?from=mdr">
                                    "The Most Trusted Brands To Watch in 2024"!{" "}
                                </a>{" "}
                                This recognition highlights our unwavering commitment to
                                delivering top-notch services and building trust with our
                                valued customers. Being spotlighted by such a renowned
                                publication underscores our dedication to excellence and
                                innovation. We are immensely grateful to our fantastic team
                                for their continued support and trust. Stay tuned as we
                                continue to bring to you the best of linguistics ever known!
                                Here’s to much more achievements to come in the future for
                                Qurocity! Want to Read more:{" "}
                                <a href="https://economictimes.indiatimes.com/news/india/most-trusted-brands-to-watch-in-2024/articleshow/111409176.cms?from=mdr">
                                    Economic Times
                                </a>
                            </p>
                        </div>
                        <div className={newcover.pprLeft}>
                            <img src="/Index/ET.webp" alt="New Featured Image" />
                        </div>
                    </div>

                    <hr className={newcover.newsppr_hr} />

                    {/* ISO certified: */}
                    <div className={newcover.iso}>
                        <div className={newcover.pprLeft}>
                            <img src="/Index/ISO-Qurocity.jpg" alt="ISO - Qurocity" />
                        </div>
                        <div className={newcover.pprRight}>
                            <p>
                                <strong className={newcover.iso_head}>
                                    Qurocity: ISO Certified and Trusted for Language Learning
                                    Excellence
                                </strong>
                                <br />
                                <br />
                                At Qurocity, we are proud to be ISO certified, demonstrating
                                our unwavering commitment to quality and excellence in
                                language education. This prestigious compliance certification
                                reflects our dedication to providing top-notch courses,
                                reliable service, and continuous improvement. With precise
                                quality assurance systems in place, our ISO certification
                                ensures that you receive a world-class learning experience
                                according to your needs. Trust Qurocity to be your partner in
                                achieving your language learning goals with the assurance of
                                our trusted and credible standards.
                            </p>
                        </div>
                    </div>
                    {/* <hr className={newcover.newsppr_hr} /> */}
                </div>
            </div>

        </>
    )
}

export default FeatureTopColumns