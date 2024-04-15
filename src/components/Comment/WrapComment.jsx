import { useState } from "react";

import { Comment } from "./Comment";

import classNames from "classnames/bind";
import styles from "./WrapComment.module.scss";
import { createClient } from "@supabase/supabase-js";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

const cx = classNames.bind(styles);

const supabaseUrl = import.meta.env.VITE_APP_KEY;
const supabaseKey = import.meta.env.VITE_APP_SECRET_CODE;
const supabase = createClient(supabaseUrl, supabaseKey);

export function WrapComment({ commentData, datas }) {
  const [input, setInput] = useState("");
  const [comment, setComment] = useState(commentData);
  const [visibleCount, setVisibleCount] = useState(3);
  const { index } = useParams();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newComments = [...comment, { id: commentData.length, content: data.addComment }];
    setComment(newComments);
    updateComment(index, newComments, datas.data.id);
    setInput("");
  };

  async function updateComment(index, text, id) {
    console.log(index, text, id);
    const { data, error } = await supabase.from(`ean${index}`).update({ comment: text }).match({ id: id });
    console.log(error);
  }

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const reversedComment = [...comment].reverse();

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
        {visibleCount < reversedComment.length && <button onClick={handleLoadMore}>더보기</button>}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)} className={cx("inputBox")}>
        <input
          {...register("addComment")}
          className={cx("inputBox-input")}
          type="text"
          placeholder="댓글을 입력해주세요"
          defaultValue={input}
          // onChange={(e) => setInput(e.target.value)}
          // onKeyDown={onKeyDown}
        />

        <button className={cx("inputBox-button")} type="submit">
          댓글 작성
        </button>
      </form>
    </>
  );
}
