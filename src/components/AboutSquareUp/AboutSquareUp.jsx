import "./AboutSquareUp.css"
import AboutHeroSection from '../about_hero_section/AboutHeroSection';
import heroabout from "/assets/img/about us section Home+hero work.png"


const AboutSquareUp = ({title , description , bgImage , icon}) => {
    return (
        <div className="space-x">
            <AboutHeroSection
                hasButton={false}            
                imageBackground={heroabout}
                titleSection="About Us"
                contentSection="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
            />
            <div className="yb-about-squareUp">
                <div className="yb-squareUp-text">
                    <h2 className="yb-squareUp-title">{title}</h2>
                    <p className="yb-squareUp-description">{description}</p>
                </div>
                <div className="yb-about-image">
                    <div className="yb_heroBackground" style={{backgroundImage:`url(${bgImage})`}}></div>
                    <div className="yb_TopheroBackground"></div>
                    <div className="yb-lines">
                        <div className="yb-line yb-line1"></div>
                        <div className="ybline yb-line2"></div>
                        <div className="yb-line yb-line3"></div>
                        <div className="yb-line yb-line4"></div>
                    </div>
                    <div className="yb-icon-wrapper">
                        <img className="yb-icon-squareUp" src={icon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSquareUp
