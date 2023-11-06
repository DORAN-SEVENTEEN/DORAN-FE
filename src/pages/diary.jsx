import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../stylesheet/diary.css";
import Popup from "../components/popup";
function Diary() {
  let navigate = useNavigate();
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <div className="btn-container">
      <button className="btn1" onClick={()=>{
        setModal(!modal);
      }}>오늘의 기분 선택하기</button>
       <button
      className="btn1"
        onClick={() => {
          navigate("/result");
        }}
      >
        GPT 고민상담 부탁해
      </button>
      </div>
      {modal && <Popup onClose={() => setModal(false)} />}

    </div>
  );
}

export default Diary;
