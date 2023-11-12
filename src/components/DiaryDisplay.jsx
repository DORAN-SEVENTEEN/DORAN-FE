/* eslint-disable no-undef */

/* eslint-disable react/prop-types */
import {
  DiaryContainer,
  ResultTitle,
  Divider,
  CardContainer,
  CardTitle,
  CardContent,
  ActionListItem,
} from "./CommonStyles";

import {
  LoadingOutlined
} from "@ant-design/icons";
import { Image } from "antd";
import styled from "styled-components";

const ThumbnailImage = styled(Image)`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`;


// eslint-disable-next-line react/prop-types

const DiaryDisplay = ({ data, isLoading }) => {
  return (
    <DiaryContainer>
      {isLoading && (
        <>
          분석중...
          <LoadingOutlined />
        </>
      )}
     
      <ResultTitle>{data.title}</ResultTitle>

      <Divider />
      <CardContainer>
      <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
         <img src="./img/icon4.png" alt="사진"
         style={{height:'40px', width: '40px', marginRight: '20px'
         ,marginLeft: '25px'}}/>
          내가 느낀 감정
        </CardTitle>
        <CardContent>{data.summary}</CardContent>
      </CardContainer>

      <ThumbnailImage src={data.thumbnail} alt="Thumbnail" />

      <Divider />
      <CardContainer>
      <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
        <img src="./img/icon1.png" alt="사진"
                   style={{height:'40px', width: '40px', marginRight: '20px',
                   marginLeft: '30px'}}/>
      
          앞으로의 목표 설정
        </CardTitle>
        <CardContent>{data.emotional_content}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
      <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
        <img src="./img/icon5.png" alt="사진"
                   style={{height:'40px', width: '40px', marginRight: '20px'
                   ,marginLeft: '20px'}}/>

          자기개발 추천
        </CardTitle>
        <CardContent>{data.emotional_result}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
      <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
        <img src="./img/icon3.png" alt="사진"
                   style={{height:'40px', width: '40px', marginRight: '20px'
                   ,marginLeft: '40px'}}/>


        일기 분석
        </CardTitle>
        <CardContent>{data.analysis}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
      <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
        <img src="./img/icon2.png" alt="사진"
                   style={{height:'40px', width: '40px', marginRight: '20px'
                   ,marginLeft: '15px'}}/>

        타인의 해결책 
        </CardTitle>
        <CardContent>
          {data.action_list.map((action, index) => (
            <ActionListItem key={index}>{action}</ActionListItem>
          ))}
        </CardContent>
      </CardContainer>

      {/* 넣기 */}
      <CardContainer>
        <CardTitle style={{ display: "flex", alignItems: "center" }}>
          <img
            src="./img/icon6.png"
            alt="사진"
            style={{
              height: "40px",
              width: "40px",
              marginRight: "20px",
              marginLeft: "55px",
            }}
          />
          서적 추천
        </CardTitle>
        <CardContent>{data.book_recommendation}</CardContent>
      </CardContainer>
      <CardContainer>
        <CardTitle style={{ display: "flex", alignItems: "center" }}>
          <img
            src="./img/icon6.png"
            alt="사진"
            style={{
              height: "40px",
              width: "40px",
              marginRight: "20px",
              marginLeft: "55px",
            }}
          />
          노래 추천
        </CardTitle>
        <CardContent>{data.song_recommendation}</CardContent>
      </CardContainer>
      <CardContainer>
        <CardTitle style={{ display: "flex", alignItems: "center" }}>
          <img
            src="./img/icon7.png"
            alt="사진"
            style={{
              height: "40px",
              width: "40px",
              marginRight: "20px",
              marginLeft: "30px",
            }}
          />
          위로와 응원 한마디
        </CardTitle>
        <CardContent>{data.consolation_and_support}</CardContent>
      </CardContainer>

    </DiaryContainer>
  );
};

export default DiaryDisplay;
