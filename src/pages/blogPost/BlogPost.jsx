import './BlogPost.css'
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json'
import ConvertDate from "../../assets/helpers/ConvertDate.jsx";

function BlogPost() {

    const {postID} = useParams();


    return (
        <>

            <h2>{posts[postID].title} ({posts[postID].readTime} minuten)</h2>

            <h3> {posts[postID].subtitle} </h3>

            <p> Geschreven door {posts[postID].author} op {ConvertDate(posts[postID].created)}</p>
            <br/>
            <p>{posts[postID].content}</p>
            <br/>
            <p> {posts[postID].comments} reacties - {posts[postID].shares} gedeeld</p>
            <br/>
            <p><Link to="/"> Terug naar het overzicht </Link></p>
        </>
    );
}

export default BlogPost
