import React, { Component, Fragment } from "react";
//import { Title, SubTitle, ButtonContainer } from "../../styledComponents";
import Player from "./Player";
import { playerData } from "../../data/players_teams";

class PlayersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSEAPlayers = () => {
    return playerData
      .filter(player => player.teams === "sea")
      .map((player, index) => {
        return (
          <Player
            playerName={player.nickname}
            likeCount={player.likeCount}
            avatarUrl={player.avatarUrl}
            message={player.message}
          />
        );
      });
  };
  renderJapanPlayers = () => {
    return playerData
      .filter(player => player.teams === "jp")
      .map((player, index) => {
        return (
          <Player
            playerName={player.nickname}
            likeCount={player.likeCount}
            avatarUrl={player.avatarUrl}
            message={player.message}
          />
        );
      });
  };
  renderTaiwanPlayers = () => {
    return playerData
      .filter(player => player.teams === "tw")
      .map((player, index) => {
        return (
          <Player
            playerName={player.nickname}
            likeCount={player.likeCount}
            avatarUrl={player.avatarUrl}
            message={player.message}
          />
        );
      });
  };
  renderHKPlayers = () => {
    return playerData
      .filter(player => player.teams === "hk")
      .map((player, index) => {
        return (
          <Player
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
        return this.renderSEAPlayers();
      case "Japan":
        return this.renderJapanPlayers();
      case "Taiwan":
        return this.renderTaiwanPlayers();
      case "Hong Kong":
        return this.renderHKPlayers();
      default:
        return "Players not found";
    }
  };
  render() {
    return <Fragment>{this.renderPlayers()}</Fragment>;
  }
}

export default PlayersContainer;
