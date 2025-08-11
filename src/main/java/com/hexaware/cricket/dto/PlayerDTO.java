package com.hexaware.cricket.dto;

import com.hexaware.cricket.entity.Player;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
public class PlayerDTO {
	
	@NotNull(message = "Player ID cannot be null")
	private int playerId;
	
	@NotNull(message = "Player Name cannot be empty")
	private String playerName;
	
	@NotNull(message = "Jersey Number cannot be null")
	private int jerseyNumber;
	
	@NotNull(message = "Choose the from given role")
	private Player.Role role;
	
	private int totalMatches;
	
	@NotNull(message = "Team Name cannot be empty")
	private String teamName;
	
	@NotNull(message = "State cannot be empty")
	private String state;
	
	private String description;
}
