import styles from "./edit.module.scss";
import classNames from "classnames/bind";
import editIcon from "../../assets/Messages.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/sample.png";
import Question from "./Question";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_KEY;
const supabaseKey = import.meta.env.VITE_APP_SECRET_CODE;
const supabase = createClient(supabaseUrl, supabaseKey);

const cx = classNames.bind(styles);

export default function Update({ isEdit = false }) {
  const [question, setQuestion] = useState("");
  const [postData, setPostData] = useState({});
  const [profileImg, setProfileImg] = useState("");

  const parm = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (isEdit) {
        try {
          const { data, error } = await supabase.from(`ean${parm.index}`).select("*").eq("id", parm.id);
          if (error) {
            throw error;
          }

          const userData = data[0];
          setPostData({ name: userData.name, url: userData.link, profile: userData.profile });
          setQuestion(userData.qs);
          setProfileImg(userData.profile);
          console.log(userData);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      }
    };

    fetchData();
  }, [isEdit, parm.index, parm.id]);

  async function addUser(name, link, qs, profile, comment) {
    let { data, error } = await supabase.from(`ean${parm.index}`).insert([{ name, link, qs, profile, comment }]);
    if (error) console.log("Error", error);
    else return data;
  }
  async function editUser(name, link, qs, profile, comment) {
    let { data, error } = await supabase
      .from(`ean${parm.index}`)
      .update({ name, link, qs, profile, comment })
      .eq("id", parm.id);
    if (error) console.log("Error", error);
    else return data;
  }

  const submit = (e) => {
    e.preventDefault();
    let comment = [];
    if (isEdit) {
      editUser(postData.name, postData.url, question, profileImg, comment).then(() =>
        navigate(`/textlist/${parm.index}`)
      );
    } else {
      addUser(postData.name, postData.url, question, profileImg, comment).then(() =>
        navigate(`/textlist/${parm.index}`)
      );
    }
  };

  const handleClickRadio = (e) => {
    const targetValue = e.target.value;
    setProfileImg(targetValue);
  };

  const handleChange = (e) => {
    const dataKey = e.target.id.slice(4).toLowerCase();
    const dataValue = e.target.value;

    setPostData((prev) => ({ ...prev, [dataKey]: dataValue }));
  };

  return (
    <div className={cx("wrap")}>
      <div className={cx("editInner")}>
        <div className={cx("editTitle")}>
          <h1>
            <img src={editIcon} className={cx("editIcon")} alt="edit아이콘" />
            공부를 하세요
          </h1>
          <Link to={`/textList/${parm.index}`}>
            <p>X</p>
          </Link>
        </div>
        <form onSubmit={submit} className={cx("editForm")}>
          <div>
            <label htmlFor="editName">내 이름</label>
            <input
              type="text"
              id="editName"
              className={cx("editInput", "editName")}
              placeholder="이름을 입력해주세요"
              value={postData.name}
              onChange={handleChange}
            />
          </div>
          <div className={cx("profileImg")}>
            <label>내 얼굴</label>
            <input
              name="profileImg"
              type="radio"
              value="profile1"
              id="profile1"
              className={cx("editInput", "profile")}
              checked={profileImg === "profile1"}
              onChange={handleClickRadio}
            />
            <label htmlFor="profile1" className={cx("profileLabel")}>
              <img src={profile1} />
            </label>

            <input
              name="profileImg"
              type="radio"
              id="profile2"
              value="profile2"
              className={cx("editInput", "profile")}
              checked={profileImg === "profile2"}
              onChange={handleClickRadio}
            />
            <label htmlFor="profile2" className={cx("profileLabel")}>
              <img src={profile2} />
            </label>

            <input
              name="profileImg"
              type="radio"
              id="profile3"
              value="profile3"
              className={cx("editInput", "profile")}
              checked={profileImg === "profile3"}
              onChange={handleClickRadio}
            />
            <label htmlFor="profile3" className={cx("profileLabel")}>
              <img src={profile3} />
            </label>
          </div>
          <div>
            <label htmlFor="editUrl">내 공부 기록</label>
            <input
              type="text"
              id="editUrl"
              className={cx("editInput", "editUrl")}
              placeholder="링크를 입력해주세요"
              value={postData.url}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="editQuestion">이거 모르겠어...</label>
            <Question
              value={question}
              onChange={setQuestion}
              id="editQuestion"
              className={cx("editInput", "editQuestion")}
              placeholder="질문을 입력해주세요"
            ></Question>
          </div>

          <button type="submit" className={cx("editButton")} onClick={submit}>
            {isEdit ? "글 수정하기" : "글 작성하기"}
          </button>
        </form>
      </div>
    </div>
  );
}
