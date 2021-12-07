import React, { useState } from "react";
import "./App.css";
//메인홈화면 중앙의 흔들리는 빠른예매 버튼 컴포넌트 입니다. 
function SpeedyemeButton() {
    const [btncl, setBtncl] = useState(false);
    /*function changecolor() {
      console.log("마우스커서가왔다갔다 ");
      console.log(btncl);
    }*/
    return (
      <a
        onMouseOver={() => setBtncl(true)}
        onMouseOut={() => setBtncl(false)}
        style={{ borderColor: btncl ? "white" : "" }}
        className="speed-yeme"
        href="#"
      >
        <button className="SpeedyemeButton">빠른예매</button>
      </a>
    );
  }

  
export default SpeedyemeButton;