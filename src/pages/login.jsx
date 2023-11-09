import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Header from "../components/header";
import "../stylesheet/login.css";

function Login() {
  let navigate = useNavigate();

  const [date, setDate] = useState(new Date());

  return (
    <div className="container">
      <Header/>
    <div className="selectedresult">
      <div className="box1">
        <div className="dateinfo">
              <p>
            <span className='bold'></span>{' '}
            {/* 날짜 들어오면 없애기 */}
            {date.toDateString()}
              </p>
        </div>
        <div className="Emogi">
            </div>
          {/* 저장된 일기내용 */}
          <div className="box2">
            <div className="box2-text">
            저장된 일기
            </div>
          </div>
          {/* 결과도출 */}
          <div className="box3">
            <div className="box3-text">
            결과도출
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
