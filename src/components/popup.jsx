import "../stylesheet/popup.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Popup({ onClose }){
  let navigate = useNavigate();

    return (
        <div className="modal-overlay">
          <div className="modal-content">
          <button className="modal-button" onClick={onClose}>
              X
            </button>
            <div className="modal-div">
              <button><img src="./img/icon1.png" alt="사진" onClick={()=>{navigate('/result')}}/></button>
              <button><img src="./img/icon2.png" alt="사진"  onClick={()=>{navigate('/result')}}/></button>
              <button><img src="./img/icon3.png" alt="사진"  onClick={()=>{navigate('/result')}}/></button>
              <button><img src="./img/icon4.png" alt="사진" onClick={()=>{navigate('/result')}}/></button>
              <button><img src="./img/icon5.png"alt="사진" onClick={()=>{navigate('/result')}}/></button>
              <button><img src="./img/icon6.png" alt="사진" onClick={()=>{navigate('/result')}}/></button>
              <button><img src="./img/icon7.png" alt="사진" onClick={()=>{navigate('/result')}}/></button>
              <button><img src="./img/icon8.png" alt="사진" onClick={()=>{navigate('/result')}}/></button>
              <button><img src="./img/icon9.png" alt="사진" onClick={()=>{navigate('/result')}}/></button>
              <button className="x-btn"onClick={()=>{navigate('/result')}} style={{border: '1px solid #fff', padding: '25px', width:'85px', borderRadius:'100px', fontSize:'14px', fontWeight:'700', background:'#fff', color: "#f1b1b0"}}>선택X</button>


            </div>
    
           
       
          
          </div>
        </div>
      );
}

export default Popup;
