import React from "react";
import { useDispatch } from "react-redux";
import { setAbility } from "../../actions";

const AbilityInfo = ({ icon, name, ability }) => {
  let dispatch = useDispatch();
  return (
    <li className="ability-button" onClick={() => dispatch(setAbility(ability))}>
      <img
        src={icon}
        alt={name}
      ></img>
    </li>
  );
};

export default AbilityInfo;
