import React from 'react'
import Pizza from '../assets/Pizzahub.png'
import github from '../assets/github.png'
import weather from '../assets/Weather.png'
import motog from '../assets/motog.png'
import corelDraw from '../assets/CorelDraw.png'
import uber from '../assets/Uber.png'
import image from '../assets/Pizzahub.png'

const PortfolioSection = () => {
    return (
        <>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Explore my portfolio and witness the culmination of creativity and technical expertise, showcased in projects that push boundaries and redefine digital experiencesd.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                {/* <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={Pizza} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Pizza Hub</h4>
                                    <p>E-Commerce Web</p>
                                    <div className="portfolio-links">
                                        {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                                            className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a> */}
                                        <a href="https://pizzahubfast.netlify.app/" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external"
                                            title="Portfolio Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={github} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Search GitHub User</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        {/* <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery"
                                            className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a> */}
                                        <a href="https://githubproject01.netlify.app/" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external"
                                            title="Portfolio Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={weather} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Weather App</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        {/* <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery"
                                            className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a> */}
                                        <a href="https://chouhanankit.github.io/weatherapp3/" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external"
                                            title="Portfolio Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={motog} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Motorola Web Page</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        {/* <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery"
                                            className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a> */}
                                        <a href="https://chouhanankit.github.io/Ankitmotorola/" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external"
                                            title="Portfolio Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={uber} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Uber Web </h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        {/* <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery"
                                            className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a> */}
                                        <a href="https://chouhanankit.github.io/AnkitsUber/" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external"
                                            title="Portfolio Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={corelDraw} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>CorelDRAW Web</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        {/* <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery"
                                            className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a> */}
                                        <a href="https://chouhanankit.github.io/AnkitcorelDRAW/" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external"
                                            title="Portfolio Details"><i className="bx bx-link"></i></a>
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

export default PortfolioSection