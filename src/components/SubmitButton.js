import React, { Fragment } from "react";
import { Button } from "../styledComponents";
import { playerData } from "../data/players_teams";

const SubmitButton = props => {
  const submitVotes = () => {
    addVotes(props.selectedPlayers);
    props.updateHasVoted();
  };

  const addVotes = selectedPlayerNames => {
    playerData.forEach(player => {
      for (let playerName of selectedPlayerNames) {
        if (playerName === player.nickname) {
          player.likeCount++;
        }
      }
    });
  };

  const renderGreyedOutButton = () => {
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
