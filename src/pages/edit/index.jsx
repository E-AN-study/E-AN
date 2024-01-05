import styles from "./edit.module.scss";
import classNames from "classnames/bind";
import editIcon from "../../assets/Messages.svg";

const cx = classNames.bind(styles);

export default function Edit() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("editInner")}>
        <div className={cx("editTitle")}>
          <h1>
            <img src={editIcon} className={cx("editIcon")} alt="edit아이콘" />
            공부를 하세요
          </h1>
          <p>X</p>
        </div>
        <form className={cx("editForm")}>
          <div>
            <label htmlFor="editName">내 이름</label>
            <input
              type="text"
              id="editName"
              className={cx("editInput", "editName")}
              placeholder="이름을 입력해주세요"
            />
          </div>

          <div>
            <label htmlFor="editUrl">내 공부 기록</label>
            <input type="text" id="editUrl" className={cx("editInput", "editUrl")} placeholder="링크를 입력해주세요" />
          </div>

          <div>
            <label htmlFor="">이거 모르겠어...</label>
            <textarea id="editQs" className={cx("editInput", "editQs")} placeholder="질문을 입력해주세요" />
          </div>

          <button type="submit" className={cx("editButton")}>
            글 작성하기
          </button>
        </form>
      </div>
    </div>
  );
}
