import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PlayersControllerContext } from "../main";

export default function PlayersDetails() {
  const { id } = useParams();

  const { playersController } = useContext(PlayersControllerContext);
  const { fetchPlayer, fetchPlayerInfo } = playersController;

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
    <div>
      <h3> Hello I am player details {playerDetail.last_name} </h3>
      <p> {fetchPlayerInfo(id).text}</p>
    </div>
  );
}
