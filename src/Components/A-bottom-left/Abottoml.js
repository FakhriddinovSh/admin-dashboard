
import { RequestListItem } from '../Arequest/Arequest'
import './Abottoml.css'

export const AbottomL = () => {
  const requestArr = [
    {
      rtext:"Waiting on Feature Request",
      rnum:4230
    },
    {
      rtext:"Awaiting Customer Response",
      rnum:1005
    },
    {
      rtext:"Awaiting Developer Fix",
      rnum:914
    },
    {
      rtext:"Pending",
      rnum:281
    },
  ]
  return (
    <div className="left-box">
      <div className="left-box__head">
        <div className="left-box__head-top">
          <h4 className="left-box__title">Unresolved tickets</h4>
          <span className='left-box__sp'>Group: </span>
          <span className='left-box__sp left-box__sp--bl'>Support</span>
        </div>
        <p className="left-box-txt">View details</p>
      </div>
      <ul className="list-nostyled">
        {
          requestArr.map((item) => (
            <RequestListItem title={item.rtext} num={item.rnum}/>
          ))
        }
      </ul>
    </div>
  )
}