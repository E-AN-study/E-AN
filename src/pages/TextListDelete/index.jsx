import { Link, useLocation, useParams } from "react-router-dom";
import { shareKakaoLink } from "../../utils/shareKaKaoLink";
import styles from "./TextListDelete.module.scss";
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

export default function TextList() {
  const { index } = useParams();
  const location = useLocation();
  const title = location.state ? location.state.title : "";

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
  const [usersData, setUsersData] = useState([]);
  console.log(usersData);

  // Step 2: Modify fetchUsers to update the state
  async function fetchUsers() {
    let { data: users, error } = await supabase.from(`ean${index}`).select("*");
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
      <h1 className={cx("title")}>
        챕터 {index} {title}
      </h1>
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
          <Link to={`/textlist/${index}`}>
            <Button text={"글 리스트로 이동"} />
          </Link>
        </div>
        <div className={cx("listTitle")}>
          <img className={cx("messageIcon")} src={messages} alt="logo image" />
          이미 {usersData.length}명이 공부했습니다.
        </div>

        {/* Render a TextCard for each it``m in usersData */}
        {usersData.map((userData, index) => (
          <TextCard key={index} data={userData} is={"delete"} setUsersData={setUsersData} />
        ))}
      </div>
      <div className={cx("studyBtn")}>
        <Link to={`/Edit/${index}`}>
          <Button text={"나도 공부하기"} />
        </Link>
      </div>
    </div>
  );
}
