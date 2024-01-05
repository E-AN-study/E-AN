import styles from "./SortButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SortButton() {
  return (
    <div className={cx("sortButtonContainer")}>
      <div className={cx("sortButtonContainer-Wrapper")}>
        <button className={cx("sortButton")}>
          <p>글 목록</p>
        </button>
      </div>
      <div className={cx("sortButtonContainer-Wrapper")}>
        <button className={cx("sortButton")}>
          <p>공부 질문</p>
        </button>
      </div>
      <div className={cx("sortButtonContainer-Wrapper")}>
        <button className={cx("sortButton")}>
          <p>개발 자료</p>
        </button>
      </div>
    </div>
  );
}

export default SortButton;
