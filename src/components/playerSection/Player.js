import React, { Fragment } from "react";
import {
  SinglePlayerContainer,
  Avatar,
  PlayerDescription,
  PlayerName,
  Percentage,
  SelectedText
} from "../../styledComponents";
const Region = props => {
  const renderNonHoverablePlayers = () => {
    return (
      <SinglePlayerContainer selected>
        <Avatar noHover src={props.avatarUrl} />
        <PlayerName>{props.playerName}</PlayerName>
        <PlayerDescription>{props.message}</PlayerDescription>
      </SinglePlayerContainer>
    );
  };

  const renderUserSelectedPlayerWithPercentages = () => {
    return (
      <SinglePlayerContainer selected>
        <Percentage selected>
          {((props.playerVotes / props.totalRegionVotes) * 100).toFixed(2)}%
        </Percentage>

        <Avatar selected src={props.avatarUrl} />
        <SelectedText>Your Selection</SelectedText>
        <PlayerName>{props.playerName}</PlayerName>
        <PlayerDescription>{props.message}</PlayerDescription>
      </SinglePlayerContainer>
    );
  };
  const renderPlayersWithPercentages = () => {
    return (
      <SinglePlayerContainer selected>
        <Percentage>
          {((props.playerVotes / props.totalRegionVotes) * 100).toFixed(2)}%
        </Percentage>

        <Avatar noHover src={props.avatarUrl} />

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
          onClick={() =>
            props.toggleSelectedPlayer(props.playerName, props.region)
          }
          src={props.avatarUrl}
        />
        <SelectedText>Your Selection</SelectedText>

        <PlayerName>{props.playerName}</PlayerName>
        <PlayerDescription>{props.message}</PlayerDescription>
      </SinglePlayerContainer>
    );
  };

  const renderHoverablePlayer = () => {
    return (
      <SinglePlayerContainer>
        <Avatar
          onClick={() =>
            props.toggleSelectedPlayer(props.playerName, props.region)
          }
          src={props.avatarUrl}
        />
        <PlayerName>{props.playerName}</PlayerName>
        <PlayerDescription>{props.message}</PlayerDescription>
      </SinglePlayerContainer>
    );
  };

  const renderView = () => {
    //I think the logic for what player to render can be simplified, would refactor if I had more time

    if (
      props.selectedState === "Logged In" &&
      (props.hasVoted && props.selectedPlayers.includes(props.playerName))
    ) {
      return renderUserSelectedPlayerWithPercentages();
    }
    if (
      props.votingClosed ||
      props.selectedState === "Logged out" ||
      props.selectedState === "Admin" ||
      props.hasVoted
    ) {
      return renderPlayersWithPercentages();
    }
    if (
      (props.selectedPlayers.length === 3 &&
        !props.selectedPlayers.includes(props.playerName)) ||
      (props.selectedPlayers.length > 0 && props.votingRegion !== props.region)
    ) {
      return renderNonHoverablePlayers();
    } else if (props.selectedPlayers.includes(props.playerName)) {
      return renderSelectedPlayer();
    } else {
      return renderHoverablePlayer();
    }
  };

  return <Fragment>{renderView()}</Fragment>;
};

export default Region;
