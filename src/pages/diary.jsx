import { useState } from "react";
import "../stylesheet/diary.css";
import Popup from "../components/popup";
import Header from "../components/header";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
function Diary() {
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const date = new Date(location.state.date); //사용자가 선택한 날짜
  const formattedDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  return (
    <div className="container">
      <div className="btn-container">
        <Header />
        <p>{formattedDate}</p>
        <div>
          <button
            className="btn1"
            onClick={() => {
              setModal(!modal);
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "10px" }}>고민상담 부탁해</span>
              <img
                src="./img/search.png"
                alt="사진"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </button>
        </div>
        <div className="speech-container">
          <img src="./img/speechbubble.png" className="speech" />
          <br />
          <img src="./img/mainlogo.png" className="mainlogoImg" />
        </div>
      </div>
      {modal && <Popup onClose={() => setModal(false)} />}
      <Footer />
    </div>
  );
}

export default Diary;
