import './DATestimonialsSection.css';
import CardsData from "../../data/TestimonialsCards.json";
import slider from '/assets/img/contact p Home+work +process.png'
import AboutHeroSection from '../about_hero_section/AboutHeroSection.jsx';
import SliderCards from '../DASlider/DASlider';

const DATestimonialsSection = () => {
    return (
            <section className="datestimonials-section">
                    <AboutHeroSection
                hasButton={false}
                imageBackground={slider}
                titleSection="What our Clients say About us"
                contentSection="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
            />
                <SliderCards data={CardsData} />
            </section>
    );
};

export default DATestimonialsSection;