import './SectionOurStory.css'
import TitleAtSquer from '../TitleAtSquer/TitleAtSquer'
import Aboutdata from '../../data/Aboutdata.json';
import ProcessCard from '../ProcessCard/ProcessCard';
import AboutHeroSection from '../about_hero_section/AboutHeroSection';
import heroabout from "/assets/img/about us section Home+hero work.png"
const SectionOurStory = () => {
  return (
    <section className="our-story">
          <AboutHeroSection
                hasButton={false}            
                imageBackground={heroabout}
                titleSection="About Us"
                contentSection="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
            />
        <TitleAtSquer
        title="Our Story"
        className='ourstory-title'
        />
          <div className="our-story-card">
        {
          Aboutdata.map((item, index) => (
            <ProcessCard
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
              titleColor= "var(--whit-green-text-color)"
            />
          ))
        }
      </div>
    </section>
  )
}

export default SectionOurStory
