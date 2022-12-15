
import './Arequest.css'

export const RequestListItem = ({title, num}) => {
  return(
    <li className="request-item">
      <p className="req-text">{title}</p>
      <p className="req-text req-text__num">{num}</p>
    </li>
  )
}