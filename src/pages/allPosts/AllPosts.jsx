import './AllPosts.css';
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json'

function AllPosts() {

    return(
        <>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <h3> <Link to={`/posts/${post.id-1}`}> {post.title} </Link> </h3>
                            <span> ({post.author}</span>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </li>
                    )
                })}
            </ul>
        </>

    );
}

export default AllPosts;

