import styles from './TextList.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/EAN-logo.png';
import linkIcon from '../../assets/link.svg';
import kakaotalk from '../../assets/kakaotalk.svg';
import messages from '../../assets/messages.svg';
import TextCard from '../../components/TextCard/TextCard';
import Button from '../../components/Button/Button';
import mockData from '../../utils/mock';

const cx = classNames.bind(styles);

export function TextList() {
  return (
    <div className={cx('container')}>
      <img className={cx('logoImg')} src={logo} alt='logo image' />
      <h1 className={cx('title')}>챕터 1 CPU</h1>
      <div className={cx('shareButton')}>
        <button className={cx('linkIcon')}>
          <img src={linkIcon} />
        </button>
        <button className={cx('kakaotalk')}>
          <img src={kakaotalk} />
        </button>
      </div>
      <div className={cx('textCardList')}>
        <div className={cx('listBtn')}>
          <Button text={'글 목록'} />
        </div>
        <div className={cx('listTitle')}>
          <img className={cx('messageIcon')} src={messages} alt='logo image' />
          이미 n명이 공부했습니다.
        </div>
        <TextCard data={mockData}></TextCard>
        <TextCard data={mockData}></TextCard>
        <TextCard data={mockData}></TextCard>
        <TextCard data={mockData}></TextCard>
        <TextCard data={mockData}></TextCard>
        <TextCard data={mockData}></TextCard>
        <TextCard data={mockData}></TextCard>
      </div>
      <div className={cx('studyBtn')}>
        <Button text={'나도 공부하기'} />
      </div>
    </div>
  );
}
