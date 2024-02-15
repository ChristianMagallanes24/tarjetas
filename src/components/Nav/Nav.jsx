import React, {useState} from "react";
/*{ Nav estilos}*/
import "./_Nav.scss";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav-logo"></div>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="#">inicio</a>
                <a href="#">tarjetas</a>
                <a href="#">¿quienes somos?</a>
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