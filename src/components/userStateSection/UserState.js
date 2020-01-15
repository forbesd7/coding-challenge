import React, { Fragment } from "react";
import Button from "../../styledComponents/Button";

const UserState = props => {
  const renderSelectedButton = () => {
    return (
      <Button
        selected
        onClick={() => {
          props.updateSelectedState(props.userState);
        }}
      >
        {props.userState}
      </Button>
    );
  };

  const renderButton = () => {
    return (
      <Button
        onClick={() => {
          props.updateSelectedState(props.userState);
        }}
      >
        {props.userState}
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

  return <Fragment>{renderView()}</Fragment>;
};

export default UserState;
