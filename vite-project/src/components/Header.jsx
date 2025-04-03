
import { Link } from "react-router-dom";
export default function Header(){

    return(
        <>
            <h1>
                I am in Header
            </h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}