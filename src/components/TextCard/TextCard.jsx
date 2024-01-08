import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TextCard.module.scss";
import { WrapComment } from "../Comment/WrapComment";
import profileImg from "../../assets/sample.png";
import likeButton from "../../assets/thumbs-up.svg";

const cx = classNames.bind(styles);

function TextCard() {
  const [openComment, setOpenComment] = useState(false);

  const handleComment = () => {
    setOpenComment((prevState) => !prevState);
  };

  return (
    <>
      <div className={cx("container")}>
        <div className={cx("profileWrapper")}>
          <img
            className={cx("profileImg")}
            src={profileImg}
            alt="profile image"
          />
          <div>
            <div className={cx("wrapper")}>
              <div className={cx("prfileName")}>이준기</div>
              <div className={cx("profileDate")}>1분전</div>
            </div>
            <p className={cx("content")}>cpu가 뭐지</p>
          </div>
        </div>
        <div className={cx("commetWrapper")}>
          <img
            className={cx("likeButton")}
            src={likeButton}
            alt="thumbs-up image"
            // onClick={handleLikeButtonClick}
          />
          <div className={cx("comment")}>좋아요 112</div>
          <button className={cx("comment")} onClick={handleComment}>
            {openComment ? "닫기" : "댓글 2"}
          </button>
        </div>
      </div>
      {openComment && <WrapComment />}
    </>
  );
}

export default TextCard;
