import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ text, onClick }) {
  // const handleButtonClick = ;

  return (
    <>
      <button className={cx("btn")} /*onClick={handleButtonClick}*/>
        <span>{text}</span>
      </button>
    </>
  );
}

export default Button;
