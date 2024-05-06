import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PlayersControllerContext } from "../main";
import { TeamsControllerContext } from "../main";

import "./styles/PlayersDetails.scss";

export default function PlayersDetails() {
  const { id } = useParams();

  const { playersController } = useContext(PlayersControllerContext);
  const { fetchPlayer, fetchPlayerInfo } = playersController;

  const { teamsController } = useContext(TeamsControllerContext);
  const { fetchLogo, fetchInfo } = teamsController;

  const [loader, setLoader] = useState(true);
  const [playerDetail, setPlayerDetail] = useState(null);

  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        const data = await fetchPlayer(id);
        setPlayerDetail(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };
    getPlayerDetails();
  }, [id]);

  if (loader) {
    return <p>Loading</p>;
  }

  if (!playerDetail) {
    return <p>Player not found</p>;
  }

  return (
    <div className="player-detail-section">
      <div className="player-detail-content">
        <h2>LES JOUEURS ICONIQUES</h2>
        <div className="player-name-section">
          <h3>
            {playerDetail.first_name} {playerDetail.last_name} -{" "}
            {playerDetail.team.full_name}
          </h3>
          <img
            src={fetchLogo(playerDetail.team.id)}
            alt={playerDetail.team.full_name}
          />
        </div>
        <div className="player-display-flex">
          <div className="player-detail-left">
            <img src={fetchPlayerInfo(id).image} />
          </div>
          <div className="player-detail-right">
            <div className="player-detail-text">
              <p> {fetchPlayerInfo(id).text}</p>
            </div>
            <div
              className="player-detail-info"
              style={{ background: fetchInfo(playerDetail.team.id).color }}
            >
              <div className="player-detail-info-left">
                <p> Position : {playerDetail.position} </p>
                <p> Taille : {playerDetail.height} </p>
                <p> Poids: {playerDetail.weight} </p>
                <p> Numéro : {playerDetail.jersey_number} </p>
              </div>
              <div className="player-detail-info-right">
                <p>
                  Université : {playerDetail.college} - {playerDetail.country}
                </p>
                <p> Année de Draft : {playerDetail.draft_year} </p>
                <p> Draft round : {playerDetail.draft_round}</p>
                <p> Draft number : {playerDetail.draft_number}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
