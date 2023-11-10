import { useState } from "react";
import { CallGPT } from "../api/gpt";
import DiaryInput from "../components/DiaryInput";
import DiaryDisplay from "../components/DiaryDisplay";
import { message } from "antd";
import "../stylesheet/result.css";
import "../App.css";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import axios from "axios";

const dummyData = JSON.parse(
  `{ "title": "도란도란과 함께라면 걱정 없어", "thumbnail": "https://source.unsplash.com/1600x900/?coding", 
  "summary": "내 일상 속 문제를 해결하고 내 마음을 털어놓을 수 있는 도란도란 ", 
  "emotional_content": "오늘 코딩 강의를 들었는데, 프로젝트에 버그가 많이 나왔어. 스택오버플로에서 검색해봤지만 해결되지 않았어. 그래서 결국 GPT를 통해서 문제를 해결하게 되었어. 하지만 이렇게 해결하는 것이 내 개발 실력에 도움이 될까 고민이 되는군.", 
  "emotional_result": "이번 상황을 통해 내가 프로그래밍에 대해 더 배울 필요가 있음을 느꼈다. 버그를 해결하는 데에만 의존하는 것보다 개념적으로 이해하고 해결하는 것이 더 중요하다는 것을 깨달았다.", 
  "analysis": "이번 상황은 개발자로서 성장하는 과정에서 마주치는 문제였다. 알고리즘과 문제 해결 능력은 중요하지만, 개념적인 이해와 전체적인 시스템 구조 파악이 더 중요하다는 것을 알 수 있었다. '지식은 힘이다'라는 명언을 생각해보면, 기술적인 도움을 받는 것도 중요하지만 개념적인 이해와 학습은 더 큰 힘이 될 것이다.",
  "action_list": ["더 깊은 개념적 이해를 위해 관련 서적을 읽어보기", "다른 개발자들과 소통하여 문제 해결 방법 나누기", "개발자 커뮤니티에 참여하여 지식을 공유하기"] }`
);

function Result() {
  const [data, setData] = useState(dummyData);
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const location = useLocation();
  const [result, setResult] = useState(""); //결과 사진 url 저장
  const id = location.state.id; //아이콘 id 값
  const contents = location.state.contents; //아이콘 일기 들어갈 값
  console.log(id);
  console.log(contents);
  // const datas = {
  //   id: id,
  //   result: result,
  // };

  // 결과 사진 저장
  const captureAndDownload = async () => {
    const nodeToCapture = document.getElementById("capture");

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

      saveResult(image);
      console.log(image);
    });
  };

  const saveResult = (image) => {
    // 결과 저장
    const params = {
      id: id,
      resultUrl: image,
    };
    axios
      .put(
        "https://port-0-doran-be-7lk2bloprzyfi.sel5.cloudtype.app/update/result",
        JSON.stringify(params),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        console.log(params.resultUrl);
        console.log(JSON.stringify(params));
        console.log("결과 성공");
      });
  };
  const handleClickAPICall = async (userInput) => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `${userInput}`,
      });
      setData(JSON.parse(message));
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error?.message,
      });
      return;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (userInput) => {
    handleClickAPICall(userInput);
  };

  return (
    <div className="container">
      {contextHolder}

      <DiaryInput
        messageApi={messageApi}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        id={id}
        contents={contents}
      />

      <div id="capture">
        <DiaryDisplay isLoading={isLoading} data={data} />
      </div>
      <button className="result-btn" onClick={captureAndDownload}>
        결과 저장하기
      </button>
    </div>
  );
}

export default Result;
