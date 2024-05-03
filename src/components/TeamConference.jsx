import TeamCard from "./TeamCard";

function TeamConference({ teams }) {
  const getTeamsbyDivision = (chosenDivision) => {
    try {
      return teams.filter((t) => t.division === chosenDivision);
    } catch (error) {
      console.error(`An error did occur in ${this} : ${error}`);
      return teams;
    }
  };

  return (
    <div className="conference-section">
      <h3> Conférence Est </h3>
      <div className="conference-flex">
        {["Atlantic", "Central", "Southeast"].map((division) => (
          <div key={division} className="division-flex">
            <h4> {division} division</h4>
            {getTeamsbyDivision(division).map((team) => (
              <div className="team" key={team.id}>
                <TeamCard team={team} />
                <button> Know more</button>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h3> Conférence Ouest </h3>
      <div className="conference-flex">
        {["Pacific", "Northwest", "Southwest"].map((division) => (
          <div key={division} className="division-flex">
            <h4> {division} division</h4>
            {getTeamsbyDivision(division).map((team) => (
              <div className="team" key={team.id}>
                <TeamCard team={team} />
                <button> Know more</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamConference;
