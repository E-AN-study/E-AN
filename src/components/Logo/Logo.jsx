import styles from "./Logo.module.scss";
import classNames from "classnames/bind";
import LightImg from "../../assets/images/light-img.png";
import LogoImg from "../../assets/images/E-AN-logo.png";
const cx = classNames.bind(styles);
export function Logo() {
  return (
    <>
      <div className={cx("logo-images")}>
        <img src={LightImg} alt="Light Image" />
        <img src={LogoImg} alt="Logo Image" />
      </div>
    </>
  );
}
