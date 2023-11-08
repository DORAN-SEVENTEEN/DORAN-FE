// import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import "../stylesheet/all.css";
import Header from "../components/header";

function All() {

  let navigate = useNavigate();

/*   const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  console.log('Data state:', data);

  const handleNewsletterClick = (index, item) => {
    navigate('/결과도출', {state: {dataIndex: index, dataItem: item}});
  }; */
  
  return (
    <div className="container">
      <Header/>
      

      <div className='all-page'>
       {/* 고민상담 모아보기 */}
        <div className="all-content">
          <div className="whitebox">
            <div className="Emogi">emogi</div>
            <div className="dateinfo">
            Wednesday, November 6, 2023
            </div>
            <div className="text">도란도란</div>
          </div>
        </div>

        <div className="all-content">
          <div className="whitebox">
            <div className="Emogi"></div>
            <div className="dateinfo">
            Wednesday, November 6, 2023
            </div>
            <div className="text">도란도란</div>
          </div>
        </div>

        <div className="all-content">
          <div className="whitebox">
            <div className="Emogi"></div>
            <div className="dateinfo">
            Wednesday, November 6, 2023
            </div>
            <div className="text">도란도란</div>
          </div>
        </div>

        <div className="all-content">
          <div className="whitebox">
            <div className="Emogi"></div>
            <div className="dateinfo">
            Wednesday, November 6, 2023
            </div>
            <div className="text">도란도란</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;