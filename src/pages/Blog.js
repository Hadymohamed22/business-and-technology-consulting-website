import Landing from "../components/Landing"
import landingImg from "../assets/blog-landing-img.png"
import Articles from "../components/Articles"

function Blog() {
    return (
        <div className="blog-page">
            <Landing
                imgSrc={landingImg}
                pText="At TechNex, we believe that staying informed about the latest trends and innovations in technology is key to driving business success. Our blog is your go-to source for expert insights, practical tips, and industry updates on a variety of topics including software development, data management, cloud solutions, and more."
                advantageT="optimize your business growth"
                title="TechNex Blogs"
                imgSize="450"
            />
            <div className="blogs">
                <h1 data-aos="fade-up" className="text-center mt-4" style={{ fontSize: "50px", filter: "drop-shadow(0 0 5px #a5c5d49a)" }}>Latest Articles</h1>
                <Articles />
            </div>
        </div>
    )
}

export default Blog