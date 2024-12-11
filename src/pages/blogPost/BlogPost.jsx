import './BlogPost.css'
import {useParams} from "react-router-dom";
import {useState} from "react";

function BlogPost () {
    /*const [postInfo, setPostInfo]   = useState({})*/
    const {postID} = useParams();
    console.log(postID)

/*function fetchPost(){
    setPostInfo(data)
}*/

    return (
        <>
        <h3>Dit is een Blogpost {postID}</h3>
       {/* <button type="button" onClick={fetchPost}>
            Haal info op!
        </button>*/}
        </>
    )
}
export default BlogPost
