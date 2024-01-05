import "./ChapterCard.scss";

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

export default ChapterCard;
