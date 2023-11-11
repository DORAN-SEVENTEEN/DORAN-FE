import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet/all.css";
import Header from "../components/header";
import Calendar from "react-calendar";
import axios from "axios";

function All() {
  let navigate = useNavigate();

  const [diaries, setDiaries] = useState([]);

  // "/login"으로 state전송
  const handleDiaryClick = (diary) => {
    navigate("/login", { state: diary });
  };

  //일기 delete
  const handleDiaryDelete = (id) => {
    const con_check = window.confirm("삭제하시겠습니까?");
    if (con_check) {
      axios
        .delete(
          `https://port-0-doran-be-7lk2bloprzyfi.sel5.cloudtype.app/delete/diary?id=${id}`
        )
        .then((response) => {
          if (response.status === 200) {
            // 삭제 성공한 경우
            // 삭제된 일기를 상태에서 제거하기
            setDiaries((Diaries) => Diaries.filter((diary) => diary.id !== id));
            alert("일기가 삭제되었습니다!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //일기get
  useEffect(() => {
    axios
      .get(
        "https://port-0-doran-be-7lk2bloprzyfi.sel5.cloudtype.app/read/diaries",
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
  }, []);

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
              {/* 일기삭제 */}
              <div className="deleteimg">
                <img
                  src="./img/group55.png"
                  alt="deleteimg"
                  style={{ width: "30px", height: "auto", marginTop: "20px" }}
                  onClick={(e) => {
                    console.log("Delete button clicked");
                    e.stopPropagation(); // 이벤트 버블링 방지
                    handleDiaryDelete(diary.id);
                  }}
                />
              </div>

              <div className="Emogi">
                <img src={diary.iconUrl} alt="Emogi"
                style={{ width: "60px", height: "50px", marginTop:"-5px"}} />
              </div>
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
