import classNames from 'classnames/bind';
import styles from './Comment.module.scss';

import PropTypes from 'prop-types';

Comment.propTypes = {
  children: PropTypes.node.isRequired,
};

const cx = classNames.bind(styles);

export function Comment({ children }) {
  return (
    <>
      <div className={cx('comment')}>{children}</div>
    </>
  );
}
