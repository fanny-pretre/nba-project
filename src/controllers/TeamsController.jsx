import { useState } from "react";
import { GetAllTeams } from "../services/TeamsService";

import teamsLogoMap from "../components/data/TeamLogo";
import teamInfo from "../components/data/TeamInfo";
import teamsPhotoMap from "../components/data/TeamPhoto";

function TeamsController() {
  const [teams, setTeams] = useState(new Map());

  const fetchTeams = async () => {
    try {
      const data = await GetAllTeams();
      setTeams(arrayToMap(data));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTeamByID = (id) => {
    try {
      const team = teams.get(parseInt(id));
      return team;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLogo = (id) => {
    try {
      const idInt = parseInt(id);
      return teamsLogoMap.has(idInt)
        ? teamsLogoMap.get(idInt)
        : "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png";
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPhoto = (id) => {
    try {
      const idInt = parseInt(id);
      return teamsPhotoMap.has(idInt)
        ? teamsPhotoMap.get(idInt)
        : "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png";
    } catch (error) {
      console.error(error);
    }
  };

  const fetchInfo = (id) => {
    try {
      console.log(id);
      const idInt = parseInt(id);
      return teamInfo.has(idInt) ? teamInfo.get(idInt) : "no data to display";
    } catch (error) {
      console.error(error);
    }
  };

  const arrayToMap = (arr) => {
    const newMap = new Map();
    for (const value of arr) {
      newMap.set(value.id, value);
    }
    return newMap;
  };

  return { teams, fetchTeams, fetchLogo, fetchTeamByID, fetchInfo, fetchPhoto };
}

export default TeamsController;
