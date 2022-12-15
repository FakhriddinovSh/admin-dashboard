
import './AbottomR.css'

export const AbottomR = () => {
  return (
    <div className="right-box">
      <div className="right-box__head">
        <div className="right-box__head-top">
          <h4 className="right-box__title">Tasks</h4>
          <span className='right-box__sp'>Today </span>
        </div>
        <p className="right-box-txt">View all</p>
      </div>
      <ul className="list-nostyled">
        <li className='infor-item'>
          <p className="infor-item__text">Create new task</p>
          <span className="infor-item__sp"></span>
        </li>
        <li className="infor-item">
          <div className="box-df">
            <input className='task-name' type="radio" name="task_name" />
            <p className="infor-check-lb">Finish ticket update</p>
          </div>
          <span className="task-text task-text__yellow ">Urgent</span>
        </li>
        <li className="infor-item">
          <div className="box-df">
            <input className='task-name' type="radio" name="task_name" />
            <p className="infor-check-lb">Create new ticket example</p>
          </div>
          <span className="task-text task-text__green">New</span>
        </li>
        <li className="infor-item">
          <div className="box-df">
            <input className='task-name' type="radio" name="task_name" />
            <p className="infor-check-lb">Update ticket report</p>
          </div>
          <span className="task-text task-text__gray">Default</span>
        </li>
      </ul>
    </div>
  )
}