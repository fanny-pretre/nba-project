function HistoryCard({ historyEvent }) {
  return (
    <div className="history-card">
      <div className="history-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
          alt="basketball"
        />
        <h3> {historyEvent.name}</h3>
        <p className="history-text"> {historyEvent.text} </p>
        <p className="history-date"> {historyEvent.date}</p>
      </div>
      <div className="history-right">
        <img
          src={historyEvent.image}
          alt={historyEvent.name}
          className="history-image"
        />
      </div>
    </div>
  );
}

export default HistoryCard;
