import './BlogPost.css'
import {Link, useParams} from "react-router-dom";
import ConvertDate from "../../assets/helpers/ConvertDate.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function BlogPost() {

    const {postID} = useParams();
    console.log(postID)

    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getPosts() {

            try {
                const result = await axios.get('http://localhost:3000/posts');
                console.log(result.data);
                setPosts(result.data)

            } catch (e) {

                console.error(e);
                setError('');
                console.log('Dit gaat fout');
            }
        }
        getPosts();
    }, []);

    useEffect(() => {
        console.log(posts);
    }, [posts]);


    return (
        <>
            {posts.length > 0 ? (
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
                    </>) :
                (!error && <p>Data niet gevonden</p>
                )}
        </>


    )
        ;
}

export default BlogPost
