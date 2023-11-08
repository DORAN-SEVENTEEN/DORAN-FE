/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Input, Button, message } from "antd";
import { useState } from "react";
import { Title } from "./CommonStyles";
import styled from "styled-components";
import { FileImageOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";
const { TextArea } = Input;
import Header from "../components/header";
import axios from "axios";

const DiaryInput = ({ isLoading, onSubmit, messageApi, id }) => {
  const [userInput, setUserInput] = useState("");


  // 사용자의 입력을 받아, 상위컴포넌트로 데이터를 전달

  // loading 상태 - 사용자가 제출버튼을 못 누르도록 처리
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleClick = () => {
    if (!userInput) {
      messageApi.open({
        type: "error",
        content: "일과를 적어주세요.",
      });
      return;
    }
    messageApi.open({
      type: "success",
      content: "생성 요청 완료",
    });

    onSubmit(userInput);
    setUserInput(null);
  };

  const captureAndDownload = async () => {
    const nodeToCapture = document.getElementById("capture");
    console.log(nodeToCapture);
    // HTML2Canvas를 사용하여 노드의 스크린샷을 생성합니다.
    html2canvas(nodeToCapture, {
      allowTaint: true,
      useCORS: true,
    }).then(function (canvas) {
      // 스크린샷을 이미지로 변환합니다.
      const image = canvas.toDataURL("image/png");

      // 이미지를 다운로드할 수 있는 링크를 생성합니다.
      const a = document.createElement("a");
      a.href = image;
      a.download = "gpt-diary-result.png";
      a.click();
    });

  };

//일기 저장
const saveDiary = () => {
  axios.put('http://localhost:3001/update/contents', {
    id :id,
    contents: userInput
  })
}

  return (
    <div>
      <Header/>
      <TextArea
        value={userInput}
        onChange={handleUserInput}
        placeholder="나의 고민이나 오늘 일어난 일을 이야기해주세요. 도란도란 나누어봐요"
        style={{ height: "200px",  border: "1px solid #f1b1b0",
                width: "80%"
    }}
      />
      <ButtonContainer>
        <Button loading={isLoading} onClick={handleClick}
         style={{background: "#f1b1b0", border:"none"}}>
          GPT 회고록을 작성해줘!
        </Button>
        <Button
        style={{background: "#f1b1b0", border:"none"}}
        onClick={()=>{
          saveDiary
        }}>
          일기 저장
        </Button>
       
      </ButtonContainer>
      <canvas id="canvas" style={{ display: "none" }}></canvas>
    </div>
  );
};

export default DiaryInput;

const ButtonContainer = styled.div`
  margin: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  gap: 5px;
`;
