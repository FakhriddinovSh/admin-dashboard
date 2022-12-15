import './A-top-left.css';

const ATopLeft = () => {
  return (
    <div className="a-wrapper">
      <div className="a-trend-left-box">
        <div className="a-trend-lt">
          <h4 className="trend-title">Today’s trends</h4>
          <time className='a-trend-rh_st' dateTime='2019-05-25T09:19'>as of 25 May 2019, 09:41 PM</time>
        </div>
        <div className="a-trend-rh">
          <p className="a-trend-rh_st a-trend-rh_st--br">Today</p>
          <p className="a-trend-rh_st a-trend-rh_st--br">Yesterday</p>
        </div>
      </div>
      <div className="trend-bg"></div>
    </div>
  )
}

export default ATopLeft