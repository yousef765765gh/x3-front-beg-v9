import { useEffect, useState } from "react";
import processData from "../../data/ProcessDataAtSquar.json";
import "../cssDashboard/Dashboard.css";

const STORAGE_KEY = "processCards";

const ProcessDashboard = () => {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState({
    number: "",
    title: "",
    description: ""
  });
  const [editIndex, setEditIndex] = useState(null);

  // تحميل البيانات
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setCards(JSON.parse(stored));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(processData));
      setCards(processData);
    }
  }, []);

  // تغيير القيم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // إضافة أو تعديل
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.description) return;

    let updatedCards = [...cards];

    if (editIndex !== null) {
      // تعديل
      updatedCards[editIndex] = {
        ...updatedCards[editIndex],
        title: form.title,
        description: form.description
      };
    } else {
      // إضافة
      updatedCards.push({
        number: String(updatedCards.length + 1).padStart(2, "0"),
        title: form.title,
        description: form.description
      });
    }

    setCards(updatedCards);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCards));

    // reset
    setForm({ number: "", title: "", description: "" });
    setEditIndex(null);
  };

  // حذف
  const handleDelete = (index) => {
    const updatedCards = cards
      .filter((_, i) => i !== index)
      .map((item, i) => ({
        ...item,
        number: String(i + 1).padStart(2, "0")
      }));

    setCards(updatedCards);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCards));
  };

  // تجهيز التعديل
  const handleEdit = (index) => {
    setForm(cards[index]);
    setEditIndex(index);
  };
  
  return (
    <section className="dashboard-container">
      <h2 className="titleDash">Process At SquareUp</h2>
      {/* Form */}
      <form className="form" onSubmit={handleSubmit}>
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

        <button type="submit">
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
                <button onClick={() => handleEdit(index)}className="edit-btn">Edit</button>{" "}
                <button onClick={() => handleDelete(index)}className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProcessDashboard;





