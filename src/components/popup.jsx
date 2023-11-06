import "../stylesheet/popup.css";
// eslint-disable-next-line react/prop-types
function Popup({ onClose }){
    return (
        <div className="modal-overlay">
          <div className="modal-content">
          <button className="modal-button" onClick={onClose}>
              X
            </button>
            <div className="modal-text-div">
              <button><img src="" alt="사진"/></button>
              <button><img src="" alt="사진"/></button>
              <button><img src="" alt="사진"/></button>
              <button><img src="" alt="사진"/></button>
              <button><img src="" alt="사진"/></button>
              <button><img src="" alt="사진"/></button>
              <button><img src="" alt="사진"/></button>
              <button><img src="" alt="사진"/></button>
              <button><img src="" alt="사진"/></button>
              

            </div>
    
           
       
          
          </div>
        </div>
      );
}

export default Popup;
