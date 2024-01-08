import styles from "./TextList.module.scss";
import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/EAN-logo.png";
import linkIcon from "../../assets/link.svg";
import kakaotalk from "../../assets/kakaotalk.svg";
import messages from "../../assets/messages.svg";
import TextCard from "../../components/TextCard/TextCard";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);

export function TextList() {
  const baseUrl = 'http://localhost:5173/';
  const location = useLocation();

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      
      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패!');
    }
  };

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
        <button className={cx("kakaotalk")}>
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
          이미 n명이 공부했습니다.
        </div>
        <TextCard></TextCard>
        <TextCard></TextCard>
        <TextCard></TextCard>
        <TextCard></TextCard>
        <TextCard></TextCard>
        <TextCard></TextCard>
        <TextCard></TextCard>
      </div>
      <div className={cx("studyBtn")}>
        <Link to="/Edit">
          <Button text={"나도 공부하기"} />
        </Link>
      </div>
    </div>
  );
}
