import { useState } from "react";
import PlayerCard from "./PlayerCard";

import players from "./data/Players";

import "./styles/Players.scss";

function PlayerList() {
  const [page, setPage] = useState(1);
  const recordsPerPage = 4;

  const endIndex = page * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;

  const pagePlayers = Array.from(players.entries()).slice(startIndex, endIndex);

  const nPages = Math.ceil(players.length / recordsPerPage);

  const goToPrevPage = () => {
    if (page !== 1) setPage(page - 1);
  };

  const goToNextPage = () => {
    if (page !== nPages) setPage(page + 1);
  };

  return (
    <div className="player-section" id="player">
      <div className="player-content">
        <h2>LES JOUEURS ICONIQUES </h2>
        <div className="player-carroussel">
          <div className="player-flexbox">
            <svg
              onClick={goToPrevPage}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="button__svg__nav"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            {pagePlayers.map(([key, player]) => (
              <PlayerCard key={key} player={player} id={key} />
            ))}
            <svg
              onClick={goToNextPage}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="button__svg__nav"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerList;
