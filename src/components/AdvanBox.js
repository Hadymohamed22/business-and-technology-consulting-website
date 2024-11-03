import { faHeadset, faLightbulb, faPeopleGroup, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdvanBox(props) {
    const icons = {
        idea: faLightbulb,
        team: faPeopleGroup,
        innovation: faRocket,
        headset: faHeadset
    }

    const iconSelected = icons[props.icon]
    return (
        <div className="advan-box py-4 px-2 h-100">
            <FontAwesomeIcon icon={iconSelected} className="main-color" style={{ fontSize: "35px" }} />
            <h3 className="mt-4 fw-bold main-color">{props.advanName}</h3>
            <p className="text-white-50 pe-3">{props.advanInfo}</p>
        </div>
    )
}
export default AdvanBox;