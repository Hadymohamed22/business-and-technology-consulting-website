import { faAt, faClock, faMapLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactBox(props) {
    const icons = {
        phone: faPhoneVolume,
        address: faMapLocationDot,
        email: faAt,
        hour: faClock
    }
    const iconSelected = icons[props.icon]
    return (
        <div className="contact-box d-flex flex-column justify-content-center align-items-center p-3 rounded-3 h-100">
            <FontAwesomeIcon icon={iconSelected} style={{ fontSize: "30px" }} className="text-black" />
            <h3 className="fw-bold mt-3 text-center">{props.conName}</h3>
            <p className="fw-bold text-white-50 m-0 text-center third-color">{props.conInfo}</p>
        </div>
    )
}
export default ContactBox;