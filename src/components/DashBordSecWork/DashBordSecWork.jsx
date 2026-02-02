import { useState, useEffect } from 'react';
import worksJson from "../../data/worksCard.json";
import { FiArrowUpRight } from 'react-icons/fi';

const DashBordSecWork = () => {
    const [works, setWorks] = useState(() => {// حتى تطهر لكروت في الجدول 
        const saved = localStorage.getItem("works")
        return saved ? JSON.parse(saved) : worksJson
    })
    const [formData, setFormData] = useState({ id: '', title: '', description: '', image: '', link: '', name: '' })
    const [isEditing, setIsEditing] = useState(false)
    useEffect(() => {//للتحديث
        localStorage.setItem("works", JSON.stringify(works))
    }, [works]);
    // دالة التعامل مع الفورم (إضافة أو تعديل)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEditing) {
            // تحديث كرت موجود
            const updated = works.map(item => item.id === formData.id ? formData : item)
            setWorks(updated)
            setIsEditing(false)
        } else {
            // إضافة كرت جديد مع ID فريد
            const newWork = { ...formData, id: Date.now().toString() }
            setWorks([...works, newWork])
        }
        // تصفير الفورم بعد العملية
        setFormData({ id: '', title: '', description: '', image: '', name: '', link: '' })
    };
    const handleDelete = (id) => {//رسالة تنبيه
        if (window.confirm("Are You Sure For Delete This Card? ")) {
            setWorks(works.filter(item => item.id !== id))
        }
    }
    const startEdit = (item) => {
        setFormData(item)
        setIsEditing(true)
    }

    return (
        <>
            <section className='dashboard-container'>
                
                    <h2 className='titleDash'>Work:</h2>
                    <form onSubmit={handleSubmit} className='form'>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder='Title'
                                required
                                
                            />
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder='Description'
                                required
                                
                            />
                            <input type="text"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                placeholder='Photo'
                                required
                            />

                            <input
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder='Name'
                                required
                            />
                            <input
                                value={formData.link}
                                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                placeholder='Link'
                                required
                                
                            />
                        <button type="submit">
                            {isEditing ? "Save Editing" : "Add To Table"}
                        </button>
                        {isEditing && (
                            <button type="button" onClick={() => { setIsEditing(false); setFormData({ id: '', title: '', description: '',image: '', name: '', link: '' }) }} >
                                exit
                            </button>
                        )}
                    </form>
                <div>
                    <table>
                        <thead>
                            <tr >
                                <th >title</th>
                                <th >description</th>
                                <th >photo</th>
                                <th >name</th>
                                <th >link</th>
                                <th >status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {works.map((item) => (
                                <tr key={item.id}>
                                    <td >{item.title}</td>
                                    <td >{item.description}</td>
                                    <td >
                                        <img src={item.image} />
                                    </td>
                                    <td >{item.name}</td>
                                    <td >{item.link}</td>
                                    <td >
                                        <button onClick={() => startEdit(item)} className='edit-btn'>edit</button>
                                        <button onClick={() => handleDelete(item.id)} className='delete-btn' >delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>



    )
}


export default DashBordSecWork
