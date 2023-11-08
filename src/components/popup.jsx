/* eslint-disable react/prop-types */
import "../stylesheet/popup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useLocation } from 'react-router-dom';

function Popup({ onClose }) {
  let navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState(null);
  const location = useLocation();
  const date = location.state.date; //사용자가 선택한 날짜
  //const [id, setId] = useState();
  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName); 
  };

  const handleIconPost = () => {
    if (selectedIcon) {
  //아이콘 클릭 시 아이콘 url과 date 보내기
      axios
        .post("http://3.39.75.222:8080/create/icon", {
          icon: selectedIcon,
          date: date 
        })
        .then((response) => {
          console.log(response.data);
         // setId(response.data.id); //받아와진 id 값 저장하기
          navigate("/result");
          // 선택한 아이콘의 id를 result 페이지로 보내기(서버 연결 시 받아와짐)
          // navigate("/result",  {state: { id: id }} );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleIconCancel = () => {
    setSelectedIcon(null);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-button" onClick={onClose}>
          X
        </button>
        <div className="modal-div">
          <button onClick={() => handleIconClick("./img/icon1.png")}>
            <img src="./img/icon1.png" alt="사진" onClick={()=>{navigate("/result")}}/>
          </button>
          <button onClick={() => handleIconClick("./img/icon2.png")}>
            <img src="./img/icon2.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("icon3")}>
            <img src="./img/icon3.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("icon4")}>
            <img src="./img/icon4.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("icon5")}>
            <img src="./img/icon5.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("icon6")}>
            <img src="./img/icon6.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("icon7")}>
            <img src="./img/icon7.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("icon8")}>
            <img src="./img/icon8.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("icon9")}>
            <img src="./img/icon9.png" alt="사진" />
          </button>
          <button className="x-btn" onClick={handleIconCancel}>선택 X</button>
          <button className="post-btn" onClick={() =>{navigate("/result");}}>
            아이콘 선택 완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
