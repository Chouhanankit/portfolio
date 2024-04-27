import React from 'react'

const SkillSection = () => {
    return (
        <>

            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title text-center">
                        <h2>Skills</h2>
                        <p>Proficient web developer adept in front-end and back-end technologies. Specializing in crafting dynamic and responsive websites, I bring creativity and precision to every project. Committed to delivering exceptional user experiences through innovative design and flawless functionality.</p>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill">HTML <i className="val">90%</i></span>
                                {/* <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                                    data-percentage="90"></div> */}
                                <div className='skill-line'>
                                    <div className='skill-per' ></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">CSS <i className="val">90%</i></span>
                                {/* <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                                    data-percentage="90"></div> */}
                                <div className='skill-line'>
                                    <div className='skill-per2' ></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">75%</i></span>
                                {/* <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                                    data-percentage="75"></div> */}
                                <div className='skill-line'>
                                    <div className='skill-per3' ></div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">REACT JS <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                                        data-percentage="70">
                                    </div> */}
                                    <div className='skill-line'>
                                        <div className='skill-per4' ></div>
                                    </div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">NODE JS <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                                        data-percentage="60">
                                    </div> */}
                                    <div className='skill-line'>
                                        <div className='skill-per5' ></div>
                                    </div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">MONGODB <i className="val">65%</i></span>
                                <div className="progress-bar-wrap">
                                    {/* <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                                        data-percentage="85">
                                    </div> */}
                                    <div className='skill-line'>
                                        <div className='skill-per6' ></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default SkillSection