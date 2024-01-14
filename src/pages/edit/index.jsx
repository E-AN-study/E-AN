import styles from "./edit.module.scss";
import classNames from "classnames/bind";
import editIcon from "../../assets/Messages.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/sample.png";

import Question from "./Question";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_KEY;
const supabaseKey = import.meta.env.VITE_APP_SECRET_CODE;
const supabase = createClient(supabaseUrl, supabaseKey);

const cx = classNames.bind(styles);

const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

export default function Edit() {
  const [question, setQuestion] = useState("");
  const [postData, setPostData] = useState({});
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [profileImg, setProfileImg] = useState("");

  async function addUser(name, link, qs, profile) {
    let { data, error } = await supabase.from(`ean`).insert([{ name, link, qs, profile }]);
    if (error) console.log("Error", error);
    else return data;
  }

  const submit = () => {
    addUser(postData.name, postData.url, question, profileImg);
  };

  const handleChange = (e) => {
    const dataKey = e.target.id.slice(4).toLowerCase();
    const dataValue = e.target.value;

    if (postData.url !== "" && dataKey === "url") {
      setIsValidUrl(urlRegex.test(dataValue));

      isValidUrl ? e.target.classList.remove(cx("error")) : e.target.classList.add(cx("error"));
    }

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
          <Link to="/textList">
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
              onChange={handleChange}
            />
          </div>

          <div className={cx("profileImg")}>
            <label>내 얼굴</label>
            <input
              name="profileImg"
              type="radio"
              id="profile1"
              className={cx("editInput", "profile")}
              onClick={() => {
                setProfileImg("profile1");
              }}
            />
            <label htmlFor="profile1" className={cx("profileLabel")}>
              <img src={profile1} />
            </label>

            <input
              name="profileImg"
              type="radio"
              id="profile2"
              className={cx("editInput", "profile")}
              onClick={() => {
                setProfileImg("profile2");
              }}
            />
            <label htmlFor="profile2" className={cx("profileLabel")}>
              <img src={profile2} />
            </label>

            <input
              name="profileImg"
              type="radio"
              id="profile3"
              className={cx("editInput", "profile")}
              onClick={() => {
                setProfileImg("profile3");
              }}
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
              onChange={handleChange}
            />
            {postData.url && !isValidUrl && <p className={cx("errorMsg")}>올바른 주소를 입력해 주세요</p>}
          </div>

          <div>
            <label htmlFor="editQuestion">이거 모르겠어...</label>
            <Question
              onChange={setQuestion}
              id="editQuestion"
              className={cx("editInput", "editQuestion")}
              placeholder="질문을 입력해주세요"
            ></Question>
          </div>

          <button type="submit" className={cx("editButton")} onClick={submit}>
            글 작성하기
          </button>
        </form>
      </div>
    </div>
  );
}
