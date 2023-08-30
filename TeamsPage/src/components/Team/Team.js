import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard/TeamCard";
import mentors from "../../data/mentors.json";
function Team() {
  return (
    <div className="team">
      <div className="container">
        <div className="team_heading center">
          <h2>Meet Your Mentors</h2>
        </div>
        {mentors.map((el) => (
          <>
            {el.name && (
              <div className="team_subheading center">
                <h2>{el.name}</h2>
              </div>
            )}
            <div className="team_cardContainer">
              {el.data.map((el) => (
                <TeamCard data={el} />
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Team;
