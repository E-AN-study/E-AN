import styles from "./MainLogo.module.scss";
import classNames from "classnames/bind";
import LogoImg from "../../assets/Icon/logo.png";
import LogoTextImg from "../../assets/Icon/logoText.png";

const cx = classNames.bind(styles);

function MainLogo() {
  return (
    <div className={cx("MainLogo")}>
      <img className={cx('MainLogo-logoIcon')} src={LogoImg} alt="로고전구아이콘" />
      <img className={cx('MainLogo-logoText')} src={LogoTextImg} alt="로고이안텍스트" />
    </div>
  );
}

export default MainLogo