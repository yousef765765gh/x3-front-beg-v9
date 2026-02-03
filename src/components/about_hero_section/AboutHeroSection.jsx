import { useNavigate } from "react-router-dom";
import "./AboutHeroSection.css"
const AboutHeroSection = ({
    hasButton,
    imageBackground,
    imageIcone,
    titleSection,
    contentSection,
    buttonText
    }) => {
        const navigate = useNavigate();
        return (
                <> 
                <div className={`y_container ${hasButton ? 'with-btn' : 'no-btn'}`}>
                    <div className="y_heroBackground" style={{backgroundImage:`url(${imageBackground})`}}></div>
                    <div className="y_TopheroBackground"></div>
                    <div className="y_content">
                        <img src={imageIcone} className="y_sq_icon" alt="" />
                        <div className="about-y-content">
                            <h2>{titleSection}</h2>
                            <p>{contentSection}</p>
                        </div>
                        {hasButton && <button onClick={() => navigate("/contact_us")} className="y_action_btn">{buttonText}</button>}
                    </div>
                    
                </div> 
                </>
        );
}
export default AboutHeroSection
