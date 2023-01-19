// Write your code here
import './index.css'

const DestinationItem = props => {
  const {DestinationDetails} = props
  const {name, imgUrl} = DestinationDetails

  return (
    <li className="container">
      <div>
        <img src={imgUrl} alt={name} className="destination-image" />
        <p className="heading">{name} </p>
      </div>
    </li>
  )
}

export default DestinationItem
