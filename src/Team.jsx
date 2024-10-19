import { useState } from "react";

export default function Team() {
  const teamStyle = {
    border: "2px solid white",
    borderRadius: "15px",
    margin: "20px",
  };
  const [team, setTeam] = useState(11);
  const handeleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam)
  }
  const handeleRemove = () => {
    const newTeam = team - 1;
    setTeam(newTeam)
  }

  return (
    <div style={teamStyle}>
      <h3>Player : {team}</h3>
      <button onClick={handeleAdd}>Add</button>
      <button onClick={handeleRemove}>Remove</button>

    </div>
  );
}
