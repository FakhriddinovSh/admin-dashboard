


import AInfoItem from "../statistic-component/A-info";

import "./Atop-right.css"
export const ATopRight = () =>{

  const ItemInfoSt = [
    {
      stInfoTitle: "Resolved",
      stNum:449
    },
    {
      stInfoTitle: "Resolved",
      stNum:426
    },
    {
      stInfoTitle: "Average first response time",
      stNum:"33m"
    },
    {
      stInfoTitle: "Average response time",
      stNum:"3h 8m"
    },
    {
      stInfoTitle: "Resolution within SLA",
      stNum:"94%"
    },
  ]

  return (
    <ul className="a-st-list">
      {
        ItemInfoSt.map((item) => (
          <AInfoItem name={item.stInfoTitle} text={item.stNum}/>
        ))
      }
    </ul>
  )
};
