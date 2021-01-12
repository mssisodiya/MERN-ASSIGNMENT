import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <NavLink className="nav-link" to="/users">
          Users
        </NavLink>
        <NavLink className="nav-link" to="/albums">
          Albums
        </NavLink>
        <NavLink className="nav-link" to="/photos">
          Photos
        </NavLink>
      </div>
    </nav>
  );
}
