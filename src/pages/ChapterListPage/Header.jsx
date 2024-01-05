import "./Header.scss";
import logo from "../../assets/Icon/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-section">
      <Link to="/">
        <button className="logo-section">
          <img src={logo} alt="로고 이미지" className="logo-img" />
          <span className="logo-text">이.안?</span>
        </button>
      </Link>
    </div>
  );
}

export default Header;
