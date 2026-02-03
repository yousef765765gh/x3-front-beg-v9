import { useEffect, useState } from "react";
// افترضت وجود ملف بيانات أولي، إذا لم يوجد سنقوم بإنشائه في الخطوة القادمة
import ServicesData from "../../data/ServicesData.json"; 
import "../cssDashboard/Dashboard.css"; // استخدام ملف الـ CSS الموحد

const STORAGE_KEY = "services_data";

const ServicesDashboard = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    icon: "" // لإضافة مسار الأيقونة
  });
  const [editIndex, setEditIndex] = useState(null);

  // 1. تحميل البيانات عند فتح الصفحة
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setServices(JSON.parse(stored));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ServicesData));
      setServices(ServicesData);
    }
  }, []);

  // 2. معالجة تغيير مدخلات الفورم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // 3. إضافة أو تعديل خدمة
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.description) return;

    let updatedServices = [...services];

    if (editIndex !== null) {
      // حالة التعديل
      updatedServices[editIndex] = { ...form };
    } else {
      // حالة الإضافة الجديدة
      updatedServices.push({ ...form });
    }

    setServices(updatedServices);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedServices));

    // إعادة ضبط الفورم
    setForm({ title: "", description: "", icon: "" });
    setEditIndex(null);
  };

  // 4. حذف خدمة
  const handleDelete = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedServices));
  };

  // 5. تجهيز البيانات للتعديل
  const handleEdit = (index) => {
    setForm(services[index]);
    setEditIndex(index);
  };

  return (
    <section className="dashboard-container">
      <h2 className="titleDash">Services Section Dashboard</h2>

      {/* Form القسم المسؤول عن الإضافة والتعديل */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Service Title (e.g. Design)"
          value={form.title}
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="icon"
          placeholder="Icon Path (e.g. /assets/img/icon.svg)"
          value={form.icon}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Service Description"
          value={form.description}
          onChange={handleChange}
          rows="5"
        />

        <button type="submit">
          {editIndex !== null ? "Update Service" : "Add Service"}
        </button>
      </form>

      {/* Table القسم المسؤول عن عرض البيانات */}
      <table>
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
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={item.icon} alt={item.title} style={{ width: "30px" }} />
              </td>
              <td>{item.title}</td>
              <td>{item.description.slice(0, 50)}...</td>
              <td>
                <button onClick={() => handleEdit(index)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => handleDelete(index)} className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ServicesDashboard;