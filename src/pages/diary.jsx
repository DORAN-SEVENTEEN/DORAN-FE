import { useState } from "react";
import "../stylesheet/diary.css";
import Popup from "../components/popup";
import Header from "../components/header";

function Diary() {
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <div className="btn-container">
        <Header/>
        <p>날짜</p>
        <div>
        <button className="btn1" onClick={() => { setModal(!modal) }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '10px' }}>고민상담 부탁해</span>
    <img src="./img/search.png" alt="사진" style={{ width: '50px', height: '50px' }} />
  </div>
</button>

        </div>
       
      </div>
      {modal && <Popup onClose={() => setModal(false)} />}

    </div>
  );
}

export default Diary;
