import React from "react";
import Main from "../../components/Main/Main";
import Team from "../../components/Team/Team";

function Home() {
  return (
    <div className="home">
      <Main />
      <div className="space"/>
      <Team/>
    </div>
  );
}

export default Home;
