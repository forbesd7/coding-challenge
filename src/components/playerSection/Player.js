import React from "react";
import {
  Button,
  SinglePlayerContainer,
  Avatar,
  PlayerDescription,
  PlayerName
} from "../../styledComponents";

const Region = props => {
  const renderSelectedButton = () => {
    return (
      <Button
        selected
        onClick={() => {
          props.updateSelectedRegion(props.regionName);
        }}
      >
        {props.regionName}
      </Button>
    );
  };

  const renderButton = () => {
    return (
      <Button
        onClick={() => {
          props.updateSelectedRegion(props.regionName);
        }}
      >
        {props.regionName}
      </Button>
    );
  };

  const renderView = () => {
    if (props.selected) {
      return renderSelectedButton();
    } else {
      return renderButton();
    }
  };

  return (
    <SinglePlayerContainer>
      <Avatar src={props.avatarUrl} />
      <PlayerName>{props.playerName}</PlayerName>
      <PlayerDescription>{props.message}</PlayerDescription>
    </SinglePlayerContainer>
  );
};

export default Region;
