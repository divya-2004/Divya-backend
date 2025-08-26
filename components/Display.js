import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getPlayers } from "../api/FetchApi";

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [searchRole, setSearchRole] = useState("");

  const fetchPlayers = async () => {
    const response = await getPlayers();
    setPlayers(response.data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);
  
  const filteredPlayers = players.filter((p) =>
    p.role.toLowerCase().includes(searchRole.toLowerCase())
  );

  return (
    <div className="container mt-10">
      <h2 className="text-center mb-4 text-white">Players List</h2>

      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form"
            placeholder="Search by Role"
            value={searchRole}
            onChange={(e) => setSearchRole(e.target.value)}
          />
        </div>
      </div>

      <table className="table table-hover">
        <thead className="table-primary">
          <tr>
            <th>Player ID</th>
            <th>Player Name</th>
            <th>Jersey Number</th>
            <th>Role</th>
            <th>Team Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((p) => (
              <tr key={p.playerId}>
                <td>{p.playerId}</td>
                <td>{p.playerName}</td>
                <td>{p.jerseyNumber}</td>
                <td>{p.role}</td>
                <td>{p.teamName}</td>
                <td>
                  <Link
                    to={`/update/${p.playerId}`}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Modify
                  </Link>
                  
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No players found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="text-center mb-3">
        <Link to="/add" className="btn btn-secondary">
          New Player
        </Link>
      </div>
    </div>
  );
}

export default PlayerList;
