import HeaderNavigator from "../components/HeaderNavigator";
import HistoryList from "../components/HistoryList";
import TeamList from "../components/TeamList";
import PlayerList from "../components/PlayerList";

function Home() {
  return (
    <>
      <HeaderNavigator />
      <HistoryList />
      <TeamList />
      <PlayerList />
    </>
  );
}

export default Home;
