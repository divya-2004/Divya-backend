import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PlayerUpdate() {
  const { id } = useParams();
  const [player, setPlayer] = useState({
    playerName: "",
    jerseyNumber: "",
    role: "",
    totalMatches: "",
    teamName: "",
    state: "",
    description: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8082/players/get/${id}`)
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, [id]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (["jerseyNumber", "totalMatches"].includes(name)) {
      value = value ? parseInt(value, 10) : "";
    }
    setPlayer({ ...player, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8082/players/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    })
      .then(() => navigate("/players"));
  };

  const renderInput = ({ label, name, type = "text", options }) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {options ? (
        <select
          className="form-select"
          name={name}
          value={player[name] || ""}
          onChange={handleChange}
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          className="form-control"
          name={name}
          value={player[name] || ""}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          className="form-control"
          name={name}
          value={player[name] || ""}
          onChange={handleChange}
        />
      )}
    </div>
  );

  return (
    <div className="card shadow p-4 mt-5" style={{ maxWidth: "600px", margin: "auto" }}>
      <h2 className="text-center mb-4">Update Player</h2>
      <form onSubmit={handleSubmit}>
        {renderInput({ label: "Player Name", name: "playerName" })}
        {renderInput({ label: "Jersey Number", name: "jerseyNumber", type: "number" })}
        {renderInput({
          label: "Role",
          name: "role",
          options: ["Batsman", "Bowler", "Keeper", "AllRounder"],
        })}
        {renderInput({ label: "Total Matches", name: "totalMatches", type: "number" })}
        {renderInput({ label: "Team Name", name: "teamName" })}
        {renderInput({ label: "State", name: "state" })}
        {renderInput({ label: "Description", name: "description", type: "textarea" })}

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary w-50">Update Player</button>
        </div>
      </form>
    </div>
  );
}

export default PlayerUpdate;
