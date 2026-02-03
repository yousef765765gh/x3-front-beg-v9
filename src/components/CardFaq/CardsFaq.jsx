import { FiPlus, FiX } from "react-icons/fi";
import "./CardFaq.css"

const CardsFaq = ({ index, question, answer, isOpen, onToggle }) => {
    return (
        <>
            <div className={`faq-card ${isOpen ? "open" : ""}`}>
                <div className="faq-header" onClick={onToggle}>
                    <div className="num-bg">
                        <span className="number">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                    </div>
                    <div className="content">
                        <h3 className="question">{question}</h3>
                        {isOpen && <p className="answer">{answer}</p>}
                    </div>
                    <span className="l-icon">{isOpen ? <FiX /> : <FiPlus />}</span>
                </div>
                <div className="answer_mobile">
                    {isOpen && <p className="answer">{answer}</p>}
                </div>
                    
                
            </div >
        </>
    )
}
export default CardsFaq;






