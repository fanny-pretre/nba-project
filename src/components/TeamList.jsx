import TeamConference from "./TeamConference";
import "./styles/Teams.scss";
import { useEffect, useContext } from "react";
import { TeamsControllerContext } from "../main";

function TeamList() {
  //Consommation de contexte
  const { teamsController } = useContext(TeamsControllerContext);

  //Destructuration du controller
  const { teams, fetchTeams } = teamsController;

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="team-section" id="team">
      <div className="team-content">
        <h2>LES EQUIPES</h2>
        {teams && <TeamConference teams={teams} />}
      </div>
    </div>
  );
}

export default TeamList;
