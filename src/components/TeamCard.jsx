import { useContext } from "react";
import { TeamsControllerContext } from "../main";

function TeamCard({ team }) {
  const { teamsController } = useContext(TeamsControllerContext);
  //Destructuration du controller
  const { fetchLogo } = teamsController;

  return (
    <div className="team-flex">
      <div className="team-image">
        <img src={fetchLogo(team.id)} alt={team.name} />
      </div>
      <p>
        {team.city} {team.name}
      </p>
    </div>
  );
}

export default TeamCard;
