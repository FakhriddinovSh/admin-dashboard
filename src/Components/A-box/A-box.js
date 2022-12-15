import { AbottomL } from "../A-bottom-left/Abottoml";
import { AbottomR } from "../A-bottom-right/AbottomR";
import ATopLeft from "../A-top-left/A-top-left";
import { ATopRight } from "../A-top-right/Atop-right";
import "./A-box.css"

function Abox() {
  return (
    <div className="a-trend-box">
      <div className="a-top">
        <ATopLeft/>
        <ATopRight/>
      </div>
      <div className="a-bottom">
        <AbottomL/>
        <AbottomR/>
      </div>
    </div>
  )
};

export default Abox;