import "./styles/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li className="navbar-logo">
          <a>Mon logo</a>
        </li>
        <li className="navbar-item">
          <span className="link-text">Histoire</span>
        </li>
        <li className="navbar-item">
          <span className="link-text">Joueurs</span>
        </li>
        <li className="navbar-item">
          <span className="link-text">Evènements</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
