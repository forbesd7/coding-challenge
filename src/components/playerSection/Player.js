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
    //TODO: not really happy with this solution, a bit hard to read..would like to refactor
    //will have one more check to see if the user has submitted their votes,
    //if so then we render the users with percentages of votes
    //if the user is logged out or admin, we will also show these percentages
    //will have to have a submit button, and also disable it for admin/logged out.
    // then just add a function that increases their like count by 1
    //add the 'selected' part to the players and that should be MVP done! :)

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
