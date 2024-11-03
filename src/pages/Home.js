import { Link } from "react-router-dom"
import Landing from "../components/Landing"
import SmallService from "../components/SmallService"
import human from '../assets/landing-human.png';

function Home() {
    return (
        <div className="home-page">
            <Landing
                imgSrc={human}
                pText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou"
                advantageT="optimize your business growth"
                title="Professional Services By Experts"
                showBtn="true"
                btnText="Get Consulting"
                imgSize="350"
            />
            <section className="services-brief py-3">
                <div className="section-head fw-bold text-center" data-aos="fade-up">Services</div>
                <div className="container mt-5">
                    <div className="row row-gap-2">
                        <div className="col-lg-4">
                            <SmallService order="1" icon="hand" serviceName="Technology Consulting" serviceDes="We help businesses choose the optimal technological solutions to enhance performance and streamline operations." />
                        </div>
                        <div className="col-lg-4 border-box">
                            <SmallService order="2" icon="lap" serviceName="Software Development" serviceDes="We provide custom software solutions tailored to our clients’ needs, including web and mobile application development." />
                        </div>
                        <div className="col-lg-4">
                            <SmallService order="3" icon="db" serviceName="Data Management" serviceDes="We offer advanced solutions for organizing and analyzing data to improve decision-making and overall business performance" />
                        </div>
                    </div>
                </div>
                <Link data-aos="fade-up" data-aos-delay="450" to="services" className="see-more mt-5 position-relative start-50 translate-middle-x text-white btn px-4 border border-2 mb-5">See More</Link>
            </section>
        </div>
    )
}

export default Home