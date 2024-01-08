import ChapterList from "./ChapterList";
import Header from "./Header";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ChapterListPage() {
  return (
    <>
      <Header />
      <div className={cx("chapterlistpage-section")}>
        <div className={cx("chapterlistpage-title")}>CS 챕터 목록</div>
        <ChapterList></ChapterList>
      </div>
    </>
  );
}

export default ChapterListPage;
