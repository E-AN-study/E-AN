import styles from "./AnswerPage.module.scss";
import classNames from "classnames/bind";
import { Logo } from "../../../components/Logo/Logo";
import CatImg from "../../../assets/images/cat-image.svg";
const cx = classNames.bind(styles);
export function Answer() {
  return (
    <>
      <Logo />
      <img src={CatImg} alt="Cat image" />
    </>
  );
}
