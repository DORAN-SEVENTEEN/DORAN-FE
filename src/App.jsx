import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Signup from "./pages/signup";
import Login from "./pages/login";
import All from "./pages/all";
import Calender from "./pages/calender";
import Result from "./pages/result";
import Popup from "./components/popup";
import Diary from "./pages/diary";

function App() {


  return (
   
    <Routes>
      <Route path="/" element={<Main />} /> {/*메인페이지*/}
      <Route path="/login" element={<Login />} /> {/*로그인페이지*/}
      <Route path="/signup" element={<Signup />} /> {/*회원가입페이지*/}
      <Route path="/calender" element={<Calender />} /> {/*캘린더페이지*/}
      <Route path="/all" element={<All />} /> {/*모아보기페이지*/}
      <Route path="/diary" element={<Diary/>} /> {/*버튼페이지*/}
      <Route path="/diary" element={<Popup/>} /> {/*기분선택팝업*/}
      <Route path="/result" element={<Result />} /> {/*결과도출페이지*/}
      <Route path="*" element={<div>없는 페이지</div>} />
    </Routes>

    
  );
}

export default App;

