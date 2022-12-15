
import "./A-info.css";

const AInfoItem = ({name, text}) => {
  return (
    <li className="a-st-item">
      <p className="statistic-name">{name}</p>
      <span className="statistic-num">{text}</span>
    </li>
  )
};

export default AInfoItem;