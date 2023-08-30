import React from "react";
import "./TeamCard.css";
function TeamCard({ data }) {
  return (
    <div className="teamCard fade-in">
      <div class="teamCard__card">
        <img
          class="teamCard__cardImg"
          src={data.photo || "/img/default_person.jpg"}
          alt=""
          srcset=""
        />
        <div class="teamCard__cardName">{data.name}</div>
        <div class="teamCard__cardTitle">{data.designation}</div>
        <div class="teamCard__cardDiscrip">{data.description}</div>
        <div class="teamCard__cardDetails">
          <a href={data.linkedin}>
            <i class="fab fa-linkedin"></i>
          </a>
          <a href={data.twitter}>
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
