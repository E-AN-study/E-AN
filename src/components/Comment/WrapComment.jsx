import { useState } from "react";

import { Comment } from "./Comment";

import classNames from "classnames/bind";
import styles from "./WrapComment.module.scss";

const cx = classNames.bind(styles);

export function WrapComment(commentData) {
  const [input, setInput] = useState("");
  const [comment, setComment] = useState(commentData.commentData);
  const [visibleCount, setVisibleCount] = useState(3);

  const addComment = () => {
    if (input !== "") {
      const lastCmtIndex = comment.length - 1;
      const addedCmtId = comment[lastCmtIndex].id + 1;
      const newComment = {
        id: addedCmtId,
        content: input,
      };
      setComment([...comment, newComment]);
      setInput("");
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // 보이는 댓글 수 3개씩 증가
  };

  const reversedComment = [...comment].reverse();

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      addComment();
    }
  };

  return (
    <>
      <ul className={cx("commentList")}>
        {reversedComment.slice(0, visibleCount).map((item) => {
          return (
            <li className={cx("commentList-content")} key={item.id}>
              <Comment>{item.content}</Comment>
            </li>
          );
        })}
        {visibleCount < reversedComment.length && (
          <button onClick={handleLoadMore}>더보기</button>
        )}
      </ul>
      <div className={cx("inputBox")}>
        <input
          className={cx("inputBox-input")}
          type="text"
          placeholder="댓글을 입력해주세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />

        <button
          className={cx("inputBox-button")}
          type="submit"
          disabled=""
          onClick={addComment}
        >
          댓글 작성
        </button>
      </div>
    </>
  );
}
