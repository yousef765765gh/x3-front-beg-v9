import { Link } from "react-router-dom"
import "./OurServices.css"

const OurServices = ({icon , title , description , showButton = true , horizontal = false}) => {
    return (
        <div className="yb-card">
            <div className={`yb-container ${horizontal ? "horizontal" : ""}`}>
                <div className="yb-icon">
                <img className="yb-img" src={icon} />
                </div>
                <h1 className="yb-title">{title}</h1>
            </div>
            <p className="yb-description">{description}</p>
            {showButton && (
                <div className="yb-btn">
                    <Link to="/Work" className="yb-link">{showButton}</Link>
                </div>
            )}
        </div>
    )
}

export default OurServices
