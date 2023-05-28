import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {setAgentListByName} from "../actions";

const Header = () => {
  let navigate = useNavigate();

  const handleClickFavorite = () => {
    navigate("/valorant-agents/favorites");
  };

  return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
          <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarCollapse"
          >
            <ul className="navbar-nav mt-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/valorant-agents/" role="button" data-bs-toggle="dropdown"
                   aria-expanded="false">
                  Agents
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/valorant-agents/">Agents</a></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><a className="dropdown-item" href="/valorant-agents/role/initiator">Initiator</a></li>
                  <li><a className="dropdown-item" href="/valorant-agents/role/duelist">Duelist</a></li>
                  <li><a className="dropdown-item" href="/valorant-agents/role/sentinel">Sentinel</a></li>
                  <li><a className="dropdown-item" href="/valorant-agents/role/controller">Controller</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/maps">
                  Maps
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/weapons">
                  Weapons
                </NavLink>
              </li>

            </ul>
            <button
                className="btn btn-danger my-1 mr-5 "
                onClick={() => handleClickFavorite()}
            >
              Favorites
            </button>

            <form className="form-inline my-1" onSubmit={setAgentListByName}>
              <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Find Agents"
                  aria-label="Buscar"
              ></input>
              <button
                  className="btn btn-success my-2 my-sm-0"
                  type="submit"
              >
                Find
              </button>

            </form>
          </div>
        </nav>
      </header>
  );
};

export default Header;

