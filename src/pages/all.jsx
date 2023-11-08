// import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "../stylesheet/all.css";
import Header from "../components/header";
import Calendar from 'react-calendar';
import axios from "axios";

/* axios({
  method: 'get',
  url: "http://3.39.75.2:8080//read/diaries",
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
  const [date, setDate] = useState(new Date());

  const [selectedicon, setselectedicon] = useState(null);
  const [diarycontents, setdiarycontents] = useState(null);
  
  //전체 일기 조회
  axios.get("http://3.39.75.2:8080//read/diaries-day", {
  })
  //응답 성공
  .then((response) =>{
    setselectedicon.log(response.data.iconUrl);
    setDate.log(response.data.date);
    setdiarycontents.log(response.data.contents);

  })
  //응답 실패
  .catch((error) => {
    console.log(error);
  })

  return (
    <div className="container">
      <Header/>
      
      <div className='all-page'>
       {/* 고민상담 모아보기 */}
        <div className="all-content">
          <div className="whitebox">
            <div className="Emogi">
            <img src={selectedicon && selectedicon.id === 1 ? selectedicon.iconUrl : ""} alt="Emogi" />
            </div>
            <div className="dateinfo">
              <p>
            <span className='bold'></span>{' '}
            {/* 날짜 들어오면 없애기 */}
            {date.toDateString()}
            {date && date.id === 1 ? date.date : ""}
              </p>
            </div>
            <div className="text">
            {diarycontents && diarycontents.id === 1 ? diarycontents.contents : ""}</div>
          </div>
        </div>

        <div className="all-content">
          <div className="whitebox">
            <div className="Emogi">
            <img src={selectedicon && selectedicon.id === 2 ? selectedicon.iconUrl : ""} alt="Emogi" />
            </div>
            <div className="dateinfo">
              <p>
            <span className='bold'></span>{' '}
              {/* 날짜 들어오면 없애기 */}
              {date.toDateString()}
            {date && date.id === 2 ? date.date : ""}
              </p>
            </div>
            <div className="text">
            {diarycontents && diarycontents.id === 2 ? diarycontents.contents : ""}</div>
          </div>
        </div>

        <div className="all-content">
          <div className="whitebox">
            <div className="Emogi">
            <img src={selectedicon && selectedicon.id === 3 ? selectedicon.iconUrl : ""} alt="Emogi" />
            </div>
            <div className="dateinfo">
              <p>
            <span className='bold'></span>{' '}
            {/* 날짜 들어오면 없애기 */}
            {date.toDateString()}
            {date && date.id === 3 ? date.date : ""}
              </p>
            </div>
            <div className="text">
            {diarycontents && diarycontents.id === 3 ? diarycontents.contents : ""}</div>
          </div>
        </div>

        <div className="all-content">
          <div className="whitebox">
            <div className="Emogi">
            <img src={selectedicon && selectedicon.id === 4 ? selectedicon.iconUrl : ""} alt="Emogi" />
            </div>
            <div className="dateinfo">
              <p>
            <span className='bold'></span>{' '}
             {/* 날짜 들어오면 없애기 */}
             {date.toDateString()}
            {date && date.id === 4 ? date.date : ""}
              </p>
            </div>
            <div className="text">
            {diarycontents && diarycontents.id === 4 ? diarycontents.contents : ""}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;