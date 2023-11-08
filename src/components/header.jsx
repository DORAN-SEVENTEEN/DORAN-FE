/* eslint-disable react/no-unescaped-entities */
import "../stylesheet/header.css";
import { useNavigate } from "react-router-dom";

function Header(){
const navigate = useNavigate();
    return(
        < >
<div className="header-container">
<img   className="backImg"
src="./img/back.png" alt="사진" onClick={()=>{
    navigate(-1);
}}/>
<p className="logo">'도란도란'</p>
</div>
   
        </>
    )
}
export default Header;