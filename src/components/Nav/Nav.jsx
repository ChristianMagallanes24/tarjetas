import React, {useState} from "react";
import { FaHome } from "react-icons/fa";
import { BsPhoneFlip } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import miLogo from "../assets/logo.png";
/*{ Nav estilos}*/
import "./_Nav.scss";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav-logo"> <img className="logo" src={miLogo} alt="a" /></div>
            <div className={`nav-items ${isOpen && "open"}`}>
               <Link to={"/"}><a href="#"><FaHome /> inicio</a></Link> 
                <Link to={"/Modelos"}><a href="#"><BsPhoneFlip /> tarjetas</a></Link>
                <a href="#"><FaQuestion /> ¿quienes somos?</a>
                <a href="#"><ImCart /></a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Nav;