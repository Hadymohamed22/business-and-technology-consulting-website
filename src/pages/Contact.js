import Landing from "../components/Landing"
import callImage from '../assets/call-now.png'
import ContactBox from "../components/ContactBox"
import ContactForm from "../components/ContactForm"

function Contact() {
    return (
        <div className="contact-page">
            <Landing
                imgSrc={callImage}
                pText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou"
                advantageT="optimize your business growth"
                title="Contact Us Now"
                imgSize="700"
            />
            <div className="contact-info">
                <div className="info py-5">
                    <div className="container">
                        <div className="row row-gap-3">
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100">
                                <ContactBox icon="phone" conName="Phone" conInfo="+1 (555) 987-6543" />
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="250">
                                <ContactBox icon="address" conName="Address" conInfo="Silicon Valley, CA 94043" />
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400">
                                <ContactBox icon="email" conName="Email" conInfo="contact@technex.com" />
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="550">
                                <ContactBox icon="hour" conName="Business Hours" conInfo="Monday to Friday: 9 AM - 5 PM Saturday: 10 AM - 2 PM Sunday: Closed" />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center main-color" data-aos="fade-up">Send Message Now</h1>
                <div className="contact-form d-flex justify-content-center my-5">
                    <div className="main-box position-relative overflow-hidden" data-aos="zoom-out" data-aos-delay="100">
                        <div className='content m-1 p-2'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact