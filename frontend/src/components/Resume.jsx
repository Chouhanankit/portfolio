import React from 'react'

const Resume = () => {
    return (
        <>
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>I am an adaptable Full-Stack Developer with a BCA.. Proficient in HTML, CSS, JavaScript, React, Node.js,
                            Express, and MongoDB. Excels in dynamic web app development, seamlessly blending frontend and
                            backend technologies. Skilled in elegant interface design, robust backend logic, and embracing emerging
                            tech for innovation. Committed to continual learning and keen on contributing expertise to projects and
                            teams
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Ankit Chouhan</h4>
                                <p><em>I am an adaptable Full-Stack Developer with a BCA.. Proficient in HTML, CSS, JavaScript, React, Node.js,
                                    Express, and MongoDB. Excels in dynamic web app development, seamlessly blending frontend and
                                    backend technologies. Skilled in elegant interface design, robust backend logic, and embracing emerging
                                    tech for innovation. Committed to continual learning and keen on contributing expertise to projects and
                                    teams
                                </em></p>
                                <ul>
                                    <li>Indore , India</li>
                                    <li>+91-9617874140</li>
                                    <li>ankitchouhan01717@gmail.com</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Bachelor of Computer Application </h4>
                                <h5>2021 - 2024</h5>
                                <p><em>Rabindranath Tagore University -
                                    Bhopal, India</em></p>
                                <p>I have completed my graduation in Bachelor
                                    of Computer Application</p>
                            </div>
                            {/* <div className="resume-item">
                                <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                                <h5>2010 - 2014</h5>
                                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
                                    unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart
                                    dila</p>
                            </div> */}
                        </div>
                        <div className="col-lg-6">
                            <h3 className="resume-title">Work Experience</h3>
                            <div className="resume-item">
                                <h4>MERN Developer</h4>
                                <h5>2022 - Present</h5>
                                <p><em>Indore , India</em></p>
                                <ul>
                                    <li>Full Stack Development: Handle front-end and back-end tasks using MongoDB, Express.js, React.js, and Node.js.</li>
                                    <li>Collaborative Problem Solving: Work closely with teams to translate requirements into functional solutions. </li>
                                    <li>Scalable and Maintainable Code: Write clean, efficient code following best practices, optimize performance, and ensure scalability.</li>
                                    <li>Continuous Learning and Innovation: Stay updated with industry trends, experiment with new technologies, and propose innovative solutions.</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>INTERSHIP</h4>
                                <h5>2022</h5>
                                <p><em>Indore , India</em></p>
                                <ul>
                                    <li>Eskill Web is a training center and provides specific frontend development
                                        practices and technologies covered in courses. This includes HTML, CSS,
                                        JavaScript, frameworks like React etc</li>
                                    <li>I worked on many projects during my internship</li>
                                    <li>Managed major projects or tasks in a given time during the inter</li>
                                    <li>I have several projects built using React and Node JS</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Resume