import './TitleAtSquer.css'

const TitleAtSquer = ({ title, description, subTitle, className = "" }) => {
  return (
    <div className={`title-atsqure ${className}`}>
      <div className="text1">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>

      {subTitle && (
        <div className='text2'>
          <span>{subTitle}</span>
        </div>
      )}
    </div>
  )
}

export default TitleAtSquer