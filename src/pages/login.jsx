import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Header from "../components/header";
import "../stylesheet/login.css";
import axios from "axios";

function Login() {
  let navigate = useNavigate();
  const location = useLocation();
  const diaryData = location.state;

  const [diary, setDiary] = useState({
    id: "",
    date: "",
    iconUrl: "",
    contents: "",
    resultUrl: " ",
  });

  const [resultUrl, setResultUrl] = useState("");
  console.log(diary.resultUrl);
  const box2Ref = useRef();
  const box3Ref = useRef();

  useEffect(() => {
    if (location.state && location.state.id) {
      const id = location.state.id;

      axios
        .get(
          `https://port-0-doran-be-7lk2bloprzyfi.sel5.cloudtype.app/read/diary/${id}`,
          { responseType: "arraybuffer" } // Specify the response type as 'arraybuffer'
        )
        .then((response) => {
          setDiary(response.data);
        })
        .catch((error) => {
          console.error("Error fetching diary:", error);
        });
    }
  }, [location.state]);

  /* box크기조정 */
  useEffect(() => {
    if (box2Ref.current) {
      box2Ref.current.style.height = `${box2Ref.current.scrollHeight}px`;
    }
  }, [box2Ref]);

  useEffect(() => {
    if (box3Ref.current) {
      box3Ref.current.style.height = `${box3Ref.current.scrollHeight}px`;
    }
  }, [box3Ref]);

  return (
    <div className="container">
      <Header />
      <div className="selectedresult">
        <div className="box1">
          <div className="dateinfo">
            <p>
              <span className="bold">{diary.date}</span>{" "}
            </p>
          </div>
          <div className="Emogi">
            <img src={diary.iconUrl} alt="Emogi" />
          </div>
          <div className="box2" ref={box2Ref}>
            <p className="box2-text">{diary.contents}</p>
          </div>
          <div className="box3" ref={box3Ref}>
            <p className="box3-text">
              <img
                src={"data:image/gif;base64," + diary.resultUrl}
                alt="Result"
                onError={(e) => console.error("Image load error:", e)}
                style={{ width: "300px" }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
