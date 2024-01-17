// import React from "react";
// import { Helmet } from "react-helmet";
import MainLogo from "../../assets/EAN-logo.png";
import SortButton from "./SortButton";
import classNames from "classnames/bind";
import styles from "./main.module.scss";

const cx = classNames.bind(styles);
function MainPage() {
  return (
    <div className={cx("mainWrap")}>
      <img className={cx("mainImg")} src={MainLogo}></img>
      <title>E.AN</title>

      <SortButton />
    </div>
  );
}

export default MainPage;
