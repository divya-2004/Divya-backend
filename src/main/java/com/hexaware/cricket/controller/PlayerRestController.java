package com.hexaware.cricket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.hexaware.cricket.dto.PlayerDTO;
import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.service.IPlayerService;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/players")
public class PlayerRestController {
	@Autowired 
	IPlayerService service;
	
	@PostMapping("/add")
	public Player createPlayer(@RequestBody PlayerDTO dto) {
		return service.createPlayer(dto);
	}
	
	@GetMapping("/getall")
	public List<Player> getAllPlayers(){
		return service.getAllPlayers();
	}
	@GetMapping("/get/{playerId}")
	public Player getPlayerId(@PathVariable int playerId){
		return service.getPlayerById(playerId);
	}
	
	@PutMapping("/update/{playerId}")
	public Player updatePlayer(@PathVariable int playerId, @RequestBody PlayerDTO dto){
		return service.updatePlayer(playerId, dto);
	}
	
	@DeleteMapping("/delete/{playerId}")
	public String deletePlayerById(@PathVariable int playerId) {
		return service.deletePlayerById(playerId);
	}
	
}
