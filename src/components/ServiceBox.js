import { Link } from "react-router-dom"

function ServiceBox(props) {
    const orderImg = props.order
    const setTextOrder = () => {
        if (orderImg === "1") {
            return "2"
        } else {
            return "1"
        }
    }
    let orderText = setTextOrder();
    return (
        <div className="box d-flex justify-content-center align-items-center">
            <div className="image" style={{ order: orderImg }} data-aos="zoom-in" data-aos-delay="100">
                <img src={props.image} className="img-fluid" alt="service" />
            </div>
            <div className="service-text ps-4 my-2" style={{ order: orderText }} data-aos="zoom-in" data-aos-delay="150">
                <h1 className="fw-bold third-color">{props.servNum}</h1>
                <h2 className="fw-bold main-color">{props.servName}</h2>
                <p className="text-white-50 pe-5">{props.servInfo}</p>
                <Link className="btn btn-danger" to="/contact">Get Service</Link>
            </div>
        </div>
    )
}

export default ServiceBox;