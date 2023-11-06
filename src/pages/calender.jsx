import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Calendar from 'react-calendar';
import "../stylesheet/calender.css";
import 'react-calendar/dist/Calendar.css';


function Calender() {
  let navigate = useNavigate();

  const [date, setDate] = useState(new Date());

  return (
    <div className="container">
      <button
        onClick={() => {
          navigate("/all");
        }}
      >
        모아보기로 가는 버튼
      </button>

      {/* 달력 */}
      <div className='calendar'>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
          <span className='bold'></span>{' '}
          {date.toDateString()}
        </p>
      </div>
      {/* 기록하기 이동하기 */}
      <button className="btn10"
          onClick={() => {
            navigate("/diary");
          }}
        >
          오늘 하루 
        </button>
    </div>
  );
}

export default Calender;