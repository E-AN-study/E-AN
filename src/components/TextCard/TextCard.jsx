import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./TextCard.module.scss";
import { WrapComment } from "../Comment/WrapComment";
import { formatDate } from "../../utils/time";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/sample.png";
import deleted from "../../assets/deleted.svg";
import pencil from "../../assets/pencil.png";
import likeButton from "../../assets/thumbs-up.svg";
import { createClient } from "@supabase/supabase-js";
import { useNavigate, useParams } from "react-router";

const cx = classNames.bind(styles);

const deletePwd = import.meta.env.VITE_APP_PWD;
const supabaseUrl = import.meta.env.VITE_APP_KEY;
const supabaseKey = import.meta.env.VITE_APP_SECRET_CODE;
const supabase = createClient(supabaseUrl, supabaseKey);
// const [usersData, setUsersData] = useState([]);

function TextCard(data) {
  const [openComment, setOpenComment] = useState(false);
  const [like, setLike] = useState(data.data.likes ? data.data.likes : 0);
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();

  const { index } = useParams();

  async function addLike(ids, likes) {
    const basePath = window.location.pathname === "/qs" ? "eanqs" : `ean${index}`;
    let { data, error } = await supabase
      .from(basePath)
      .update([{ likes: likes }])
      .eq("id", ids);
    if (error) console.log("Error", error);
    else return data;
  }

  const handleRouteEdit = () => {
    const pwd = prompt("게시글을 수정하시려면 입력해주세요.");
    if (pwd === deletePwd) {
      navigate(`/textList/${index}/edit/${data.data.id}`);
    } else {
      alert("비밀번호를 잘못 입력하셨습니다.");
    }
  };

  const handleLikeButtonClick = () => {
    const likes = like + 1;
    setLike(likes);
    addLike(data.data.id, likes);
  };
  //사용자 데이터 삭제하는 함수
  const deleteUser = async (userId) => {
    try {
      // 삭제 작업 수행
      const { error } = await supabase.from(`ean${index}`).delete().eq("id", userId);
      if (error) {
        console.error("사용자 데이터 삭제 중 오류 발생:", error);
        return;
      }

      // 성공적으로 삭제되면 삭제된 사용자를 필터링하여 usersData 상태를 업데이트
      data.setUsersData((prevUsersData) => prevUsersData.filter((userData) => userData.id !== userId));

      console.log("사용자 데이터가 성공적으로 삭제되었습니다");
    } catch (error) {
      console.error("사용자 데이터 삭제 중 오류 발생:", error);
    }
  };
  const handleComment = () => {
    setOpenComment((prevState) => !prevState);
  };
  const deleteClick = () => {
    const pwd = prompt("비밀번호를 입력해주세요.");
    if (pwd === deletePwd) {
      deleteUser(data.data.id);
    } else {
      alert("비밀번호가 틀려 삭제할 수 없습니다.");
    }
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
              <button className={cx("editer")} onClick={handleRouteEdit}>
                <img className={cx("editer-img")} src={pencil} alt="수정하기" />
              </button>
            </div>
            {data.data.link !== null ? (
              <a href={data.data.link}>
                <p className={cx("contentLink")} dangerouslySetInnerHTML={{ __html: data.data.qs }}></p>
              </a>
            ) : (
              <p className={cx("content")} dangerouslySetInnerHTML={{ __html: data.data.qs }}></p>
            )}
          </div>

          {data.is === "delete" && (
            <div className={cx("deleteBtn")} onClick={deleteClick}>
              <img src={deleted} alt="삭제버튼" />
            </div>
          )}
        </div>
        <div className={cx("commetWrapper")}>
          <img className={cx("likeButton")} src={likeButton} alt="thumbs-up image" onClick={handleLikeButtonClick} />

          <div className={cx("comment")}>좋아요 {like}</div>
          <button className={cx("comment")} onClick={handleComment}>
            {openComment ? "닫기" : `댓글 ${data.data.comment.length}`}
          </button>
        </div>
      </div>
      {openComment && <WrapComment commentData={data.data.comment} datas={data} />}
    </>
  );
}

export default TextCard;
