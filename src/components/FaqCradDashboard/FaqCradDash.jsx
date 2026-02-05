import { useEffect, useRef, useState } from "react"
import faq from "/src/data/faq.json"

const STORAGE_KEY = "faqData"

const FaqCrad = () => {
    const [cards, setCards] = useState([]);
    const [form, setForm] = useState({
    id: "",
    question: "",
    answer: "",
    });

    const formRef = useRef(null);
    
    useEffect(() => {
            const storeData = localStorage.getItem(STORAGE_KEY);
        if (storeData) {
            try {
                const parsedData = JSON.parse(storeData);
                const updatedData = parsedData.map((item,i) => ({
                    ...item,id:item.id + Date.now()+i,
                }));
                setCards(parsedData);
                localStorage.setItem(STORAGE_KEY,JSON.stringify(updatedData));
            } catch {
                setCards([]);
            }
        }else {
            const items = faq.map((item, i) => ({...item,id: item.id + Date.now() + i,}));
            setCards(items);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        }
        },[]);

        const theNext = (next) => {
            setCards(next)
            localStorage.setItem(STORAGE_KEY,JSON.stringify(next));
        }

        const onChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!form.question.trim() || !form.answer.trim()) return;

        if (form.id) {
        const updated = cards.map((r) => (r.id === form.id ? form : r));
        theNext(updated);
        } 
        else {
        const newRow = { ...form, id: Date.now() };
        theNext([...cards, newRow]);
        }
        setForm({ id: "", question: "", answer: ""});
    };

    const onEdit = (card) => {
        setForm(card);
        setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
        formRef.current?.querySelector("input")?.focus();
        }, 100);
    };

    const onDelete = (id) => {
        const filtered = cards.filter((i) => i.id !== id);
        theNext(filtered);
        if (form.id === id) {
        setForm({ id: null,question: "", answer: ""});
        }
    };

    const onCancel = () => {
        setForm({ id: null,question: "", answer: ""});
    };

    return (
        <section className="dashboard-container">
            <h2 className="titleDash">Frequently Asked Questions</h2>
            <form ref={formRef} onSubmit={onSubmit} className="form">
                
                <input
                    type="text"
                    name="question"
                    value={form.question}
                    onChange={onChange}
                    placeholder="question"
                    required
                />
                
                <textarea
                    name="answer"
                    value={form.answer}
                    onChange={onChange}
                    placeholder="answer"
                    required
                />

                <button type="submit">{form.id ? "Update" : "Add"}</button>
                {form.id && (
                    <button type="button" onClick={onCancel}>
                    Cancel
                    </button>
                )}
            </form>

            <div>
                <table >
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((i) => (
                    <tr key={i.id}>
                        <td>{i.question}</td>
                        <td>{i.answer}</td>
                        <td>
                        <button type="button" onClick={() => onEdit(i)} className="edit-btn">
                            Edit
                        </button>
                        <button type="button" onClick={() => onDelete(i.id)} className="delete-btn">
                            Delete
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </section>
    )
}

export default FaqCrad
