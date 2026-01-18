import { useEffect, useState } from 'react';
import CardsFaq from './CardsFaq';
import faqSecPic from '/assets/img/faq section Home+hero section process+contactusfaq.png'
import "./Faq.css";
import { questionData } from '../../data/FAQ';
import AboutHeroSection from '../about_hero_section/AboutHeroSection';
const Faq = () => {
    const [visibleCount, setVisibleCount] = useState(questionData.length);
    const [openIndex, setOpenIndex] = useState(null);
    useEffect(() => {
        const handleResize = () => {/* لعرض اربع كروت بالشاشات الصغيرة */
            if (window.innerWidth <= 992) {
                setVisibleCount(4)
            } else {
                setVisibleCount(questionData.length)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    const half = (visibleCount / 2);
    /* لتحسين الكود اذا كان عنا عدد الكروت فردي فينا نستخدم)(math.ceil) */
    const col1 = questionData.slice(0, half);/* تقسيم الحاوية لعمودين مشان التنسيق */
    const col2 = questionData.slice(half, visibleCount);
    return (
        <>
            <section className="faq-section">
                <AboutHeroSection
                    hasButton={false}
                    imageBackground={faqSecPic}
                    titleSection="Frequently Asked Questions"
                    contentSection="Still you have any questions? Contact our Team via hello@squareup.com" />
                <div className="faq-column">
                    {/* الاستدعاء وتعباية الكروت */}

                    {col1.map((item, i) => (
                        <CardsFaq key={i}
                            index={i}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)} />))}</div>{/* لنشوف العنصر المفتوح او المسكر */}
                < div className="faq-column" > {col2.map((item, i) => (
                    <CardsFaq key={i + half}
                        index={i + half}
                        question={item.question}

                        answer={item.answer}
                        isOpen={openIndex === i + half} onToggle={() => setOpenIndex(openIndex === i + half ? null : i + half)} />))}
                </div>
            </section>
        </>
    )
}
export default Faq


