import React, { Component } from "react";
//import { Title, SubTitle, ButtonContainer } from "../../styledComponents";
import Player from "./Player";
import { playerData } from "../../data/players_teams";
import { AllPlayersContainer } from "../../styledComponents";

class PlayersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPlayers: [] };
  }

  isCorrectVotingRegion = votingRegion => {
    if (this.state.votingRegion) {
      if (this.state.selectedPlayers.length === 0) {
        this.setState({ votingRegion });
        return true;
      }
      if (this.state.votingRegion !== votingRegion) return false;
      else return true;
    } else {
      this.setState({ votingRegion });
      return true;
    }
  };

  toggleSelectedPlayer = (selectedPlayer, selectedPlayerRegion) => {
    console.log(selectedPlayerRegion);
    if (!this.isCorrectVotingRegion(selectedPlayerRegion)) return;

    const curPlayers = this.state.selectedPlayers;

    //if player was already selected, remove them from selected players
    if (this.state.selectedPlayers.includes(selectedPlayer)) {
      const playerIndex = this.state.selectedPlayers.indexOf(selectedPlayer);
      curPlayers.splice(playerIndex, 1);
      this.setState({ selectedPlayers: curPlayers });
      return;
    }
    if (this.state.selectedPlayers.length === 3) return;
    else {
      curPlayers.push(selectedPlayer);
      this.setState({ selectedPlayers: curPlayers });
      return;
    }
  };
  renderPlayersFromRegion = regionName => {
    return playerData
      .filter(player => player.teams === regionName)
      .map((player, index) => {
        return (
          <Player
            selectedState={this.props.selectedState}
            votingClosed={this.props.votingClosed}
            toggleSelectedPlayer={this.toggleSelectedPlayer}
            selectedPlayers={this.state.selectedPlayers}
            key={index}
            region={player.teams}
            playerName={player.nickname}
            likeCount={player.likeCount}
            avatarUrl={player.avatarUrl}
            message={player.message}
          />
        );
      });
  };
  renderPlayers = () => {
    switch (this.props.selectedRegion) {
      case "South East Asia":
        return this.renderPlayersFromRegion("sea");
      case "Japan":
        return this.renderPlayersFromRegion("jp");
      case "Taiwan":
        return this.renderPlayersFromRegion("tw");
      case "Hong Kong":
        return this.renderPlayersFromRegion("hk");
      default:
        return "Players not found";
    }
  };
  render() {
    return <AllPlayersContainer>{this.renderPlayers()}</AllPlayersContainer>;
  }
}

export default PlayersContainer;
