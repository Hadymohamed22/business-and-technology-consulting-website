import Landing from "../components/Landing"
import landingImg from '../assets/man-woman.png'
import serviceOneImg from '../assets/service1.jpg'
import serviceTwoImg from '../assets/service2.jpg'
import serviceThreeImg from '../assets/service3.jpg'
import serviceFourImg from '../assets/service4.jpg'
import serviceFiveImg from '../assets/service5.jpg'
import ServiceBox from "../components/ServiceBox"

function Services() {
    return (
        <div className="services-page">
            <Landing
                imgSrc={landingImg}
                pText="We help startups and established businesses overcome challenges with cutting-edge technology solutions and innovative business strategies to enhance performance and accelerate growth."
                advantageT="Why Choose Us ?"
                title="Services"
                imgSize="550"
            />
            <section className="services">
                <h1 className="section-head text-center main-color fw-bold" data-aos="fade-up">Services</h1>
                <div className="services-content mt-5">
                    <ServiceBox
                        num="0"
                        image={serviceOneImg}
                        order='1'
                        servNum="01"
                        servName="Technology Consulting"
                        servInfo="We provide tailored consulting services to help you choose the right technological solutions for your business needs, whether it's in programming, data management, or cloud storage."
                    />
                    <ServiceBox
                        image={serviceTwoImg}
                        order='2'
                        servNum="02"
                        servName="Software Development"
                        servInfo="We offer custom software development services, including the development of web and mobile applications using the latest technologies to ensure high performance and seamless interaction."
                    />
                    <ServiceBox
                        image={serviceThreeImg}
                        order='1'
                        servNum="03"
                        servName="Data Management"
                        servInfo="We assist businesses in organizing and managing their data effectively, making it easier to access and analyze information to enhance performance and decision-making."
                    />
                    <ServiceBox
                        image={serviceFourImg}
                        order='2'
                        servNum="04"
                        servName="Cloud Solutions"
                        servInfo="We provide hosting and cloud storage services to ensure the safety of your data and easy access from anywhere at any time."
                    />
                    <ServiceBox
                        image={serviceFiveImg}
                        order='1'
                        servNum="05"
                        servName="Website Development"
                        servInfo="We design and develop distinctive and attractive websites that reflect your company's identity and help attract potential clients."
                    />
                </div>
            </section>
        </div>
    )
}

export default Services