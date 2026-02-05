import { useEffect, useState } from 'react';
import CardsFaq from '../CardFaq/CardsFaq';
import faqSecPic from '/assets/img/faq section Home+hero section process+contactusfaq.png'
import "./Faq.css";
import AboutHeroSection from '../about_hero_section/AboutHeroSection';
import faq from "/src/data/faq.json"


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
        const [faqData,setFaqData] = useState(() => {
        const storedFAQ = localStorage.getItem("faqData");
        return storedFAQ ? JSON.parse(storedFAQ) :faq })
        useEffect(() => {
            localStorage.setItem("faqData", JSON.stringify(faqData));
        }, [faqData]);
         const visibleCount = isMobile && !showAll ? 4 : faqData.length;
    const half = Math.ceil(visibleCount / 2);
    const col1 = faqData.slice(0, half);
    const col2 = faqData.slice(half, visibleCount);

    const renderFaqColumn = (item, Index) => {
    return item.map((item, i) => {
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

