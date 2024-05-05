import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TeamsControllerContext } from "../main";

import "./styles/TeamsDetails.scss";

export default function TeamsDetails() {
  const { id } = useParams();

  const { teamsController } = useContext(TeamsControllerContext);
  //Destructuration du controller
  const { fetchLogo, fetchTeamByID, fetchInfo, fetchPhoto } = teamsController;

  const [loader, setLoader] = useState(true);
  const [teamDetail, setTeamDetail] = useState(null);

  useEffect(() => {
    try {
      const team = fetchTeamByID(id);
      setTeamDetail(team);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  }, [id]);

  if (loader) {
    return <p>Loading</p>;
  }

  if (!teamDetail) {
    return <p>Team not found</p>;
  }

  return (
    <div className="team-detail-section">
      <div className="team-detail-content">
        <h2>LES EQUIPES</h2>
        <div className="team-name-section">
          <h3>{teamDetail.full_name}</h3>
          <img src={fetchLogo(id)} alt={teamDetail.full_name} />
        </div>
        <div className="team-display-flex">
          <div className="team-detail-left">
            <img src={fetchPhoto(id)} alt={teamDetail.full_name} />
          </div>
          <div className="team-detail-right">
            <div className="team-detail-text">
              <p> {fetchInfo(id)}</p>
            </div>
            <div className="team-detail-info">
              <p> Conference : {teamDetail.conference}</p>
              <p> Division : {teamDetail.division}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
