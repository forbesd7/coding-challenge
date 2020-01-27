import React, { Component } from "react";
//import { Title, SubTitle, ButtonContainer } from "../../styledComponents";
import Player from "./Player";
import { playerData } from "../../data/players_teams";
import { AllPlayersContainer } from "../../styledComponents";

class PlayersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPlayers: [], votingRegion: "sea" };
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
    if (this.state.selectedPlayers.length === 0) {
      this.setState({ votingRegion: selectedPlayerRegion });
      return true;
    } else if (this.state.votingRegion !== selectedPlayerRegion) {
      return false;
    } else return true;
  };

  toggleSelectedPlayer = (selectedPlayerName, selectedPlayerRegion) => {
    console.log("hi");
    if (!this.isCorrectVotingRegion(selectedPlayerRegion)) return;

    const curPlayers = this.state.selectedPlayers;

    //if player was already selected, remove them from selected players
    if (this.state.selectedPlayers.includes(selectedPlayerName)) {
      const playerIndex = this.state.selectedPlayers.indexOf(
        selectedPlayerName
      );
      curPlayers.splice(playerIndex, 1);
      this.setState({ selectedPlayers: curPlayers });
      this.props.updateVotes("increment");
      return;
    }
    if (this.state.selectedPlayers.length === 3) {
      return;
    } else {
      this.props.updateSelectedPlayers(this.state.selectedPlayers);

      curPlayers.push(selectedPlayerName);
      this.setState({ selectedPlayers: curPlayers });
      this.props.updateVotes("decrement");
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
          //This is why context api/redux would have been good to use.
          // Code started to get a bit hard to read due to passing down so many props.
          <Player
            hasVoted={this.props.hasVoted}
            votingRegion={this.state.votingRegion}
            selectedState={this.props.selectedState}
            votingClosed={this.props.votingClosed}
            toggleSelectedPlayer={this.toggleSelectedPlayer}
            selectedPlayers={this.state.selectedPlayers}
            key={index}
            totalRegionVotes={totalRegionVotes}
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
