import { useState } from 'react';

import { Comment } from './Comment';

import classNames from 'classnames/bind';
import styles from './WrapComment.module.scss';

const cx = classNames.bind(styles);

const data = [
  {
    id: '0',
    content: '준기님 화이팅',
  },
  {
    id: '1',
    content: '소은씨 화이팅',
  },
];
export function WrapComment() {
  const [input, setInput] = useState('');
  const [comment, setComment] = useState(data);

  const addComment = () => {
    if (input !== '') {
      const lastCmtIndex = comment.length - 1;
      const addedCmtId = comment[lastCmtIndex].id + 1;
      const newComment = {
        id: addedCmtId,
        content: input,
      };
      setComment([...comment, newComment]);
      setInput('');
    }
  };

  return (
    <>
      <ul className={cx('commentList')}>
        {comment.map((item) => {
          return (
            <li className={cx('commentList-content')} key={item.id}>
              <Comment>{item.content}</Comment>
            </li>
          );
        })}
      </ul>

      <div className={cx('inputBox')}>
        <input
          className={cx('inputBox-input')}
          type='text'
          placeholder='댓글을 입력해주세요'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? addComment() : null)}
        />
        <button
          className={cx('inputBox-button')}
          disabled=''
          onClick={addComment}
        >
          댓글 작성
        </button>
      </div>
    </>
  );
}
