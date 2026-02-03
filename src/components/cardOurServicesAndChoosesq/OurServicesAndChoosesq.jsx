import { Link } from "react-router-dom"
import "./OurServicesAndChoosesq.css" 
const OurServicesAndChoosesq = ({icon , title , description , showButton, horizontal = false , contentBtn}) => {
    return (
        <div className={`yb-card ${!showButton ? "no-button" : ""}`}>
            <div className={`yb-container ${horizontal ? "horizontal" : ""}`}>
                <div className="yb-icon">
                <img className="yb-img" src={icon} />
                </div>
                <h1 className="yb-title">{title}</h1>
            </div>
            <p className="yb-description">{description}</p>
            {showButton && (
                <div className="yb-btn">
                    <Link to="/Work" className="yb-link">{contentBtn}</Link>
                </div>
            )}
        </div>
    )
}

export default OurServicesAndChoosesq;