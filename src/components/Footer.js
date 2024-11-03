import { faFacebookF, faLinkedinIn, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
    return (
        <footer className="pt-3 position-relative">
            <div className="overlay position-absolute w-100 h-100 z-1 top-0 left-0"></div>
            <div className="container position-relative z-3 pb-3">
                <div className="footer-head pb-3 border-bottom d-flex justify-content-between align-items-center">
                    <div className="logo fw-bold fs-3"><span className="main-color">T</span>ech<span className="main-color">N</span>ex</div>
                    <div className="social-links d-flex gap-2 align-items-center">
                        <ul className="list-unstyled d-flex m-0">
                            <li><a href="/#" className="fast-transition text-decoration-none text-white-50"><FontAwesomeIcon icon={faLinkedinIn} className="social-icon fast-transition px-2 linkedin-icon" /></a></li>
                            <li><a href="/#" className="fast-transition text-decoration-none text-white-50"><FontAwesomeIcon icon={faFacebookF} className="social-icon fast-transition px-2 face-icon" /></a></li>
                            <li><a href="/#" className="fast-transition text-decoration-none text-white-50"><FontAwesomeIcon icon={faTwitter} className="social-icon fast-transition px-2 twitter-icon" /></a></li>
                            <li><a href="/#" className="fast-transition text-decoration-none text-white-50"><FontAwesomeIcon icon={faWhatsapp} className="social-icon fast-transition px-2 whats-icon" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row pt-4 row-gap-3">
                    <div className="col-lg-3 col-md-6 text-white-50">
                        <div>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="title fw-bold fs-4">Quick Links</div>
                        <ul className="list-unstyled ps-2">
                            <li className="py-1 fast-transition"><FontAwesomeIcon icon={faChevronRight} className="icon pe-2" /><a href="/#" className="fast-transition text-decoration-none text-white-50">Home</a></li>
                            <li className="py-1 fast-transition"><FontAwesomeIcon icon={faChevronRight} className="icon pe-2" /><a href="/#" className="fast-transition text-decoration-none text-white-50">Services</a></li>
                            <li className="py-1 fast-transition"><FontAwesomeIcon icon={faChevronRight} className="icon pe-2" /><a href="/#" className="fast-transition text-decoration-none text-white-50">Blog</a></li>
                            <li className="py-1 fast-transition"><FontAwesomeIcon icon={faChevronRight} className="icon pe-2" /><a href="/#" className="fast-transition text-decoration-none text-white-50">About</a></li>
                            <li className="py-1 fast-transition"><FontAwesomeIcon icon={faChevronRight} className="icon pe-2" /><a href="/#" className="fast-transition text-decoration-none text-white-50">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="title fw-bold fs-4">Services</div>
                        <ul className="list-unstyled ps-1">
                            <li className="py-1 fast-transition"><a href="/#" className="fast-transition text-decoration-none text-white-50">Technology Consulting</a></li>
                            <li className="py-1 fast-transition"><a href="/#" className="fast-transition text-decoration-none text-white-50">Software Development</a></li>
                            <li className="py-1 fast-transition"><a href="/#" className="fast-transition text-decoration-none text-white-50">Data Management</a></li>
                            <li className="py-1 fast-transition"><a href="/#" className="fast-transition text-decoration-none text-white-50">Cloud Solutions</a></li>
                            <li className="py-1 fast-transition"><a href="/#" className="fast-transition text-decoration-none text-white-50">Website Development</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="title fw-bold fs-4">Contact</div>
                        <ul className="list-unstyled ps-1 not-hover">
                            <li className="py-1 fast-transition text-white-50"><span className="fw-bold" style={{ color: "rgb(185, 185, 185)" }}>Address : </span>Silicon Valley, CA 94043</li>
                            <li className="py-1 fast-transition text-white-50"><span className="fw-bold" style={{ color: "rgb(185, 185, 185)" }}>Phone : </span>+1 (555) 987-6543</li>
                            <li className="py-1 fast-transition text-white-50"><span className="fw-bold" style={{ color: "rgb(185, 185, 185)" }}>Email : </span>contact@technex.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright py-2 text-center fw-bold position-relative z-3 text-black">
                &copy; coding and design by Hady Sapry <br />
                linkedin ={">"} <a href="https://www.linkedin.com/in/hady-elnifali-26152a321/?trk=opento_sprofile_topcard" className="text-white">Hady Elnifali</a>
            </div>
        </footer>
    )
}

export default Footer