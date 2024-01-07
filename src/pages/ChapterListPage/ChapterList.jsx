import ChapterCard from "./ChapterCard";
import styles from "./ChapterList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const chapterTitles = [
  "컴퓨터 구조 시작하기",
  "데이터",
  "명령어",
  "CPU의 작동 원리",
  "CPU 성능 향상 기법",
  "메모리와 캐시 메모리",
  "보조기억장치",
  "입출력장치",
  "운영체제 시작하기",
  "프로세스와 스레드",
  "CPU 스케줄링",
  "프로세스 동기화",
  "교착 상태",
  "가상 메모리",
  "파일 시스템",
];

function ChapterList() {
  const cards = chapterTitles.map((title, index) => (
    <ChapterCard key={index} title={title} index={index + 1} />
  ));

  return (
    <div className={cx("chaptercardlist-section")}>
      <form className={cx("chaptercardlist")}>{cards}</form>
    </div>
  );
}

export default ChapterList;
