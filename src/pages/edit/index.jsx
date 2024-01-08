import styles from './edit.module.scss';
import classNames from 'classnames/bind';
import editIcon from '../../assets/Messages.svg';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import Question from './Question';

const cx = classNames.bind(styles);

const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

export default function Edit() {
  const [question, setQuestion] = useState('');
  const [postData, setPostData] = useState({});
  const [isValidUrl, setIsValidUrl] = useState(false);
  const textRef = useRef(0);

  console.log(postData);

  const handleChange = (e) => {
    const dataKey = e.target.id.slice(4).toLowerCase();
    const dataValue = e.target.value;

    if (postData.url !== '' && dataKey === 'url') {
      setIsValidUrl(urlRegex.test(dataValue));

      isValidUrl
        ? e.target.classList.remove(cx('error'))
        : e.target.classList.add(cx('error'));
    }

    setPostData((prev) => ({ ...prev, [dataKey]: dataValue }));
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    const date = new Date();
    try {
      setPostData((prev) => ({ ...prev, date, question, id: textRef.current }));
    } catch (err) {
      console.log(err);
    } finally {
      ++textRef.current;
    }
  };

  return (
    <div className={cx('wrap')}>
      <div className={cx('editInner')}>
        <div className={cx('editTitle')}>
          <h1>
            <img src={editIcon} className={cx('editIcon')} alt="edit아이콘" />
            공부를 하세요
          </h1>
          <Link to="/textList">
            <p>X</p>
          </Link>
        </div>
        <form onSubmit={handleSubmitData} className={cx('editForm')}>
          <div>
            <label htmlFor="editName">내 이름</label>
            <input
              type="text"
              id="editName"
              className={cx('editInput', 'editName')}
              placeholder="이름을 입력해주세요"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="editUrl">내 공부 기록</label>
            <input
              type="text"
              id="editUrl"
              className={cx('editInput', 'editUrl')}
              placeholder="링크를 입력해주세요"
              onChange={handleChange}
            />
            {postData.url && !isValidUrl && (
              <p className={cx('errorMsg')}>올바른 주소를 입력해 주세요</p>
            )}
          </div>

          <div>
            <label htmlFor="editQuestion">이거 모르겠어...</label>
            <Question
              onChange={setQuestion}
              id="editQuestion"
              className={cx('editInput', 'editQuestion')}
              placeholder="질문을 입력해주세요"
            ></Question>
          </div>

          <button type="submit" className={cx('editButton')}>
            글 작성하기
          </button>
        </form>
      </div>
    </div>
  );
}
