import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TextCard.module.scss";
import { WrapComment } from "../Comment/WrapComment";
import { formatDate } from "../../utils/time";
import profileImg from "../../assets/sample.png";
import likeButton from "../../assets/thumbs-up.svg";
import { formatDateYMD } from "../../utils/formatDateYMD";

const cx = classNames.bind(styles);

function TextCard(data) {
  const [openComment, setOpenComment] = useState(false);
  const [like, setLike] = useState(data.data.likes);
  const day = formatDateYMD(data.data.created_at);
  console.log(data);
  const handleLikeButtonClick = () => {
    setLike(like + 1);
  };
  const handleComment = () => {
    setOpenComment((prevState) => !prevState);
  };

  return (
    <>
      <div className={cx("container")}>
        <div className={cx("profileWrapper")}>
          <img className={cx("profileImg")} src={profileImg} alt="profile image" />
          <div>
            <div className={cx("wrapper")}>
              <div className={cx("prfileName")}>{data.data.name}</div>
              <div className={cx("profileDate")}>{formatDate(data.data.created_at)}</div>
            </div>
            <a href={data.data.link}>
              <p className={cx("content")} dangerouslySetInnerHTML={{ __html: data.data.qs }}></p>
            </a>
          </div>
        </div>
        <div className={cx("commetWrapper")}>
          <img className={cx("likeButton")} src={likeButton} alt="thumbs-up image" onClick={handleLikeButtonClick} />

          <div className={cx("comment")}>좋아요 {like}</div>
          <button className={cx("comment")} onClick={handleComment}>
            {openComment ? "닫기" : `댓글 ${data.data.comment.length}`}
          </button>
        </div>
      </div>
      {openComment && <WrapComment commentData={data.data.comment} />}
    </>
  );
}

export default TextCard;
