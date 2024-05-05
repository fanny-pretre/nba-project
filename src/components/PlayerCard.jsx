import { Link } from "react-router-dom";

function PlayerCard({ player, id }) {
  return (
    <div>
      <div className="card">
        <Link to={`/playersDetails/${id}`} className="player-link"></Link>
        <div className="wrapper">
          <img src={player.image} className="cover-image" />
        </div>
        <p className="title">{player.name} </p>

        <img src={player.png} className="character" />
      </div>
    </div>
  );
}

export default PlayerCard;
