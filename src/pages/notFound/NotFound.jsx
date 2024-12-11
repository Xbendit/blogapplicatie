import './NotFound.css'
import {Link} from "react-router-dom";


function NotFound() {
    return(
        <>
        <h3>Dit is niet jouw pagina vriend!!!</h3>
        <p>Stuur me onmiddelijk terug naar <Link to="/">Home</Link>!</p>
        </>
    )


}
export default NotFound;