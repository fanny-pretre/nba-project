function TeamCard({ team }) {
  return (
    <div className="team-flex">
      <img src={team.png} alt={team.name} />
      <p>
        {team.city} {team.name}
      </p>
    </div>
  );
}

export default TeamCard;
