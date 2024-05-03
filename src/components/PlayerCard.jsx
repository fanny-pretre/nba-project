function PlayerCard({ player }) {
  console.log(player);
  return (
    <div>
      <div className="card">
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
