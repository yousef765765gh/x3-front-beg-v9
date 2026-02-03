import { useEffect, useState } from 'react';
import CardsFaq from '../CardFaq/CardsFaq';
import faqSecPic from '/assets/img/faq section Home+hero section process+contactusfaq.png'
import "./Faq.css";
import questionData  from '../../data/FAQ.json';
import AboutHeroSection from '../about_hero_section/AboutHeroSection';

const Faq = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 992);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    const handleToggle = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
    };

    const visibleCount = isMobile && !showAll ? 4 : questionData.length;
    const half = Math.ceil(visibleCount / 2);
    const col1 = questionData.slice(0, half);
    const col2 = questionData.slice(half, visibleCount);

    const renderFaqColumn = (items, Index) => {
    return items.map((item, i) => {
        const currentIndex = Index + i;
        return (
            <CardsFaq
                key={currentIndex}
                index={currentIndex}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === currentIndex}
                onToggle={() => handleToggle(currentIndex)}
            />
        );
    });
};
    return (
        <>
            <section className='l-sec'>
                <AboutHeroSection
                    hasButton={false}
                    imageBackground={faqSecPic}
                    titleSection="Frequently Asked Questions"
                    contentSection="Still you have any questions? Contact our Team via hello@squareup.com" 
                />
                <div className="faq-section">
                    <div className="faq-column">
                        {renderFaqColumn(col1, 0)}
                    </div>
                    <div className="faq-column">
                        {renderFaqColumn(col2, half)}
                    </div>
                </div>
                <div className="more-less-btn">
                    <button onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            </section>
        </>
    )
}
export default Faq

