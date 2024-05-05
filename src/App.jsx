import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
