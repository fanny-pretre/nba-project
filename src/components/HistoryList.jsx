import { useState } from "react";

import HistoryCard from "./HistoryCard";
import Pagination from "./Pagination";

import "./styles/History.scss";

const historyEvents = [
  {
    id: 1,
    name: "Fondation de la NBA",
    text: "La NBA (National Basketball Association) est fondée.",
    date: "1946",
    image:
      "https://basket-retro.com/wp-content/uploads/2014/04/lakers-1950.jpg",
  },
  {
    id: 2,
    name: "Premier match de la NBA",
    text: "Le premier match de la NBA est joué.",
    date: "1946",
    image:
      "https://www.basketusa.com/wp-content/uploads/2021/11/514957538-e1635778828484.jpg",
  },
  {
    id: 3,
    name: "Inauguration de la BAA",
    text: "La Basketball Association of America (BAA) est inaugurée.",
    date: "1946",
    image:
      "https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1071,w_1908,x_46,y_271/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/a/7/a757841c649197ad1e9abe1086c88502fecd6bc2/QBAATeamsPhiladelphiaWarriors.jpg",
  },
  {
    id: 4,
    name: "Fusion de la BAA et de la NBL",
    text: "La BAA et la National Basketball League (NBL) fusionnent pour former la NBA.",
    date: "1949",
    image:
      "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SMUGDBTB5YI6ZG2ROEY7UGIMLY.jpg",
  },
  {
    id: 5,
    name: "Inauguration de la NBA",
    text: "La NBA est officiellement inaugurée en tant qu'entité unifiée.",
    date: "1949",
    image:
      "https://i1.wp.com/www.retroseasons.com/retroimages/0-season-KLALA-1950.jpg",
  },
  {
    id: 6,
    name: "Première saison complète de la NBA",
    text: "La première saison complète de la NBA se déroule.",
    date: "1949",
    image: "https://cdn.nba.com/manage/2021/08/1947-48-baltimore-bullets.jpg",
  },
  {
    id: 7,
    name: "Championnat de la NBA 1950",
    text: "Le premier championnat de la NBA est remporté.",
    date: "1950",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/1950_Minneapolis_Lakers.jpeg",
  },
  {
    id: 8,
    name: "Introduction de la règle des 24 secondes",
    text: "La règle des 24 secondes est introduite pour accélérer le jeu.",
    date: "1954",
    image:
      "https://cdn.vox-cdn.com/thumbor/lN6uEXPgop6rq637bJq_deKvl4o=/0x0:2048x1575/1200x800/filters:focal(634x763:960x1089)/cdn.vox-cdn.com/uploads/chorus_image/image/71948302/97308514.0.jpg",
  },
  {
    id: 9,
    name: "Bill Russell remporte son premier titre NBA",
    text: "Bill Russell remporte son premier titre NBA avec les Boston Celtics.",
    date: "1957",
    image:
      "https://static01.nyt.com/images/2022/07/31/multimedia/31russell-1/31russell-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  },
  {
    id: 10,
    name: "Michael Jordan remporte son premier titre NBA",
    text: "Michael Jordan remporte son premier titre NBA avec les Chicago Bulls.",
    date: "1991",
    image:
      "https://www.parlons-basket.com/wp-content/uploads/2021/08/nba-michael-jordan-titre-chicago-bulls-trophee-larry-obrien.jpg",
  },
  {
    id: 11,
    name: "Retrait du numéro 23 de Michael Jordan par les Bulls",
    text: "Les Chicago Bulls retirent le numéro 23 de Michael Jordan en hommage à sa contribution à l'équipe.",
    date: "1994",
    image:
      "https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Emaxisciences.2Ecom.2Fs3.2Ffrgsd.2F1280.2Fmourir-moins-con.2Fdefault_2020-11-20_73982483-e4aa-47b8-8b68-0bb88da55852.2Ejpeg/1200x675/quality/80/pourquoi-jordan-portait-le-numero-23.jpg",
  },
  {
    id: 12,
    name: "Kobe Bryant remporte son premier titre NBA",
    text: "Kobe Bryant remporte son premier titre NBA avec les Los Angeles Lakers.",
    date: "2000",
    image: "https://www.basketusa.com/wp-content/uploads/2020/03/Kobe2.jpg",
  },
  {
    id: 13,
    name: "Lancement de la G League",
    text: "La NBA lance la G League, son championnat de développement.",
    date: "2001",
    image: "https://cdn.nba.com/manage/2016/11/gleague-draft-2001.jpg",
  },
  {
    id: 14,
    name: "LeBron James remporte son premier titre NBA",
    text: "LeBron James remporte son premier titre NBA avec le Miami Heat.",
    date: "2012",
    image:
      "https://www.basketusa.com/wp-content/uploads/2022/06/lebron-heat-2012.jpg",
  },
  {
    id: 15,
    name: "Golden State Warriors remportent 73 matchs",
    text: "Les Golden State Warriors établissent un record de la NBA en remportant 73 matchs en saison régulière.",
    date: "2016",
    image:
      "https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/sport/golden-state-les-chiffres-dune-saison-record-2719837/26634094-1-fre-FR/Golden-State-les-chiffres-d-une-saison-record.jpg",
  },
  {
    id: 16,
    name: "Kawhi Leonard mène les Raptors au titre NBA",
    text: "Kawhi Leonard mène les Toronto Raptors à leur premier titre NBA.",
    date: "2019",
    image: "https://www.basketusa.com/wp-content/uploads/2021/06/KL-1.jpg",
  },
];

function HistoryList() {
  const [page, setPage] = useState(1);
  const recordsPerPage = 1;

  const endIndex = page * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;

  const historyPage = historyEvents.slice(startIndex, endIndex);

  const nPages = Math.ceil(historyEvents.length / recordsPerPage);

  return (
    <div className="history-section" id="history">
      <div className="history-content">
        <h2>Histoire de la NBA</h2>
        <div>
          {historyPage.map((historyEvent) => (
            <HistoryCard key={historyEvent.id} historyEvent={historyEvent} />
          ))}
        </div>
        <div className="history-pagination">
          <Pagination nPages={nPages} page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default HistoryList;
