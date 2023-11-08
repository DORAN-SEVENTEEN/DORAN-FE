import "../stylesheet/popup.css";

// eslint-disable-next-line react/prop-types
function Popup({ onClose }){
    return (
        <div className="modal-overlay">
          <div className="modal-content">
          <button className="modal-button" onClick={onClose}>
              X
            </button>
            <div className="modal-div">
              <button><img src="./img/icon1.png" alt="사진"/></button>
              <button><img src="./img/icon2.png" alt="사진"/></button>
              <button><img src="./img/icon3.png" alt="사진"/></button>
              <button><img src="./img/icon4.png" alt="사진"/></button>
              <button><img src="./img/icon5.png"alt="사진"/></button>
              <button><img src="./img/icon6.png" alt="사진"/></button>
              <button><img src="./img/icon7.png" alt="사진"/></button>
              <button><img src="./img/icon8.png" alt="사진"/></button>
              <button><img src="./img/icon9.png" alt="사진"/></button>
              <button>선택안함</button>


            </div>
    
           
       
          
          </div>
        </div>
      );
}

export default Popup;
