import React, { Component, Fragment } from "react";
//import { Title, SubTitle, ButtonContainer } from "../../styledComponents";
import Player from "./Player";
import { playerData } from "../../data/players_teams";

class PlayersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPlayersFromRegion = regionName => {
    return playerData
      .filter(player => player.teams === regionName)
      .map((player, index) => {
        return (
          <Player
            key={index}
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
    return <Fragment>{this.renderPlayers()}</Fragment>;
  }
}

export default PlayersContainer;
