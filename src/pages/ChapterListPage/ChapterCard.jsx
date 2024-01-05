import "./ChapterCard.scss";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string,
  index: PropTypes.num,
};

function ChapterCard({ title, index }) {
  return (
    <button className="chapter-card">
      <div className="chapter-card-badge">Chapter {index}</div>
      <div className="chapter-card-title">{title}</div>
      <div className="chapter-card-receivedquestion-section">
        <img src="../../src/assets/Messages.svg" />
        <div className="chapter-card-receivedquestion">작성된 글</div>
      </div>
    </button>
  );
}

ChapterCard.propTypes = propTypes;

export default ChapterCard;
