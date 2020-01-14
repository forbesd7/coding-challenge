import React from "react";
import { Button, SinglePlayerContainer, Avatar } from "../../styledComponents";

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
    </SinglePlayerContainer>
  );
};

export default Region;
