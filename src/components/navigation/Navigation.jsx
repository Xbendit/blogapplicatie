import "./Navigation.css"
import {Link, NavLink, useNavigate} from "react-router-dom";

function Navigation() {

    const navigate = useNavigate();



    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive === true ? "active-link":"default-link"}>Home</NavLink></li>
                    <li><NavLink to="/posts" className={({isActive}) => isActive === true ? "active-link":"default-link"}> All Posts</NavLink></li>
                    <li><button type="button" onClick= {()=>navigate("/new")}>Write new post!</button></li>
                </ul>
            </nav>
        </>
    )
}

/*<li><NavLink to="/new"> New Posts</NavLink></li>*/

export default Navigation;

