import "./SliderCardHome.css"
const SliderCardHome = ({ card }) => {
  return (
    <div className="DA_Card">
      <h2>{card.title}</h2>
      <p style={{paddingBottom: card.paddingBottom }}>{card.subTitle}</p>

      <div className="ContentCard">
        {card.img && <img src={card.img} alt={card.name} className="DA_Img" />}
        <div className="DA_Info">
          <h3>{card.name}</h3>
          <span>{card.job}</span>
        </div>
        {card.btn && <button className="DA_Button">{card.btn}</button>}
      </div>
      
    </div>
  );
};

export default SliderCardHome;
