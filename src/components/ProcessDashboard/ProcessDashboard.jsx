
import { useEffect, useState } from "react";
import { getProcessCards, setProcessCards } from "../../data/processStorage";
import "../cssDashboard/Dashboard.css";
const ProcessDashboard = () => {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState({
    number: "",
    title: "",
    description: ""
  });
  const [editIndex, setEditIndex] = useState(null);

  // تحميل البيانات من localStorage
  useEffect(() => {setCards(getProcessCards())}, []);

  // تغيير القيم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // إضافة أو تعديل
   const handleSubmit = () => {
    if (!form.title || !form.description) return;

    let updatedCards = [...cards];

    if (editIndex !== null) {
      // تعديل
      updatedCards[editIndex] = form;
    } else {
      // إضافة
      updatedCards.push({...form,number: String(updatedCards.length + 1).padStart(2, "0")
      });
    }

    setCards(updatedCards);
    setProcessCards(updatedCards);

    // reset
    setForm({ number: "", title: "", description: "" });
    setEditIndex(null);
  };

  // حذف
  const handleDelete = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index)
      .map((item, i) => ({
        ...item,
        number: String(i + 1).padStart(2, "0")
      }));

    setCards(updatedCards);
    setProcessCards(updatedCards);
  };

  // تجهيز التعديل
  const handleEdit = (index) => {
    setForm(cards[index]);
    setEditIndex(index);
  };

  return (
    
    <section className="dashboard-container">
      <h2 className="titleDash">Process Dashboard</h2>

      {/* Form */}
      <form className="form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows="5"
        />

        <button onClick={handleSubmit}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Number</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {cards.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.number}</td>
              <td>{item.title}</td>
              <td>{item.description.slice(0, 60)}...</td>
              <td>
                <button onClick={() => handleEdit(index)} className="edit-btn">Edit</button>{" "}
                <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProcessDashboard;