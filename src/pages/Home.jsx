import HeaderNavigator from "../components/HeaderNavigator";
import HistoryList from "../components/HistoryList";
import TeamList from "../components/TeamList";
import PlayerList from "../components/PlayerList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeaderNavigator />
      <HistoryList />
      <TeamList />
      <PlayerList />
      <Footer />
    </>
  );
}

export default Home;
