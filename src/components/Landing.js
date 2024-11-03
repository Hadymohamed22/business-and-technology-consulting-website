import LandingText from "./LandingText"

function Landing(props) {
    return (
        <div className="landing vh-100 position-relative overflow-hidden">
            <div className="overlay position-absolute w-100 h-100 z-1 top-0 left-0"></div>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-6 position-relative z-3 d-flex flex-column justify-content-center">
                        <LandingText
                            p={props.pText}
                            advantage={props.advantageT}
                            title={props.title}
                            showBtn={props.showBtn}
                            btnText={props.btnText} />
                    </div>
                    <div className="col-lg-6 remove-small-screen z-3 position-relative d-flex justify-content-center align-items-end">
                        <img src={props.imgSrc} alt="human" className="" width={props.imgSize} loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing