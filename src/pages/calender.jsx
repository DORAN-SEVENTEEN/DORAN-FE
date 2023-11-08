import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Calendar from 'react-calendar';
import "../stylesheet/calender.css";
import 'react-calendar/dist/Calendar.css';

import dayjs from 'dayjs';
import Header from "../components/header";

function Calender() {
  let navigate = useNavigate();

  const [date, setDate] = useState(new Date());
  const [selectedDateString, setSelectedDateString] = useState(date.toDateString()); // 선택된 날짜 문자열 상태

  // 달력에서 날짜가 변경될 때 호출되는 함수
  const handleDateChange = (newDate) => {
    setDate(newDate); // 선택된 날짜를 업데이트
    setSelectedDateString(newDate.toDateString()); // 선택된 날짜 문자열을 업데이트
  }
console.log(selectedDateString);
  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: 'center'}}>
      <Header/>
        <div className="next-all"
          onClick={() => {
            navigate("/all");
          }}
        >
          <img src="./img/bookmark.png" alt="모아보기로이동" style={{marginLeft: "45px", marginTop: "-18px", width: "48px"
          }}/>
        </div>
      </div>
     
      <div className="calender-page">
        {/* 달력 */}
        <p className='text-center'>
            <span className='bold'></span>{' '}
            {selectedDateString}
        </p>
        <div className='calendar'>
          <div className='calendar-container'>
            <Calendar onChange={handleDateChange} value={date} 
            formatDay={(locale, date) => dayjs(date).format('DD')} />
          </div>
        </div>
        {/* 기록하기 이동하기 */}
        <button className="btn10"
            onClick={() => {
              navigate("/diary", {
                state: { date: selectedDateString } // 날짜 정보를 state로 전달
              });
            }}
          >
            오늘 하루 고민을 기록해보아요!
        </button>
        <div className="all-content">
          <div className="whitebox">
            <div className="Emogi">emogi</div>
            <div className="dateinfo">
            Wednesday, November 6, 2023
            </div>
            <div className="text">도란도란</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
