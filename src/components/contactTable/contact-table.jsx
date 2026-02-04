import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ContactTable = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        // get element
        const stored = localStorage.getItem("contactUsEntries");
        if (stored) {
            setData(JSON.parse(stored));
        }
    }, []);
    // delete
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this entry?")) {
        const newData = data.filter(item => item.id !== id);
        localStorage.setItem("contactUsEntries", JSON.stringify(newData));
        setData(newData);
        alert("Entry deleted successfully!");
        } else {
        alert("Deletion canceled.");
        }
    };
    // Edit
    const handleEdit = (item) => {
        localStorage.setItem("editingItem", JSON.stringify(item));
        navigate("/contact_us");
    };

    return (
        <section className="dashboard-container">
            <h2 className="titleDash">Users Data:</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Reasons</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {data.length == 0 && (
                        <tr>
                            <td>                              
                                No data
                            </td>
                        </tr>
                    )}

                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.fullName}</td>
                            <td>{item.email}</td>
                            <td>{item.resons}</td>
                            <td>{item.yourMessage}</td>
                            <td>
                                <button onClick={() => handleEdit(item)}className='edit-btn'>Edit</button>
                                <button onClick={() => handleDelete(item.id)} className='delete-btn'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default ContactTable;
