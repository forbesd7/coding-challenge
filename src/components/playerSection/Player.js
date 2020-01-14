import React, { Fragment } from "react";
import {
  SinglePlayerContainer,
  Avatar,
  PlayerDescription,
  PlayerName
} from "../../styledComponents";

const Region = props => {
  const renderNonHoverablePlayers = () => {
    return (
      <SinglePlayerContainer selected>
        <Avatar
          noHover
          onClick={() => props.toggleSelectedPlayer(props.playerName)}
          src={props.avatarUrl}
        />
        <PlayerName>{props.playerName}</PlayerName>
        <PlayerDescription>{props.message}</PlayerDescription>
      </SinglePlayerContainer>
    );
  };

  const renderSelectedPlayer = () => {
    return (
      <SinglePlayerContainer selected>
        <Avatar
          selected
          onClick={() => props.toggleSelectedPlayer(props.playerName)}
          src={props.avatarUrl}
        />
        <PlayerName>{props.playerName}</PlayerName>
        <PlayerDescription>{props.message}</PlayerDescription>
      </SinglePlayerContainer>
    );
  };

  const renderPlayer = () => {
    return (
      <SinglePlayerContainer>
        <Avatar
          onClick={() => props.toggleSelectedPlayer(props.playerName)}
          src={props.avatarUrl}
        />
        <PlayerName>{props.playerName}</PlayerName>
        <PlayerDescription>{props.message}</PlayerDescription>
      </SinglePlayerContainer>
    );
  };

  const renderView = () => {
    if (
      props.selectedPlayers.length === 3 &&
      !props.selectedPlayers.includes(props.playerName)
    ) {
      return renderNonHoverablePlayers();
    } else if (props.selectedPlayers.includes(props.playerName)) {
      return renderSelectedPlayer();
    } else {
      return renderPlayer();
    }
  };

  return <Fragment>{renderView()}</Fragment>;
};

export default Region;
