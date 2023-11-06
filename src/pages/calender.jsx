import { useNavigate } from "react-router-dom";

function Calender() {
  let navigate = useNavigate();

  return (
    <div className="container">
      <button
        onClick={() => {
          navigate("/all");
        }}
      >
        모아보기로 가는 버튼
      </button>
      <div className="header">Nov 2023</div>
      <button
        onClick={() => {
          navigate("/diary");
        }}
      >
        일기 입력 페이지로 가는 버튼
      </button>
    </div>
  );
}

export default Calender;
