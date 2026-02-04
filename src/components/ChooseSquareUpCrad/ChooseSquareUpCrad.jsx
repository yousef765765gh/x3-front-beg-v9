import { useEffect, useRef, useState } from "react"
import "./ChooseSquareUpCrad.css";
import defaultChoseSquareUp from "/src/data/defaultChoseSquareUp.json"

const STORAGE_KEY = "whyChooseCard"

const ChooseSquareUpCrad = () => {
    const [cards, setCards] = useState([]);
    const [form, setForm] = useState({
    id: "",
    icon: "",
    title: "",
    description: "",
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
        const items = defaultChoseSquareUp.map((item, i) => ({...item,id: item.id + Date.now() + i,}));
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
        if (!form.title.trim() || !form.description.trim()) return;

        if (form.id) {
        const updated = cards.map((r) => (r.id === form.id ? form : r));
        theNext(updated);
        } 
        else {
        const newRow = { ...form, id: Date.now() };
        theNext([...cards, newRow]);
        }
        setForm({ id: "", icon: "", title: "", description: "" });
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
        setForm({ id: null, icon: "", title: "",description: "" });
        }
    };

    const onCancel = () => {
        setForm({ id: null, icon: "", title: "", description: "" });
    };

    return (
        <section className='dashboard-container'>
            <h2 className='titleDash'>Why Choose Square  Up:</h2>
            <form ref={formRef} onSubmit={onSubmit} className="form">
                
                <input
                    type="file"
                    onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                        setForm((f) => ({ ...f, icon: reader.result }));
                        };
                        reader.readAsDataURL(file)
                    }
                    }}
                    placeholder="Icon"
                />
                
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={onChange}
                    placeholder="Title"
                    required
                />

                <textarea
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    placeholder="Description"
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
                        <th>Icon</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((i) => (
                    <tr key={i.id}>
                        <td>{i.icon && <img src={i.icon} />}</td>
                        <td>{i.title}</td>
                        <td>{i.description}</td>
                        <td>
                        <button type="button" onClick={() => onEdit(i)} className='edit-btn'>
                            Edit
                        </button>
                        <button type="button" onClick={() => onDelete(i.id)} className='delete-btn'>
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

export default ChooseSquareUpCrad