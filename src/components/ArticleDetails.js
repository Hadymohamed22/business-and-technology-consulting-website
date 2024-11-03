import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ArticleDetails() {
    const [article, setArticle] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/blogs-data.json').then(res => res.json()).then((data) => {
            let currentArticle = data.find(e => e.id === params.articleId)
            setArticle(currentArticle)
        })
    }, [])

    if (!article) {
        return <p>Loading...</p>;
    }

    return (
        <div className="article-details py-5">
            <div className="container pt-5">
                <h1 className="fw-bold main-color">{article.title}</h1>
                <p className="text-white-50 my-0 mt-0">Published on: {article.date} | Author: {article.author} </p>
                <p className="text-white-50 my-0" style={{ fontSize: "15px" }}>Category: {article.type} | Words: {article.word_count} </p>
                <img src={article.imgSrc} alt="article img" className="img-fluid w-100 my-4 rounded-4" style={{ height: "500px", boxShadow: "0 0 30px #a5c5d49a", filter: "brightness(0.8)" }} />
                <h3 className="text-white">{article.summary}</h3>
                <span className="fw-bold fs-4 third-color">
                    Related Posts :
                </span>
                <ul className="text-white-50">
                    <li>{article.related_posts[0]}</li>
                    <li>{article.related_posts[1]}</li>
                </ul>
                <p className="m-0 mt-3">- {article.question}</p>
                <p className="m-0">- {article.contact_us}</p>
                <button onClick={() => navigate(-1)} className="btn btn-danger mt-4">Go Back</button>
            </div>
        </div>
    )
}

export default ArticleDetails;