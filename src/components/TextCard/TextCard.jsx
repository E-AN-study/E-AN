import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./TextCard.module.scss";
import { WrapComment } from "../Comment/WrapComment";
import { formatDate } from "../../utils/time";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/sample.png";
import likeButton from "../../assets/thumbs-up.svg";
import { createClient } from "@supabase/supabase-js";
import { useParams } from "react-router";

const cx = classNames.bind(styles);

const supabaseUrl = import.meta.env.VITE_APP_KEY;
const supabaseKey = import.meta.env.VITE_APP_SECRET_CODE;
const supabase = createClient(supabaseUrl, supabaseKey);

function TextCard(data) {
  const [openComment, setOpenComment] = useState(false);
  const [like, setLike] = useState(data.data.likes ? data.data.likes : 0);
  const [profile, setProfile] = useState("");

  const { index } = useParams();

  async function addLike(ids, likes) {
    let { data, error } = await supabase
      .from(`ean${index}`)
      .update([{ likes: likes }])
      .eq("id", ids);
    if (error) console.log("Error", error);
    else return data;
  }

  const handleLikeButtonClick = () => {
    const likes = like + 1;
    setLike(likes);
    addLike(data.data.id, likes);
  };

  const handleComment = () => {
    setOpenComment((prevState) => !prevState);
  };

  useEffect(() => {
    if (data.data.profile === "profile1") {
      setProfile(profile1);
    } else if (data.data.profile === "profile2") {
      setProfile(profile2);
    } else if (data.data.profile === "profile3") {
      setProfile(profile3);
    } else {
      setProfile(profile1);
    }
  }, [data.data.profile]);

  return (
    <>
      <div className={cx("container")}>
        <div className={cx("profileWrapper")}>
          <img className={cx("profileImg")} src={profile} alt="profile image" />
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
