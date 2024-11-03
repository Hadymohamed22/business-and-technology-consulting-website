import { faHandshake, faLaptopCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SmallService(props) {
    const icons = {
        hand: faHandshake,
        lap: faLaptopCode,
        db: faDatabase
    }

    const animate = {
        1: "100",
        2: "250",
        3: "400"
    }

    const AOSAnimate = animate[props.order]

    const selectIcon = icons[props.icon]
    return (
        <div className="small-service-box d-flex flex-column justify-content-center align-items-center" data-aos="zoom-out" data-aos-delay={AOSAnimate}>
            <div className="icon rounded-pill text-white"><FontAwesomeIcon icon={selectIcon} /></div>
            <h3 className="service-name pt-3">{props.serviceName}</h3>
            <p className="text-white-50 text-center">{props.serviceDes}</p>
        </div>
    )
}

export default SmallService