package com.hexaware.cricket.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Player {
	@Id
	private int playerId;
	private String playerName;
	private int jerseyNumber;
	
	@Enumerated(EnumType.STRING)
	private Role role;
	
	private int totalMatches;
	private String teamName;
	private String state;
	private String description;
	public enum Role{
		Batsman, Bowler, Keeper, All_Rounder
	}
}
