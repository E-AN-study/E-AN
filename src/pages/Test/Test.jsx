import styles from "./Test.module.scss";
import classNames from "classnames/bind";
import { Answer } from "../../pages/Test/answer/AnswerPage";
const cx = classNames.bind(styles);

export function Test() {
  return (
    <div className={cx("wrap")}>
      <p>asdaasdassd</p>
      <Answer />
    </div>
  );
}
