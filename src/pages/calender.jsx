import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";
import "../stylesheet/calender.css";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import dayjs from "dayjs";
import Header from "../components/header";
import Footer from "../components/footer";

function Calender() {
  let navigate = useNavigate();

  const [date, setDate] = useState(new Date());
  const [selectedDateString, setSelectedDateString] = useState(
    date.toDateString()
  );

  const [diaries, setDiaries] = useState([]);

  /* login으로 state넘기기 */
  const handleDiaryClick = (diary) => {
    navigate("/login", { state: diary });
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    const date = dayjs(newDate).format("YYYY-MM-DD");
    /* 선택한 날의 일기 조회 */
    axios
      .get(
        `https://port-0-doran-be-7lk2bloprzyfi.sel5.cloudtype.app/read/diaries-day?date=${date}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setDiaries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Header />
        <div
          className="next-all"
          onClick={() => {
            navigate("/all");
          }}
        >
          <img
            src="./img/bookmark.png"
            alt="모아보기로이동"
            style={{ marginLeft: "30px", marginTop: "-23px", width: "48px" }}
          />
        </div>
      </div>

      <div className="calender-page">
        {/* 달력 */}
        {/*         <p className="text-center">
          <span className="bold"></span> {selectedDateString}
        </p> */}
        <div className="calendar">
          <div className="calendar-container">
            <Calendar
              onChange={handleDateChange}
              value={date}
              formatDay={(locale, date) => dayjs(date).format("DD")}
            />
          </div>
        </div>
        {/* 기록하기 이동하기 */}
        <button
          className="btn10"
          onClick={() => {
            navigate("/diary", {
              state: { date: date }, // 날짜 정보를 state로 전달
            });
          }}
        >
          오늘 하루 고민을 기록해보아요!
        </button>

        {/* 날짜 선택하면 일기조회 */}
        <div className="all-page2">
          {diaries.map((diary) => (
            <div
              key={diary.id}
              className="all-content"
              onClick={() => handleDiaryClick(diary)}
            >
              <div className="whitebox">
                <div className="Emogi">
                  <img src={diary.iconUrl} alt="Emogi" 
                   style={{ width: "60px", height: "50px", marginTop:"-5px"}}/>
                </div>
                <div className="dateinfo">
                  <p>
                    <span className="bold">{diary.date}</span>{" "}
                  </p>
                </div>
                <div className="text">{diary.contents}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Calender;
