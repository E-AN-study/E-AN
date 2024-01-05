import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import LogoImg from "../../../../assets/Icon/logo.png";
import LogoTextImg from "../../../../assets/Icon/logoText.png";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("Header")}>
      <img className={cx("Header-logoIcon")} src={LogoImg} alt="로고이미지" />
      <img
        className={cx("Header-logoText")}
        src={LogoTextImg}
        alt="로고텍스트"
      />
    </div>
  );
}

export default Header;
