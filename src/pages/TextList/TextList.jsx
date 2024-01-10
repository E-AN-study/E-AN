import { Link, useLocation } from "react-router-dom";
import { shareKakaoLink } from "../../utils/shareKaKaoLink";
import styles from "./TextList.module.scss";
import classNames from "classnames/bind";
import logo from "../../assets/EAN-logo.png";
import linkIcon from "../../assets/link.svg";
import kakaotalk from "../../assets/kakaotalk.svg";
import messages from "../../assets/messages.svg";
import TextCard from "../../components/TextCard/TextCard";
import Button from "../../components/Button/Button";
// import mockData from "../../utils/mock";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(supabaseUrl, supabaseKey);

const cx = classNames.bind(styles);

export function TextList() {
  let url = window.location.href;
  const baseUrl = "http://localhost:5173";
  const location = useLocation();

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("복사 성공!");
    } catch (error) {
      alert("복사 실패!");
    }
  };
  const [usersData, setUsersData] = useState([]);

  // Step 2: Modify fetchUsers to update the state
  async function fetchUsers() {
    let { data: users, error } = await supabase.from("ean").select("*");
    if (error) {
      console.log("Error", error);
    } else {
      setUsersData(users); // Update the state with the fetched data
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(usersData);
  return (
    <div className={cx("container")}>
      <Link to="/">
        <img className={cx("logoImg")} src={logo} alt="logo image" />
      </Link>
      <h1 className={cx("title")}>챕터 1 CPU</h1>
      <div className={cx("shareButton")}>
        <button className={cx("linkIcon")} onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}>
          <img src={linkIcon} />
        </button>
      </div>
      <div>
        <button className={cx("kakaotalk")} onClick={() => shareKakaoLink(url)}>
          <img src={kakaotalk} />
        </button>
      </div>
      <div className={cx("textCardList")}>
        <div className={cx("listBtn")}>
          <Link to="/List">
            <Button text={"글 목록"} />
          </Link>
        </div>
        <div className={cx("listTitle")}>
          <img className={cx("messageIcon")} src={messages} alt="logo image" />
          이미 {usersData.length}명이 공부했습니다.
        </div>

        {/* Render a TextCard for each item in usersData */}
        {usersData.map((userData, index) => (
          <TextCard key={index} data={userData} />
        ))}
      </div>
      <div className={cx("studyBtn")}>
        <Link to="/Edit">
          <Button text={"나도 공부하기"} />
        </Link>
      </div>
    </div>
  );
}
