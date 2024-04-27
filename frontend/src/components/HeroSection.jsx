import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


const HeroSection = () => {

    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-center ">


                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Ankit Chouhan</h1>
                    <p style={{ fontWeight: 'normal' }}>
                        I'm {' '}
                        <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['MERN Developer','Developer', 'Freelancer',]}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={120}
                                deleteSpeed={70}
                                delaySpeed={1000}
                            />
                        </span>
                    </p>

                    <div className="social-links">
                        <a href="https://www.instagram.com/ankitchouhan___" target='_blank' className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="https://join.skype.com/invite/w0FYwji6Ugt1" target='_blank' className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100009915194990&mibextid=LQQJ4d" target='_blank' className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/ankit-chouhan-216b2a251/" target='_blank' className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection