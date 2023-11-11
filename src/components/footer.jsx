import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillCalendarHeartFill } from "react-icons/bs";
import { BsEnvelopePaperHeartFill } from "react-icons/bs";
import "../stylesheet/footer.css";

function Footer() {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isCalendarHovered, setIsCalendarHovered] = useState(false);
  const [isDiaryHovered, setIsDiaryHovered] = useState(false);
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "white",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    flex: "100",
    width: "120px",
  };

  const hoveredStyle = {
    color: "#FF968A",
  };

  const footerStyle = {
    marginTop: "200px",
    display: "flex",
    padding: "12px 0px",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="footer" style={footerStyle}>
      <div className="footer-map">
        <button
          style={{ ...buttonStyle, ...(isHomeHovered && hoveredStyle) }}
          onClick={() => navigate("/")}
          onMouseEnter={() => setIsHomeHovered(true)}
          onMouseLeave={() => setIsHomeHovered(false)}
        >
          <FaHome className="icon1" />
          <p className="footer-text1">홈</p>
        </button>
      </div>
      <div className="footer-mapflag">
        <button
          style={{ ...buttonStyle, ...(isCalendarHovered && hoveredStyle) }}
          onClick={() => navigate("/calender")}
          onMouseEnter={() => setIsCalendarHovered(true)}
          onMouseLeave={() => setIsCalendarHovered(false)}
        >
          <BsFillCalendarHeartFill className="icon2" />
          <p className="footer-text2">캘린더</p>
        </button>
      </div>
    </div>
  );
}

export default Footer;
