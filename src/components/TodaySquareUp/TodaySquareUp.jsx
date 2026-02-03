import { Link } from "react-router-dom"
import "./TodaySquareUp.css"
const TodaySquareUp = ({icon , title , description , title2 , description2 , button }) => {
    return (
        <section className="space-x-today">
            <div className='yb-today-squareUp'>
                <div className=' yb-top-section'>
                    <img className="yb-icon-today" src={icon}/>
                    <div className='yb-text-today'>
                        <h1 className='yb-title-today'>{title}</h1>
                        <p className='yb-description-today'>{description}</p>
                    </div>
                </div>
                <div className='yb-bottom-section'>
                    <h3 className='yb-title-today2'>{title2}</h3>
                    <div className="yb-container-taday"><p className='yb-description-today2'>{description2}</p></div>
                    <Link to={"/contact_us"} className="yb-btn-today">{button}</Link>
                </div>
            </div>
        </section>
    )
}

export default TodaySquareUp
