import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <h3>Ankit Chouhan</h3>
                    <p>Passionate web developer with a knack for clean code and intuitive design. Crafting digital experiences that leave lasting impressions.</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=100009915194990&mibextid=LQQJ4d" target='_blank' className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="https://www.instagram.com/ankitchouhan___" target='_blank' className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="https://join.skype.com/invite/w0FYwji6Ugt1" target='_blank' className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="https://www.linkedin.com/in/ankit-chouhan-216b2a251/" target='_blank' className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>

                    <div className="credits">
                        Designed by <a href="http://www.linkedin.com/in/ankit-chouhan-216b2a251">Ankit Chouhan</a>
                    </div>
                </div>
            </footer>

            <div id="preloader"></div>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>
        </>
    )
}

export default Footer