import "./Secound_type_footer.css"
const Secound_type_footer = ({items}) => {
    return (
        <>
        <div className="secound_type_footer">
            <ul>
                {items.map((item,index) =>(
                        <li key={index}><img src={item.logoContact}alt="" />{item.content}</li>
                ))}
            </ul>
            <p>© 2023 SquareUp. All rights reserved.</p>
        </div>
        </>
    )
}

export default Secound_type_footer
