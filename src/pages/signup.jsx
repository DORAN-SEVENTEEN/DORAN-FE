import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">회원가입</div>

      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        회원가입완료
      </button>

    </div>
  );
}

export default Signup;
