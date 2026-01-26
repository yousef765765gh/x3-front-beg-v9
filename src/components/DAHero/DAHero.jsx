// import { Link } from "react-router-dom"
// import "./DAHero.css"


// const DAHero = ({ image, title, btn1, btn2 }) => {
//     return (

//         <div className="DA-Container">
//             <div className="DA_Hero">
//                 <div className="DA_ImgWrapper">
//                     <img src={image} alt="" />
//                 </div>
//                 <h1 className="DA_Title">{title}</h1>
//                 <p className="DA_Paragraph">
//                     For <span>Startups</span> , <span>Enterprise leaders</span> ,
//                     <span>Media & Publishers</span> and <span>Social Good</span>
//                 </p>
//                 <div className="DA_Btns">
//                     <Link to="/work" className="DA_Btn">{btn1}</Link>
//                     <Link to="/contact-us" className="DAGreen_Btn">{btn2}</Link>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default DAHero
import { Link } from "react-router-dom"
import "./DAHero.css"


const DAHero = ({ image, title, btn1, btn2 }) => {
    return (

        <div className="DA-Container">
            <div className="DA_Hero">
                {/* <div className="DA_ImgWrapper">
                    <img src={image} alt="" />
                </div> */}
                <h1>{title}</h1>
                <div className="DA_Paragraph">
                <p>
                    For <span>Startups</span>,<span>Enterprise leaders,</span>Media &<span> Publishers</span>and<span>Social Good</span>
                </p>
                </div>
                <div className="DA_Btns">
                    <Link to="/work" className="DA_Btn">{btn1}</Link>
                    <Link to="/contact-us" className="DAGreen_Btn">{btn2}</Link>
                </div>
            </div>
        </div>

    )
}

export default DAHero