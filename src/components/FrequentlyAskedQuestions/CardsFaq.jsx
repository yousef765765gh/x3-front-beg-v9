import { FiPlus, FiX } from "react-icons/fi";

import Content from "./Content";
const CardsFaq = ({ index, question, answer, isOpen, onToggle }) => {
    return (
        <>
            <div className={`faq-card ${isOpen ? "open" : ""}`}>
                <div className="faq-header" onClick={onToggle}>
                    <div className="num-bg">
                        <span className="number">{String(index + 1).padStart(2, "0")}{/* مشان نحط خانتين اول وحدة صفر والتانية الرقم ولانو ال)(padstar)ما بتتعامل غير مع سترينغ حولنا
                        (فينا نستخدم شرط ومتغير بس هيك افضل للكود) */}
                        </span>
                    </div>

                    <Content
                        question={question}
                        answer={answer}
                        isOpen={isOpen} />


                    <span className="icon">{isOpen ? <FiX /> : <FiPlus />}</span>
                </div>
                {isOpen && (
                    <div className="mobile-answer">
                        <p className="answer2">{answer}</p>
                    </div>)}
            </div >
        </>
    )
}
export default CardsFaq;



