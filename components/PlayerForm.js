
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "../api/FetchApi";

function PlayerForm() {
  const [player, setPlayer] = useState({
    playerName: "",
    jerseyNumber: "",
    role: "",
    totalMatches: "",
    teamName: "",
    state: "",
    description: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!player.playerName.match(/^[A-Za-z ]{4,50}$/)) tempErrors.playerName = "Enter a valid name";
    if (!player.jerseyNumber || player.jerseyNumber <= 0 || player.jerseyNumber > 999) tempErrors.jerseyNumber = "Jersey number must be 1-999";
    if (!["Batsman", "Bowler", "Keeper", "AllRounder"].includes(player.role)) tempErrors.role = "Choose a valid role";
    if (!player.teamName) tempErrors.teamName = "Enter the Team Name";
    if (!player.state) tempErrors.state = "Enter the State";
    if (!player.description) tempErrors.description = "Give a Description";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (["jerseyNumber", "totalMatches"].includes(name)) value = value ? parseInt(value, 10) : "";
    setPlayer({ ...player, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  await addPlayer(player);
  alert("Player added successfully");
  navigate("/players");
};


  const renderInput = ({ label, name, type = "text", options }) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {options ? (
        <select className={`form-select ${errors[name] ? "is-invalid" : ""}`} name={name} value={player[name]} onChange={handleChange}>
          <option value="">Select a {label} </option>
          {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      ) : type === "textarea" ? (
        <textarea className={`form-control ${errors[name] ? "is-invalid" : ""}`} name={name} value={player[name]} onChange={handleChange} />
      ) : (
        <input type={type} className={`form-control ${errors[name] ? "is-invalid" : ""}`} name={name} value={player[name]} onChange={handleChange} />
      )}
      {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );

  return (
    <div className="d-flex justify-content-center mt-5">
  <div className="card shadow p-4" style={{ maxWidth: "600px", width: "100%" }}>
    <h2 className="text-center mb-4">Player Form</h2>
    <form onSubmit={handleSubmit}>
      {renderInput({ label: "Player Name", name: "playerName" })}
      {renderInput({ label: "Jersey Number", name: "jerseyNumber", type: "number" })}
      {renderInput({ label: "Role", name: "role", options: ["Batsman", "Bowler", "Keeper", "AllRounder"] })}
      {renderInput({ label: "Total Matches", name: "totalMatches", type: "number" })}
      {renderInput({ label: "Team Name", name: "teamName" })}
      {renderInput({ label: "State", name: "state" })}
      {renderInput({ label: "Description", name: "description", type: "textarea" })}
      <div className="d-flex justify-content-center">
  <button type="submit" className="btn btn-primary ">Submit</button>
</div>

    </form>
  </div>
</div>

  );
}

export default PlayerForm;
