import { Link, useLocation, useParams } from "react-router-dom";
import { shareKakaoLink } from "../../utils/shareKaKaoLink";
import styles from "./Qs.module.scss";
import classNames from "classnames/bind";
import logo from "../../assets/EAN-logo.png";
import linkIcon from "../../assets/link.svg";
import kakaotalk from "../../assets/kakaotalk.svg";
import messages from "../../assets/messages.svg";
import TextCard from "../../components/TextCard/TextCard";
import Button from "../../components/Button/Button";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = import.meta.env.VITE_APP_KEY;
const supabaseKey = import.meta.env.VITE_APP_SECRET_CODE;
const supabase = createClient(supabaseUrl, supabaseKey);

const cx = classNames.bind(styles);

export function Qs() {
  const { index } = useParams();
  const location = useLocation();
  const [usersData, setUsersData] = useState([]);

  const title = location.state ? location.state.title : "";

  usersData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  let url = window.location.href;
  const baseUrl = window.location.host;

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("복사 성공!");
    } catch (error) {
      alert("복사 실패!");
    }
  };

  // Step 2: Modify fetchUsers to update the state
  async function fetchUsers() {
    let { data: users, error } = await supabase.from(`eanqs`).select("*");
    if (error) {
      console.log("Error", error);
    } else {
      setUsersData(users); // Update the state with the fetched data
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={cx("container")}>
      <Link to="/">
        <img className={cx("logoImg")} src={logo} alt="logo image" />
      </Link>
      <h1 className={cx("title")}>질문해 보아요~</h1>
      <div className={cx("shareButton")}>
        <button className={cx("linkIcon")} onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}>
          <img src={linkIcon} />
        </button>
        <button className={cx("kakaotalk")} onClick={() => shareKakaoLink(url)}>
          <img src={kakaotalk} />
        </button>
      </div>

      <div className={cx("textCardList")}>
        <div className={cx("listBtn")}>
          <Link to="/List">
            <Button text={"글 목록 보러가기"} />
          </Link>
          {/* <Link to={`/qsdelete/${index}`}>
            <Button text={"삭제하러 가기"} />
          </Link> */}
        </div>
        <div className={cx("listTitle")}>
          <img className={cx("messageIcon")} src={messages} alt="logo image" />
          이미 {usersData.length}명이 질문했습니다.
        </div>

        {usersData.map((userData, index) => (
          <TextCard key={index} data={userData} is={"list"} />
        ))}
      </div>
      <div className={cx("studyBtn")}>
        <Link to={`/qsEdit`}>
          <Button text={"나도 질문하기"} />
        </Link>
      </div>
    </div>
  );
}
