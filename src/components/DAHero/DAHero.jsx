import { Link } from "react-router-dom"
import "./DAHero.css"

const DAHero = ({  title, btn1, btn2 }) => {
    return (
        <div className="DA-Container">
            <div className="DA_Hero">
                <h1>{title}</h1>
                <div className="DA_Paragraph">
                <p>
                    For <span>Startups</span>,<span>Enterprise leaders</span>,<span> Media & Publishers</span>and<span>Social Good</span>
                </p>
                </div>
                <div className="DA_Btns">
                    <Link to="/work" className="DA_Btn">{btn1}</Link>
                    <Link to="/contact_us" className="DAGreen_Btn">{btn2}</Link>
                </div>
            </div>
        </div>
    )
}

export default DAHero