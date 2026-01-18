import { NavLink} from "react-router-dom"
import "./IconButton.css"
const IconButton = ({items}) => {
    return (
        <div className="y-Icon-button">
            <p>Stay Connected</p>
            <ul className="so-icon">
                {items.map((item,index) =>(
                        <div className="icon" key={index}><li ><NavLink href={item.Social_Media}><img src={item.image}  alt="" /></NavLink></li></div>
                ))}
            </ul>
        </div>
    )
}

export default IconButton;