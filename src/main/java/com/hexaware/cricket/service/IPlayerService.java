package com.hexaware.cricket.service;

import java.util.List;

import com.hexaware.cricket.dto.PlayerDTO;
import com.hexaware.cricket.entity.Player;

public interface IPlayerService {
	public List<Player> getAllPlayers();
	public Player createPlayer(PlayerDTO dto);
	public Player getPlayerById(int playerId);
	public Player updatePlayer(int playerId, PlayerDTO dto);
	public String deletePlayerById(int playerId);
}
