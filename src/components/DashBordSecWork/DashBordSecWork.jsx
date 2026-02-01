import { useState, useEffect } from 'react';
import worksJson from "../../data/worksCard.json";
import { FiArrowUpRight } from 'react-icons/fi';

const DashBordSecWork = () => {
    const [works, setWorks] = useState(() => {// حتى تطهر لكروت في الجدول 
        const saved = localStorage.getItem("works")
        return saved ? JSON.parse(saved) : worksJson
    })
    const [formData, setFormData] = useState({ id: '', title: '', description: '', image: '', link: '', icon: '', name: '' })
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
        setFormData({ id: '', title: '', description: '', image: '', name: '', link: '', icon: '' })
    };
    const handleDelete = (id) => {//رسالة تنبيه
        if (window.confirm("هل أنت متأكد من حذف هذا الكرت؟")) {
            setWorks(works.filter(item => item.id !== id))
        }
    }
    const startEdit = (item) => {
        setFormData(item)
        setIsEditing(true)
        window.scrollTo(0, 0) // رفع الصفحة للأعلى ليظهر الفورم
    }

    return (
        <>
            <div>
                <h1>Dashboard</h1>


                <section >
                    <h3>{isEditing ? "تعديل الكرت الحالي" : "إضافة كرت جديد"}</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                                
                            />
                        </div>
                        <div>
                            <label>description</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                required
                                
                            />
                        </div>
                        <div>
                            <label>photo </label>
                            <input type="text"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                required

                            />


                        </div>
                        <div >
                            <label>name</label>
                            <input
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                
                            />
                        </div>
                        <div>
                            <label>icon </label>
                            <FiArrowUpRight />
                        </div>
                        <div>
                            <label>link</label>
                            <input
                                value={formData.link}
                                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                required
                                
                            />
                        </div>
                        <button type="submit">
                            {isEditing ? "حفظ التعديلات" : "إضافة للجدول"}
                        </button>
                        {isEditing && (
                            <button type="button" onClick={() => { setIsEditing(false); setFormData({ id: '', title: '', description: '' }) }} >
                                exit
                            </button>
                        )}
                    </form>
                </section>


                <section>
                    <h3>cards</h3>
                    <table >
                        <thead>
                            <tr >
                                <th >title</th>
                                <th >description</th>
                                <th >photo</th>
                                <th >name</th>
                                <th >icon</th>
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
                                    <td ><FiArrowUpRight /></td>
                                    <td >{item.link}</td>
                                    <td >
                                        <button onClick={() => startEdit(item)} >edit</button>
                                        <button onClick={() => handleDelete(item.id)} >delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </section>
            </div >
        </>



    )
}


export default DashBordSecWork
