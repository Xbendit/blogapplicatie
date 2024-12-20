import './App.css'
import logo from './assets/logo-white.png'
/*import {BrowserRouter as Route} from "react-router-dom";*/
import {Link, Routes, Route, useNavigate} from "react-router-dom"
import Home from './pages/home/Home.jsx'
import AllPosts from './pages/allPosts/AllPosts.jsx'
import NewPosts from './pages/newPosts/NewPosts.jsx'
import Navigation from "./components/navigation/Navigation.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import BlogPost from "./pages/blogPost/BlogPost.jsx";


function App() {
    const navigate = useNavigate();

    navigate ('/posts/');

    return (
        /*<div className="page-container">

            <img src={logo} alt="Company logo"/>
            <h1>Begin hier met het maken van jouw blog-applicatie!</h1>*/
           <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<AllPosts/>}/>
                <Route path="/new" element={<NewPosts/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/posts/:postID" element={<BlogPost/>}/>
            </Routes>
           </>
       /* </div>*/


    )
}

export default App
