import "./ChapterCard.scss";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

function ChapterCard({ title, index }) {
  return (
    <button className="chapter-card">
      <div className="chapter-card-badge">Chapter {index}</div>
      <div className="chapter-card-title">{title}</div>
      <div className="chapter-card-receivedquestion-section">
        <img src="../../src/assets/Messages.svg" alt="Messages" />
        <div className="chapter-card-receivedquestion">작성된 글</div>
      </div>
    </button>
  );
}

ChapterCard.propTypes = propTypes;

export default ChapterCard;
