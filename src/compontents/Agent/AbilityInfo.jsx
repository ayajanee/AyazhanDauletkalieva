import React from "react";

const AbilityInfo = ({ slot, name, description }) => {
  return (
    <div className="ability-info">
      <div className="name">
        <img
          src={(function getKey() {
            switch (slot) {
              case "Ability1":
                return "/images/key_q.png";
              case "Ability2":
                return "/images/key_e.png";
              case "Grenade":
                return "/images/key_c.png";
              case "Ultimate":
                return "/images/key_x.png";
              default:
                return "";
            }
          })()}
          alt={slot}
        ></img>
        <h4>{name.toUpperCase()}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default AbilityInfo;
