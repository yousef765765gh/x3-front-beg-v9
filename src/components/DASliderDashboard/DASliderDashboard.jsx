import  { useState, useEffect } from "react";
import testimonials from "../../data/TestimonialsCards.json";
import "../cssDashboard/Dashboard.css";

const STORAGE_KEY = "testimonialsCards";

const DASliderDashboard = () => {
  const [dashboardSliders, setDashboardSliders] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    subTitle: "",
    name: "",
    job: "",
    btn: "",
    img: "",
    paddingBottom: ""
  });

  // جلب البيانات من localStorage عند أول تحميل
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setDashboardSliders(JSON.parse(stored));
    } else {
      setDashboardSliders(testimonials);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials));
    }
  }, []);

  const handleEdit = (id) => {
    const slide = dashboardSliders.find(s => s.id === id);
    if (slide) setFormData({ ...slide });
  };

  const handleDelete = (id) => {
    const updated = dashboardSliders.filter(s => s.id !== id);
    setDashboardSliders(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("cardsUpdated")); // live update
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;

    let updated;
    if (formData.id) {
      updated = dashboardSliders.map(s => s.id === formData.id ? { ...formData } : s);
    } else {
      updated = [...dashboardSliders, { ...formData, id: Date.now() }];
    }

    setDashboardSliders(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("cardsUpdated")); // live update

    setFormData({
      id: null,
      title: "",
      subTitle: "",
      name: "",
      job: "",
      btn: "",
      img: "",
    });
  };

  return (
    <section className="dashboard-container">
      <h2 className="titleDash">What our Clients say About us:</h2>

      <form onSubmit={handleSubmit} className="form">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
        <input name="subTitle" value={formData.subTitle} onChange={handleChange} placeholder="Description" />
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input name="job" value={formData.job} onChange={handleChange} placeholder="Job" />
        <input name="btn" value={formData.btn} onChange={handleChange} placeholder="Button Text" />
        <input name="img" value={formData.img} onChange={handleChange} placeholder="Image URL" />
        <button type="submit">{formData.id ? "Update" : "Add"} Card</button>
      </form>

      <table className="slides-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Name</th>
            <th>Job</th>
            <th>Button Text</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dashboardSliders.length > 0 ? (
            dashboardSliders.map(slide => (
              <tr key={slide.id}>
                <td className="text-cell">{slide.title}</td>
                <td className="text-cell">{slide.subTitle}</td>
                <td className="text-cell">{slide.name}</td>
                <td className="text-cell">{slide.job}</td>
                <td className="text-cell">{slide.btn}</td>
                <td className="text-cell">
                  {slide.img && (
                    <img src={slide.img} alt={slide.title} className="slide-image" />


)}
                </td>
                <td>
                  <button onClick={() => handleEdit(slide.id)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(slide.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">No slides found</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default DASliderDashboard;