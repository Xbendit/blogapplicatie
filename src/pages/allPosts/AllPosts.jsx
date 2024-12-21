import './AllPosts.css';
import {Link, useParams} from "react-router-dom";

import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";

function AllPosts() {

    const [userPosts, setPosts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {

        async function getPosts() {

            try {
                const result = await axios.get('http://localhost:3000/posts');
                /* console.log(result.data);*/
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
        console.log(userPosts);
    }, [userPosts]);

    return (
        <>
            <h3>Begin met programmeren</h3>


            <ul>
                {Object.keys(userPosts).length > 0 ? (userPosts.map((post) => (
                        <li key={post.id}>
                            <h3><Link to={`/posts/${post.id - 1}`}> {post.title} </Link></h3>
                            <span> ({post.author})</span>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </li>
                    ))):
                    (!error && <p> Geen post beschikbaar.</p>)
                }
            </ul>


            {/*<ul>
                {Object.keys(userPosts).length > 0 && userPosts.map((post) => {
                    return (
                        <li key={post.id}>
                            <h3><Link to={`/posts/${post.id - 1}`}> {post.title} </Link></h3>
                            <span> ({post.author})</span>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </li>
                    )
                })}
            </ul>*/}


        </>

    );
}

export default AllPosts;

