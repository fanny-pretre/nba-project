import { GetPlayerById } from "../services/PlayersService";
import players from "../components/data/Players";

function PlayersController() {
  const fetchPlayer = async (id) => {
    try {
      const data = await GetPlayerById(id);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPlayerInfo = (id) => {
    try {
      const player = players.get(parseInt(id));
      return player ? player : null;
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchPlayer, fetchPlayerInfo };
}

export default PlayersController;
