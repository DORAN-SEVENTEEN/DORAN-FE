import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Calendar from 'react-calendar';
import "../stylesheet/calender.css";
import 'react-calendar/dist/Calendar.css';

import dayjs from 'dayjs';



function Calender() {
  let navigate = useNavigate();

  const [date, setDate] = useState(new Date());

  return (
    <div className="container">
        <div className="next-all"
          onClick={() => {
            navigate("/all");
          }}
        >
          <img src="./img/bookmark.png" alt="모아보기로이동"/>
        </div>
      
        <div className="calender-page">
        {/* 달력 */}
        <p className='text-center'>
            <span className='bold'></span>{' '}
            {date.toDateString()}
          </p>
        <div className='calendar'>
          <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} 
            formatDay ={(locale, date) => dayjs(date).format('DD')}/>
          </div>
        </div>
        {/* 기록하기 이동하기 */}
        <button className="btn10"
            onClick={() => {
              navigate("/diary");
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