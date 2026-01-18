const Content = ({ question, answer, isOpen }) => {
    return (
        <>
            <div className="content">
                <h3 className="question">{question}</h3>

                {isOpen && (<p className="answer">{answer}</p>)}
            </div>
        </>
    )
}

export default Content

