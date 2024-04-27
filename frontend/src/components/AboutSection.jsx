import React, { useEffect } from 'react'
import image from '../assets/Ankit.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimationByMe = () => {
    useEffect(() => {
        AOS.init();
    }, []);
}


const AboutSection = () => {
    return (
        <>
            <AnimationByMe />
            <section id="about" className="about" data-aos="fade-right">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About</h2>
                        <p data-aos="fade-up" >Hello! I'm Ankit Chouhan, and I'm a frontend developer. I'm passionate about
                            creating visually appealing and user-friendly websites and apps. I have experience
                            in coding with HTML, CSS, JavaScript and React.js.
                        </p>
                    </div>
                </div>


            </section>

            <section id="about" className="about p-2" data-aos="fade-left">

                <div className="row" data-aos="fade-left">
                    <div className="col-lg-4 flex justify-center">
                        <img src={image} style={{ width: "400px" }} className="img-fluid " alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Web Developer</h3>
                        <p className="fst-italic">
                            Passionate web developer with a knack for clean code and intuitive design. Crafting digital experiences that leave lasting impressions.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>22 July 2001</span></li>
                                    {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9617874140</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Indore, India</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    {/* <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li> */}
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Computer Application (BCA)</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email</strong> <span>ankitchouhan01717@gmail.com</span>
                                    </li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Driven web developer with a passion for transforming ideas into engaging digital experiences. Proficient in front-end and back-end development, I specialize in creating responsive, user-friendly websites that exceed client expectations and inspire user interaction.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutSection