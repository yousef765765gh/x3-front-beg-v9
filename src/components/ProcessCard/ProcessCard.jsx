import './ProcessCard.css'

const ProcessCard = ({number , title , description , titleColor}) => {
  return (
    <div className='process-card'>
        <div className='number-card'>
          <h2>{number}</h2>
          <div className='title-card'>
            <h3 style={titleColor ? {color :titleColor} : {}}>{title}</h3>
          </div>
          
          </div>
        <div className='text-card'>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ProcessCard