import { Link } from "react-router-dom";

function ArticleBox(props) {
    return (
        <div className="article-box d-flex flex-column" style={{ height: "570px" }} data-aos="zoom-in">
            <img src={props.imgSrc} alt="article img" className="w-100 img-fluid" style={{ height: "300px" }} />
            <h4 className="main-color mt-4">{props.articleTitle}</h4>
            <p className="third-color m-0" style={{ fontSize: "15px" }}>{props.date}</p>
            <p className="text-white-50">{props.articleInfo}</p>
            <button className="btn btn-danger mt-auto" style={{ width: "fit-content" }}>
                <Link to={`articles/${props.id}`} className="text-white text-decoration-none">Read More</Link>
            </button>
        </div>
    )
}

export default ArticleBox;