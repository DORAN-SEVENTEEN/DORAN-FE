import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet/all.css";
import Header from "../components/header";
import Calendar from "react-calendar";
import axios from "axios";

/* axios({
  method: 'get',
  url: "https://port-0-doran-be-7lk2bloprzyfi.sel5.cloudtype.app/read/diaries",
  data: {
    "id": 1,
    "date": "2023-11-08",
    "iconUrl": "111",
    "contents": "첫 번째",
    "resultUrl": "111"
  },
}); */

function All() {
  let navigate = useNavigate();

  const [diaries, setDiaries] = useState([]);

  /* login으로 state넘기기 */
  const handleDiaryClick = (diary) => {
    navigate("/login", { state: diary });
  };

  //전체 일기 조회
  axios
    .get(
      "https://port-0-doran-be-7lk2bloprzyfi.sel5.cloudtype.app/read/diaries",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    //응답 성공
    .then((response) => {
      setDiaries(response.data);
    })
    //응답 실패
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="container">
      <Header />
      <div className="all-page">
        {/* 모아보기 */}
        {diaries.map((diary) => (
          <div
            key={diary.id}
            className="all-content"
            onClick={() => handleDiaryClick(diary)}
          >
            <div className="whitebox">
              <div className="Emogi">
                <img src={diary.iconUrl} alt="Emogi" />
              </div>
              {/*               <div className="delectimg">
                <img src="./img/group55.png" alt="delectimg"
                style={{ width: '20px', height: 'auto'}}/>
              </div> */}
              <div className="dateinfo">
                <p>
                  <span className="bold">{diary.date}</span>
                </p>
              </div>
              <div className="text">{diary.contents}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default All;
