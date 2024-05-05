import { useEffect, useState } from "react";
import { gsap } from "gsap";

import "./styles/HeaderNavigator.scss";

// Data for the sections
const h1Texts = [
  {
    id: 1,
    name: "Jokic",
    png: "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png",
    color: "#0E2240",
  },
  {
    id: 2,
    name: "Durant",
    png: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
    color: "#1D1160",
  },
  {
    id: "3",
    name: "Giannis",
    png: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png",
    color: "#00471B",
  },
  {
    id: "4",
    name: "James",
    png: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    color: "#552583",
  },
  {
    id: "5",
    name: "Curry",
    png: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
    color: "#1D428A",
  },
];

const HeaderNavigator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerToDisplay, setPlayerToDisplay] = useState(h1Texts[currentIndex]);

  useEffect(() => {
    setPlayerToDisplay(h1Texts[currentIndex]);
    //gsapAnimations(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % h1Texts.length);
    }, 3000);

    return () => {
      clearInterval(intervalId); // Nettoie l'intervalle lorsque le composant est démonté
    };
  }, []);

  const gsapAnimations = (index) => {
    console.log(index);
    gsap.from(".h1", { y: "20%", opacity: 0, duration: 0.5 });
    gsap.from(".player-image ", {
      y: index > currentIndex ? "100vh" : "-100vh",
      delay: 0.4,
      duration: 0.4,
    });
  };

  return (
    <div>
      {/* Joueur*/}
      <div className="section-container">
        <div className="section" style={{ background: playerToDisplay.color }}>
          <h1 className="h1">{playerToDisplay.name}</h1>
          <div className="player-image ">
            <img src={playerToDisplay.png} alt={playerToDisplay.name} />
          </div>

          {/* Ballons*/}
          <div className="player-images">
            <div className="image-one player-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
                alt="1"
              />
            </div>
            <div className="image-two player-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
                alt="2"
              />
            </div>
            <div className="image-three player-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
                alt="3"
              />
            </div>
            <div className="image-four player-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
                alt="4"
              />
            </div>
            <div className="image-five player-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
                alt="5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigator;
