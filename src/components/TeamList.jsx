import TeamConference from "./TeamConference";

import "./styles/Teams.scss";

const teams = [
  {
    id: 1,
    conference: "East",
    division: "Southeast",
    city: "Atlanta",
    name: "Hawks",
    full_name: "Atlanta Hawks",
    abbreviation: "ATL",
  },
  {
    id: 2,
    conference: "East",
    division: "Atlantic",
    city: "Boston",
    name: "Celtics",
    full_name: "Boston Celtics",
    abbreviation: "BOS",
    png: "https://logos-world.net/wp-content/uploads/2020/05/Boston-Celtics-logo.png",
  },
  {
    id: 3,
    conference: "East",
    division: "Atlantic",
    city: "Brooklyn",
    name: "Nets",
    full_name: "Brooklyn Nets",
    abbreviation: "BKN",
  },
  {
    id: 4,
    conference: "East",
    division: "Southeast",
    city: "Charlotte",
    name: "Hornets",
    full_name: "Charlotte Hornets",
    abbreviation: "CHA",
  },
  {
    id: 5,
    conference: "East",
    division: "Central",
    city: "Chicago",
    name: "Bulls",
    full_name: "Chicago Bulls",
    abbreviation: "CHI",
  },
  {
    id: 6,
    conference: "East",
    division: "Central",
    city: "Cleveland",
    name: "Cavaliers",
    full_name: "Cleveland Cavaliers",
    abbreviation: "CLE",
  },
  {
    id: 7,
    conference: "West",
    division: "Southwest",
    city: "Dallas",
    name: "Mavericks",
    full_name: "Dallas Mavericks",
    abbreviation: "DAL",
  },
  {
    id: 8,
    conference: "West",
    division: "Northwest",
    city: "Denver",
    name: "Nuggets",
    full_name: "Denver Nuggets",
    abbreviation: "DEN",
  },
  {
    id: 9,
    conference: "East",
    division: "Central",
    city: "Detroit",
    name: "Pistons",
    full_name: "Detroit Pistons",
    abbreviation: "DET",
  },
  {
    id: 10,
    conference: "West",
    division: "Pacific",
    city: "Golden State",
    name: "Warriors",
    full_name: "Golden State Warriors",
    abbreviation: "GSW",
  },
  {
    id: 11,
    conference: "West",
    division: "Southwest",
    city: "Houston",
    name: "Rockets",
    full_name: "Houston Rockets",
    abbreviation: "HOU",
  },
  {
    id: 12,
    conference: "East",
    division: "Central",
    city: "Indiana",
    name: "Pacers",
    full_name: "Indiana Pacers",
    abbreviation: "IND",
  },
  {
    id: 13,
    conference: "West",
    division: "Pacific",
    city: "LA",
    name: "Clippers",
    full_name: "LA Clippers",
    abbreviation: "LAC",
  },
  {
    id: 14,
    conference: "West",
    division: "Pacific",
    city: "Los Angeles",
    name: "Lakers",
    full_name: "Los Angeles Lakers",
    abbreviation: "LAL",
  },
  {
    id: 15,
    conference: "West",
    division: "Southwest",
    city: "Memphis",
    name: "Grizzlies",
    full_name: "Memphis Grizzlies",
    abbreviation: "MEM",
  },
  {
    id: 16,
    conference: "East",
    division: "Southeast",
    city: "Miami",
    name: "Heat",
    full_name: "Miami Heat",
    abbreviation: "MIA",
  },
  {
    id: 17,
    conference: "East",
    division: "Central",
    city: "Milwaukee",
    name: "Bucks",
    full_name: "Milwaukee Bucks",
    abbreviation: "MIL",
  },
  {
    id: 18,
    conference: "West",
    division: "Northwest",
    city: "Minnesota",
    name: "Timberwolves",
    full_name: "Minnesota Timberwolves",
    abbreviation: "MIN",
  },
  {
    id: 19,
    conference: "West",
    division: "Southwest",
    city: "New Orleans",
    name: "Pelicans",
    full_name: "New Orleans Pelicans",
    abbreviation: "NOP",
  },
  {
    id: 20,
    conference: "East",
    division: "Atlantic",
    city: "New York",
    name: "Knicks",
    full_name: "New York Knicks",
    abbreviation: "NYK",
  },
  {
    id: 21,
    conference: "West",
    division: "Northwest",
    city: "Oklahoma City",
    name: "Thunder",
    full_name: "Oklahoma City Thunder",
    abbreviation: "OKC",
  },
  {
    id: 22,
    conference: "East",
    division: "Southeast",
    city: "Orlando",
    name: "Magic",
    full_name: "Orlando Magic",
    abbreviation: "ORL",
  },
  {
    id: 23,
    conference: "East",
    division: "Atlantic",
    city: "Philadelphia",
    name: "76ers",
    full_name: "Philadelphia 76ers",
    abbreviation: "PHI",
  },
  {
    id: 24,
    conference: "West",
    division: "Pacific",
    city: "Phoenix",
    name: "Suns",
    full_name: "Phoenix Suns",
    abbreviation: "PHX",
  },
  {
    id: 25,
    conference: "West",
    division: "Northwest",
    city: "Portland",
    name: "Trail Blazers",
    full_name: "Portland Trail Blazers",
    abbreviation: "POR",
  },
  {
    id: 26,
    conference: "West",
    division: "Pacific",
    city: "Sacramento",
    name: "Kings",
    full_name: "Sacramento Kings",
    abbreviation: "SAC",
  },
  {
    id: 27,
    conference: "West",
    division: "Southwest",
    city: "San Antonio",
    name: "Spurs",
    full_name: "San Antonio Spurs",
    abbreviation: "SAS",
  },
  {
    id: 28,
    conference: "East",
    division: "Atlantic",
    city: "Toronto",
    name: "Raptors",
    full_name: "Toronto Raptors",
    abbreviation: "TOR",
  },
  {
    id: 29,
    conference: "West",
    division: "Northwest",
    city: "Utah",
    name: "Jazz",
    full_name: "Utah Jazz",
    abbreviation: "UTA",
  },
  {
    id: 30,
    conference: "East",
    division: "Southeast",
    city: "Washington",
    name: "Wizards",
    full_name: "Washington Wizards",
    abbreviation: "WAS",
  },
];

function TeamList() {
  return (
    <div className="team-section">
      <div className="team-content">
        <h2>LES EQUIPES</h2>
        <TeamConference teams={teams} />
      </div>
    </div>
  );
}

export default TeamList;