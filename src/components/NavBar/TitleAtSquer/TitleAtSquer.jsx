import './TitleAtSquer.css'

const TitleAtSquer = ({title , description, subTitle }) => {
  return (
    <div className='title-atsqure'>
      <div className="text1">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className='text2'>
        <span>{subTitle}</span>
      </div>
    </div>
  )
}

export default TitleAtSquer