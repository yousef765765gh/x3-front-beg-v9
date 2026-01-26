import { FiArrowUpRight } from "react-icons/fi";
import "./WorksCard.css";
const WorksCard = ({ work }) => {
    return (
        <div className="work-card">
            <h4 className="work-title p-50 p-30 font">{work.title}</h4>
            <div className="img-wrraper"><img className="p-50 p-30" src={work.image} alt={work.name} /></div>
            <div className="card-bottom p-50">
                <span className="work-name font l-h">{work.name}</span>
                <div className="link-row">
                    <a href={work.link} className="link l-h p-10 p-14 f-w b-g" target="_blank">htttps:/www.chicboutique.com</a>
                    <div className="arrow-box f-w b-g" onClick={() =>
                        window.open(work.link, "_blank")}>
                        <FiArrowUpRight />
                    </div>
                </div>
            </div>
            <p className="work-desc l-h p-50 p-30 f-w">{work.description}</p>
        </div>
    );
};
export default WorksCard
