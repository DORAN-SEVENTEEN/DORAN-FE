/* eslint-disable react/prop-types */
import "../stylesheet/popup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Popup({ onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState(null); //아이콘
  const [contents, setContents] = useState(null); //내용
  const date = new Date(location.state.date);
  const formattedDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  const [id, setId] = useState(); //받아와지는 id 값
  let data = {
    iconUrl: selectedIcon,
    date: formattedDate,
    contents: contents,
  };
  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const handleIconPost = () => {
    if (selectedIcon === null || selectedIcon) {
      console.log(formattedDate);
      console.log(selectedIcon);
      console.log(contents);

      axios
        .post(
          "https://port-0-doran-be-7lk2bloprzyfi.sel5.cloudtype.app/create/icon",
          JSON.stringify(data),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          // 선택한 아이콘의 id와 contents
          navigate("/result", {
            state: { id: response.data, contents: contents },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-button" onClick={onClose}>
          X
        </button>
        <div className="modal-div">
          <button onClick={() => handleIconClick("./img/icon1.png")}>
            <img src="./img/icon1.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("./img/icon2.png")}>
            <img src="./img/icon2.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("./img/icon3.png")}>
            <img src="./img/icon3.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("./img/icon4.png")}>
            <img src="./img/icon4.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("./img/icon5.png")}>
            <img src="./img/icon5.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("./img/icon6.png")}>
            <img src="./img/icon6.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("./img/icon7.png")}>
            <img src="./img/icon7.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("./img/icon8.png")}>
            <img src="./img/icon8.png" alt="사진" />
          </button>
          <button onClick={() => handleIconClick("./img/icon9.png")}>
            <img src="./img/icon9.png" alt="사진" />
          </button>
          {/* <button className="x-btn" onClick={handleIconCancel}>선택 X</button> */}
        </div>
        <button className="post-btn" onClick={handleIconPost}>
          기분 선택 완료
        </button>
      </div>
    </div>
  );
}

export default Popup;
