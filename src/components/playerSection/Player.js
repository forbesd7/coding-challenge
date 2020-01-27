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
  const renderAvatar = hoverState => {
    if (hoverState === "noHover") {
      return <Avatar hoverState={hoverState} src={props.avatarUrl} />;
    } else {
      return (
        <Avatar
          hoverState={hoverState}
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

  const renderPercentages = (hoverState, hasPercentage) => {
    if (hasPercentage) {
      return (
        <Percentage hoverState={hoverState}>
          {((props.playerVotes / props.totalRegionVotes) * 100).toFixed(2)}%
        </Percentage>
      );
    }
    return;
  };

  const renderFlag = countryName => {
    return "hi";
    // 🇯🇵 jp
    // 🇹🇼 tw
    // 🇭🇰 hk
    // 🇵🇭 ph
  };

  const renderPlayer = (hoverState, hasPercentage) => {
    return (
      <SinglePlayerContainer>
        {renderPercentages(hoverState, hasPercentage)}
        {renderAvatar(hoverState)}
        {renderSelectedText(hoverState)}
        <PlayerName>
          {props.playerName} {renderFlag()}
        </PlayerName>
        <PlayerDescription>{props.message}</PlayerDescription>
      </SinglePlayerContainer>
    );
  };
  const renderView = () => {
    if (
      props.selectedState === "Logged In" &&
      (props.hasVoted && props.selectedPlayers.includes(props.playerName))
    ) {
      return renderPlayer("selected", "hasPercentage");
    }
    if (
      props.votingClosed ||
      props.selectedState === "Logged out" ||
      props.selectedState === "Admin" ||
      props.hasVoted
    ) {
      return renderPlayer("noHover", "hasPercentage");
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
