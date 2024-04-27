import React from 'react'

const Navbar = () => {
    return (
        <>

            <header id="header">
                <div class="d-flex flex-column">
                    <nav id="navbar" class="nav-menu navbar">
                        <ul>
                            <li><a id='a' href="#hero" class="nav-link scrollto"><i class="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a id='a' href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                            <li><a id='a' href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                            <li><a id='a' href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                            <li><a id='a' href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar