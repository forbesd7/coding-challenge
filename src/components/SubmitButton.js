import React, { Fragment } from "react";
import { Button } from "../styledComponents";

const SubmitButton = props => {
  const submitVotes = () => {
    props.updateHasVoted();
  };

  const renderGreyedOutButton = () => {
    console.log(props.remainingVotes);

    return <Button greyed>Submit Votes</Button>;
  };

  const renderSelectableButton = () => {
    return <Button onClick={submitVotes}>Submit Votes</Button>;
  };

  const renderView = () => {
    if (props.remainingVotes > 0 || props.hasVoted)
      return renderGreyedOutButton();
    return renderSelectableButton();
  };

  return <Fragment>{renderView()}</Fragment>;
};

export default SubmitButton;
