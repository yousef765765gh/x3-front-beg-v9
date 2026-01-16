import './ProcessCard.css'

const ProcessCard = ({number , title , description}) => {
  return (
    <div className='process-card'>
        <div className='number-card'>
          <h2>{number}</h2>
          <h3>{title}</h3>
          </div>
        <div className='text-card'>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ProcessCard