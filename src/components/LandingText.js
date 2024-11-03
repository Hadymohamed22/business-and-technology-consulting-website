import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LandingText(props) {
    return (
        <div className="landing-text">
            <div className="advantage text-uppercase py-1 px-3 text-white text-lg-start text-center" data-aos="fade-right">{props.advantage}</div>
            <h1 className="text-lg-start text-center fw-bold mt-3" data-aos="fade-right" data-aos-delay="100">{props.title}</h1>
            <p className="landing-p text-white-50 text-lg-start text-center pe-2" data-aos="fade-right" data-aos-delay="200">
                {props.p}
            </p>
            {props.showBtn && <button className="btn py-2 px-3 text-white border border-2" data-aos="fade-right" data-aos-delay="300">{props.btnText}<FontAwesomeIcon icon={faChevronRight} className="ms-2 chevron-icon" /></button>}
        </div>
    )
}

export default LandingText;