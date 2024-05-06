import { Link } from "react-router-dom";

import TeamCard from "./TeamCard";

function TeamConference({ teams }) {
  const getTeamsbyDivision = (chosenDivision) => {
    try {
      return Array.from(teams.values()).filter(
        (t) => t.division === chosenDivision
      );
    } catch (error) {
      console.error(`An error did occur in ${this} : ${error}`);
      return Array.from(teams.values());
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
                <Link to={`/teamsDetails/${team.id}`}>
                  <button>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </Link>
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
                <Link to={`/teamsDetails/${team.id}`}>
                  <button>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamConference;
