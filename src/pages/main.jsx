import "../stylesheet/main.css";
import { useNavigate } from "react-router-dom";

function Main() {
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="main-page">
        <div className="main-box">
          <div className="logo">
            <img src="" alt="logo"/>
          </div>
          <div className="sub-title">
            GPT와의 고민상담</div>
          <div className="title">
            '도란도란'
          </div>
            <button className="btn10"
            onClick={() => {
              navigate("/calender");
            }}
          >
            캘린더로 가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;