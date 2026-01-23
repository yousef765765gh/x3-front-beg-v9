import TitleAtSquer from '../TitleAtSquer/TitleAtSquer';

import { Link } from "react-router-dom";
import './DAHero.css'

const DAHero = () => {
    return (
        <div className="container-wrapper">
            <section className="DAHero-container" >
                <TitleAtSquer
                    title="A Digital Product Studio that will Work"
                    description=
                    <>
                        <>
                            For <span> Startups </span> , <span> Enterprise leaders </span> , <span>Media & Publishers</span> and 
                            <span> Social Good</span>
                        </>
                    </>
                />
                <div className="Dabtns">
                    <Link to="/work" className='DABtn'>Our Works</Link>
                    <Link to="/contact_us" className='DAGreenBtn'>Contact Us</Link>
                </div>
            </section>
        </div>

    )
}

export default DAHero