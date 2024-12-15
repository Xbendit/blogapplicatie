import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/home/Home.jsx'
import AllPosts from './pages/allPosts/AllPosts.jsx'
import NewPosts from './pages/newPosts/NewPosts.jsx'
import Navigation from "./components/navigation/Navigation.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import BlogPost from "./pages/blogPost/BlogPost.jsx";


function App() {

    return (
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
    )
}

export default App
