import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Link to="/"></Link>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
