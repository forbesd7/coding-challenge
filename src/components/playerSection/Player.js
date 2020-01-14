import React, { Fragment } from "react";
import {
  SinglePlayerContainer,
  Avatar,
  PlayerDescription,
  PlayerName
} from "../../styledComponents";
//TODO: rewrite these functions to only return the changed avatar.
const Region = props => {
  const renderNonHoverablePlayers = () => {
    return (
      <SinglePlayerContainer selected>
        <Avatar
          noHover
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

  const renderPlayer = () => {
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
      (props.selectedPlayers.length === 3 &&
        !props.selectedPlayers.includes(props.playerName)) ||
      props.votingClosed ||
      props.selectedState === "Logged out"
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
