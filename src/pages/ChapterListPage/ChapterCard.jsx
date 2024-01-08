import { Link } from "react-router-dom";
import "./ChapterCard.scss";
import PropTypes from "prop-types";
import messages from "../../assets/messages.svg";

const propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
};

function ChapterCard({ title, index }) {
  return (
    <Link to="/textlist">
      <button className="chapter-card">
        <div className="chapter-card-badge">Chapter {index}</div>
        <div className="chapter-card-title">{title}</div>
        <div className="chapter-card-receivedquestion-section">
          <img src={messages} alt="Messages" />
          <div className="chapter-card-receivedquestion">작성된 글</div>
        </div>
      </button>
    </Link>
  );
}

ChapterCard.propTypes = propTypes;

export default ChapterCard;
