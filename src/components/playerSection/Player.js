import React, { Fragment } from "react";
import {
  SinglePlayerContainer,
  Avatar,
  PlayerDescription,
  PlayerName
} from "../../styledComponents";

const Region = props => {
  const renderSelectedUser = () => {
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

  const renderUser = () => {
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
    if (props.selectedPlayers.includes(props.playerName)) {
      return renderSelectedUser();
    } else {
      return renderUser();
    }
  };

  return <Fragment>{renderView()}</Fragment>;
};

export default Region;
