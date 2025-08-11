package com.hexaware.cricket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.cricket.dto.PlayerDTO;
import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.repository.PlayerRepository;

@Service

public class PlayerServiceImp implements IPlayerService {

	@Autowired
	PlayerRepository repo;
	
	private Player mapDTOToEntity(PlayerDTO dto, Player player) throws InvalidRoleException  {
	    if (player == null) {
	        player = new Player();
	    }
	    player.setPlayerId(dto.getPlayerId());
	    player.setPlayerName(dto.getPlayerName());
	    player.setJerseyNumber(dto.getJerseyNumber());

	    Player.Role roleEnum;
	    try {
	        roleEnum = Player.Role.valueOf(dto.getRole());
	    } catch (IllegalArgumentException e) {
	        throw new InvalidRoleException("Invalid role: " + dto.getRole());
	    }
	    player.setRole(roleEnum);

	    player.setTeamName(dto.getTeamName());
	    player.setTotalMatches(dto.getTotalMatches());
	    player.setState(dto.getState());
	    player.setDescription(dto.getDescription());

	    return player;
	}

	
	
	@Override
	public List<Player> getAllPlayers() {
		
		return repo.findAll();
	}

	@Override
	public Player createPlayer(PlayerDTO dto)   {
	    Player player = new Player();
		try {
			player = mapDTOToEntity(dto, null);
		} catch (InvalidRoleException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    return repo.save(player);
	}

	@Override
	public Player getPlayerById(int playerId) {
		
		return repo.findById(playerId).orElse(null);
	}

	@Override
	public Player updatePlayer(int playerId, PlayerDTO dto)   {
	    Player exist = repo.findById(playerId).orElse(null);
	    if(exist != null) {
	        try {
				return repo.save(mapDTOToEntity(dto, exist));
			} catch (InvalidRoleException e) {
				
				e.printStackTrace();
			}
	    }
	    return null;
	}


	@Override
	public String deletePlayerById(int playerId) {
		// TODO Auto-generated method stub
		repo.deleteById(playerId);
		return "Deleted Successfully";
	}

}
