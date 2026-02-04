import { NavLink, useNavigate} from "react-router-dom"
import "./NavBar.css"
import { useState, useEffect } from "react";

const NavBar = ({logo,items,btn,media_btn}) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastUserName, setLastUserName] = useState("");

    useEffect(() => {
    const stored = localStorage.getItem("contactUsEntries");
    if (stored) {
        const list = JSON.parse(stored);
        if (list.length > 0) {
            setLastUserName(list[list.length - 1].fullName);
        }
    }
}, []);
    return (
        <>
        <nav>
            <img src={logo} alt="logo-nav" />
            <ul className={isMenuOpen ? "open" : ""}>
                {items.map((item,index) =>(
                    <li key={index} onClick={() => setIsMenuOpen(false)}><NavLink to={item.href} className={({isActive})=>(isActive ? "active" : "")} >{item.content}</NavLink></li>
                ))}
            </ul>
            <button onClick={() => navigate("/contact_us")} className="btn-nav" >
                {lastUserName ? lastUserName : btn}
            </button>
                {lastUserName && (
                    <button
                        className="btn-nav"
                        onClick={() => {
                            setLastUserName("");
                        }}
                    >
                        Logout
                    </button>
                )}
            <button className="btn-nav-media" onClick={() => setIsMenuOpen(!isMenuOpen)}><img src={media_btn} alt="media_btn" /></button>
        </nav>
        </>
    )
}

export default NavBar
