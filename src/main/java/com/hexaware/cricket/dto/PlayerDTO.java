package com.hexaware.cricket.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
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
	@Min(value = 1, message = "Jersey Number must be at least 1")
    @Max(value = 99, message = "Jersey Number cannot exceed 99")
	private int jerseyNumber;
	
	@NotNull(message = "Choose from the given role")
	@Pattern(regexp = "BATSMAN|BOWLER|ALLROUNDER|WICKETKEEPER", message = "Role must be one of BATSMAN, BOWLER, ALLROUNDER, WICKETKEEPER")
	private String role;
	
	private int totalMatches;
	
	@NotNull(message = "Team Name cannot be empty")
	private String teamName;
	
	@NotNull(message = "State cannot be empty")
	private String state;
	
	private String description;
}
