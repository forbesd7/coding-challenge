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

  componentDidMount() {
    this.getVotesFromAllRegions();
  }

  getVotesFromAllRegions = () => {
    let jpVotes = 0;
    let seaVotes = 0;
    let hkVotes = 0;
    let twVotes = 0;

    playerData.forEach(player => {
      if (player.teams === "jp") jpVotes += player.likeCount;
      else if (player.teams === "sea") seaVotes += player.likeCount;
      else if (player.teams === "hk") hkVotes += player.likeCount;
      else if (player.teams === "tw") twVotes += player.likeCount;
    });
    this.setState({ jpVotes, seaVotes, hkVotes, twVotes });
  };

  isCorrectVotingRegion = selectedPlayerRegion => {
    //if user has selected a region, check if current players region is the same
    if (this.state.votingRegion) {
      if (this.state.selectedPlayers.length === 0) {
        this.setState({ votingRegion: selectedPlayerRegion });
        return true;
      }
      if (this.state.votingRegion !== selectedPlayerRegion) {
        return false;
      } else return true;
    } else {
      this.setState({ votingRegion: selectedPlayerRegion });
      return true;
    }
  };

  toggleSelectedPlayer = (selectedPlayer, selectedPlayerRegion) => {
    //check if the user can vote in current region
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

  getCorrectRegionVotes = regionName => {
    switch (regionName) {
      case "jp":
        return this.state.jpVotes;
      case "sea":
        return this.state.seaVotes;
      case "hk":
        return this.state.hkVotes;
      case "tw":
        return this.state.twVotes;
      default:
        return;
    }
  };
  renderPlayersFromRegion = regionName => {
    const totalRegionVotes = this.getCorrectRegionVotes(regionName);
    return playerData
      .filter(player => player.teams === regionName)
      .map((player, index) => {
        return (
          <Player
            totalRegionVotes={totalRegionVotes}
            selectedState={this.props.selectedState}
            votingClosed={this.props.votingClosed}
            toggleSelectedPlayer={this.toggleSelectedPlayer}
            selectedPlayers={this.state.selectedPlayers}
            key={index}
            playerVotes={player.likeCount}
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
