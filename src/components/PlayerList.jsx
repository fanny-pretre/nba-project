import { useState } from "react";
import PlayerCard from "./PlayerCard";

import "./styles/Players.scss";

const players = [
  {
    id: 1,
    name: "Michael Jordan",
    image:
      "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/19/16741112030020.jpg",
    png: "https://i.pinimg.com/originals/75/53/b3/7553b3a57a75746dddb9ba5bed53762a.png",
  },
  {
    id: 2,
    name: "LeBron James",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/LeBron_James_vs_Washington_3-30-11.jpg/800px-LeBron_James_vs_Washington_3-30-11.jpg",
    png: "https://i.pinimg.com/originals/a6/b5/b9/a6b5b9de8a56609646f6a805e8b173d0.png",
  },
  {
    id: 3,
    name: "Kareem Abdul-Jabbar ",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/kareem-abdul-jabbar-of-the-los-angeles-lakers-shoots-a-free-news-photo-1643724792.jpg?resize=980:*",
    png: "https://cdn.nba.com/silos/nba/latest/440x700/76003.png",
  },
  {
    id: 4,
    name: "Magic Johnson",
    image:
      "https://cdn.britannica.com/27/189527-050-5BAD12C2/Magic-Johnson.jpg",
    png: "https://i.pinimg.com/originals/a6/b5/b9/a6b5b9de8a56609646f6a805e8b173d0.png",
  },
  {
    id: 5,
    name: "Larry Bird",
    image:
      "https://www.usatoday.com/gcdn/-mm-/adc7a8739eced7c2e4b77248ac1e5c1b813137dc/c=0-31-1236-1679/local/-/media/2016/12/07/USATODAY/USATODAY/636167218520509437-AP-C01-BIRDPLAY-07-1116641.JPG",
    png: "https://toppng.com/uploads/preview/boston-celtics-larry-bird-iphone-7-phone-case-115499365527alexjztpu.png",
  },
  {
    id: 6,
    name: "Shaquille O’Neal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
    png: "https://i.pinimg.com/originals/a6/b5/b9/a6b5b9de8a56609646f6a805e8b173d0.png",
  },
  {
    id: 7,
    name: "Tim Duncan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
    png: "https://i.pinimg.com/originals/a6/b5/b9/a6b5b9de8a56609646f6a805e8b173d0.png",
  },
  {
    id: 8,
    name: "Bill Russell",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
    png: "https://i.pinimg.com/originals/a6/b5/b9/a6b5b9de8a56609646f6a805e8b173d0.png",
  },
];

function PlayerList() {
  const [page, setPage] = useState(1);
  const recordsPerPage = 4;

  const endIndex = page * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;

  const pagePlayers = players.slice(startIndex, endIndex);

  const nPages = Math.ceil(players.length / recordsPerPage);

  console.log(players);
  const goToPrevPage = () => {
    if (page !== 1) setPage(page - 1);
  };

  const goToNextPage = () => {
    if (page !== nPages) setPage(page + 1);
  };

  return (
    <div className="player-section">
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            {pagePlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerList;
