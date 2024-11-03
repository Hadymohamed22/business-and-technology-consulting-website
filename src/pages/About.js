import Landing from "../components/Landing"
import image from '../assets/aboutImg.png'
import companyImage from '../assets/about2.jpg'
import AdvanBox from "../components/AdvanBox"

function About() {
    return (
        <div className="about-page">
            <Landing
                imgSrc={image}
                pText="Our mission is to empower businesses by providing scalable and sustainable technology solutions that improve efficiency, productivity, and overall business performance"
                advantageT="optimize your business growth"
                title="About TechNex"
                imgSize="500"
            />
            <div className="about-content">
                <div className="about-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 remove" data-aos="zoom-in">
                                <div className="image py-5"><img src={companyImage} alt="company" className="img-fluid rounded-4" /></div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="text ps-3">
                                    <h1 className="fw-bold main-color" data-aos="fade-left" data-aos-delay="100" data-aos-duration="500">Who Are We?</h1>
                                    <p className="text-white-50" data-aos="fade-left" data-aos-delay="200" data-aos-duration="500">
                                        At TechNex, we are dedicated to helping startups and small businesses harness the power of technology to enhance performance and streamline their operations. Founded with a vision to provide integrated technological solutions, we specialize in software development, data management, and cloud solutions.
                                    </p>
                                    <p className="text-white-50 mt-3" data-aos="fade-left" data-aos-delay="300" data-aos-duration="500">
                                        Our team of experts is passionate about delivering innovative and efficient solutions that align with your business goals. Whether you need custom software, data organization, or cloud-based solutions, we ensure that your company benefits from cutting-edge technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why-choose-us my-5">
                    <h1 className="fw-bold text-center" data-aos="fade-up" data-aos-duration="500">Why Choose Us ?</h1>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-delay="100">
                                <AdvanBox order="1" icon='idea' advanInfo="We understand that each business is unique, and we customize our services to fit your specific needs." advanName="Tailored Solutions" />
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-delay="250">
                                <AdvanBox order="2" icon='team' advanInfo="Our team is made up of experienced professionals who are dedicated to delivering high-quality services." advanName="Expert Team" />
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-delay="400">
                                <AdvanBox order="3" icon='innovation' advanInfo="We stay ahead of the curve by adopting the latest technology trends and best practices to ensure your business thrives in a competitive market." advanName="Commitment to Innovation" />
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-delay="550">
                                <AdvanBox order="4" icon='headset' advanInfo="Your success is our success. We build long-term partnerships by focusing on delivering results that matter to you." advanName="Customer-Centric Approach" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About