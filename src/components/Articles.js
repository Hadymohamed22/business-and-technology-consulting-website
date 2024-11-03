import { useEffect } from "react";
import { useState } from "react";
import ArticleBox from "./ArticleBox";

function Articles() {
    const [data, setData] = useState([])
    const categories = ["Cloud Solutions", "Software Development", "Data Management", "Tech Tips"]

    const getArticlesByCat = (cat) => {
        fetch("/blogs-data.json").then((res) => res.json()).then((articles) => {
            let data = articles.filter(e => e.type === cat)
            setData(data)
        })
    }
    const getAllArticles = () => { fetch("/blogs-data.json").then((res) => res.json()).then((articles) => setData(articles)) }

    useEffect(() => {
        getAllArticles()
    }, [])

    let filters = categories.map((e, i) => {
        return (
            <div className="btn btn-danger" data-aos="zoom-in" data-aos-delay={(i + 2) * 100} onClick={() => {
                getArticlesByCat(e)
            }}>
                {e}
            </div>
        )
    })

    let articles = data.map((article) => {
        return (
            <div className="col-lg-4 h-100" key={article.id}>
                <ArticleBox id={article.id} imgSrc={article.imgSrc} articleTitle={article.title} date={article.date} articleInfo={article.summary} />
            </div>
        )
    })
    return (
        <div className="container mb-5 mt-3 position-relative">
            <div className="filters d-flex gap-2 justify-content-center align-items-center mb-5">
                <div className="btn btn-danger" data-aos="zoom-in" data-aos-delay="100" onClick={() => {
                    getAllArticles()
                }}>
                    All
                </div>
                <div>{filters[0]}<span className="mx-1"></span>{filters[1]}</div>
                <div>{filters[2]}<span className="mx-1"></span>{filters[3]}</div>
                {filters[4]}
            </div>
            <div className="row row-gap-4">{articles}</div>
        </div>
    )
}

export default Articles;