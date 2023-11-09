import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">로그인</div>

      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입하러가기
      </button>
  
    </div>
  );
}

export default Login;
