import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeFavorite } from "../../actions";
import { connect } from "react-redux";

const AgentCard = ({ favorites, id, image, name, role }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleClickAgent = () => {
    navigate(`/valorant-agents/agent/${id}`);
  };

  const handleClickFavorite = () => {
    dispatch(changeFavorite(id, favorites));
  };
  return (
    <div className="agent-card">
      <img
        onClick={() => handleClickAgent()}
        className="image"
        src={image}
        alt={name}
      ></img>
      <div className="name">
        <h3 onClick={() => handleClickAgent()}>{name.toUpperCase()}</h3>
        <button
          className={"btn " + true ? "btn-light" : "btn-danger"}
          onClick={() => handleClickFavorite()}
        >
          ❤
        </button>
      </div>
      <div className="role">
        <img src={role.icon} alt={role.name}></img>
        <h4>{role.name}</h4>
      </div>
    </div>
  );
};

const stateMapToPros = (state) => {
  return {
      favorites: state.agent.favorites,
  };
};

export default connect(stateMapToPros)(AgentCard);
