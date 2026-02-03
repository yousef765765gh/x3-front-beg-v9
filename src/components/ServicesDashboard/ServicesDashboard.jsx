import { useEffect, useState } from "react";
import ServicesData from "../../data/defaultServices.json"; 
import "../cssDashboard/Dashboard.css"; 

const STORAGE_KEY = "services_cards";

const ServicesDashboard = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    icon: "",
    title: "",
    description: "",
    contentBtn: "Learn More"
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setServices(JSON.parse(stored));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ServicesData));
      setServices(ServicesData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.description) return;

    let updatedServices = [...services];

    if (editIndex !== null) {
      // تعديل
      updatedServices[editIndex] = { ...form };
    } else {
      // إضافة
      const newId = services.length > 0 ? services[services.length - 1].id + 1 : 1;
      updatedServices.push({ ...form, id: newId });
    }

    setServices(updatedServices);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedServices));
    setForm({ icon: "", title: "", description: "", contentBtn: "Learn More" });
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedServices));
  };

  const handleEdit = (index) => {
    setForm(services[index]);
    setEditIndex(index);
  };

  return (
    <section className="dashboard-container"> {/* */}
      <h2 className="titleDash">Services Section Dashboard</h2>

      <form className="form" onSubmit={handleSubmit}> {/* */}
        <input
          type="text"
          name="title"
          placeholder="Service Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="icon"
          placeholder="Image URL"
          value={form.icon}
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
          {editIndex !== null ? "Update Service" : "Add Service"}
        </button>
      </form>

      <table> {/* */}
        <thead>
          <tr>
            <th>#</th>
            <th>Icon</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item, index) => (
            <tr key={item.id || index}>
              <td>{index + 1}</td>
              <td><img src={item.icon} alt={item.title} style={{ width: "30px" }} /></td>
              <td>{item.title}</td>
              <td>{item.description.slice(0, 50)}...</td>
              <td>
                <button onClick={() => handleEdit(index)} className="edit-btn">Edit</button>
                <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ServicesDashboard;