
import { useNavigate } from "react-router-dom";

function Main() {
  let navigate = useNavigate();
  return (
    <div className="container">
      <div>도란도란</div>
      <button
        onClick={() => {
          navigate("/calender");
        }}
      >
        캘린더로 가기
      </button>
    </div>
  );
}

export default Main;
