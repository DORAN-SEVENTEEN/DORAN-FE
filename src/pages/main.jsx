/* eslint-disable react/no-unescaped-entities */
import "../stylesheet/main.css";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from 'styled-components';

function Main() {
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="main-page">
        <div className="mainimg">
          <img src="./img/Group189.png" alt="mainimg"
          style={{ width: '300px', height: 'auto'}}/>
        </div>
        <div className="main-box">
          <div className="mainlogo">
            <img src="./img/image315.png" alt="mainlogo"
            style={{ width: '250px', height: 'auto', marginTop:'20px'}}/>
          </div>
          <div className="sub-title">
            GPT와의 고민상담</div>
          <div className="title">
            '도란도란'
          </div>
            <button className="btn15"
            onClick={() => {
              navigate("/calender");
            }}
          >
            캘린더로 이동하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;