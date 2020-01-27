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
  const renderUserSelectedPlayerWithPercentages = () => {
    return (
      <SinglePlayerContainer selected>
        <Percentage selected>
          {((props.playerVotes / props.totalRegionVotes) * 100).toFixed(2)}%
        </Percentage>

        <Avatar hoverState="selected" src={props.avatarUrl} />
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

  const renderAvatar = hoverState => {
    if (hoverState === "noHover") {
      return <Avatar hoverState={hoverState} src={props.avatarUrl} />;
    } else if (hoverState === "selected") {
      return (
        <Avatar
          hoverState="selected"
          onClick={() =>
            props.toggleSelectedPlayer(props.playerName, props.region)
          }
          src={props.avatarUrl}
        />
      );
    } else {
      return (
        <Avatar
          onClick={() =>
            props.toggleSelectedPlayer(props.playerName, props.region)
          }
          src={props.avatarUrl}
        />
      );
    }
  };

  const renderSelectedText = hoverState => {
    if (hoverState === "selected") {
      return <SelectedText>Your Selection</SelectedText>;
    } else {
      return;
    }
  };

  const renderPlayer = hoverState => {
    return (
      <SinglePlayerContainer>
        {renderAvatar(hoverState)}
        {renderSelectedText(hoverState)}
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
      return renderPlayer("noHover");
    } else if (props.selectedPlayers.includes(props.playerName)) {
      return renderPlayer("selected");
    } else {
      return renderPlayer();
    }
  };

  return <Fragment>{renderView()}</Fragment>;
};

export default Region;
