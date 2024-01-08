import styles from "./TextList.module.scss";
import classNames from "classnames/bind";
import logo from "../../assets/EAN-logo.png";
import linkIcon from "../../assets/link.svg";
import kakaotalk from "../../assets/kakaotalk.svg";
import messages from "../../assets/messages.svg";
import TextCard from "../../components/TextCard/TextCard";
import Button from "../../components/Button/Button";
import { Helmet } from "react-helmet";
import { data } from "../../utils/mock";
const cx = classNames.bind(styles);
import { useEffect, useState } from "react";
import { shareKakaoLink } from "../../utils/shareKaKaoLink";
export function TextList() {
  let url = window.location.href;

  return (
    <div className={cx("container")}>
      <img className={cx("logoImg")} src={logo} alt="logo image" />
      <h1 className={cx("title")}>챕터 1 CPU</h1>
      <div className={cx("shareButton")}>
        <button className={cx("linkIcon")}>
          <img src={linkIcon} />
        </button>
      </div>
      <div>
        {/* <button className={cx("kakaotalk")} onClick={handleLogin}>
        <img src={kakaotalk} />
      </button> */}

        <button className={cx("kakaotalk")} onClick={() => shareKakaoLink(url)}>
          <img src={kakaotalk} />
        </button>
      </div>

      <div className={cx("textCardList")}>
        <div className={cx("listBtn")}>
          <Button text={"글 목록"} />
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
        <Button text={"나도 공부하기"} />
      </div>
    </div>
  );
}
