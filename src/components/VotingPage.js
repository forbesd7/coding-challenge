import React, { Component, Fragment } from "react";
import { MainContainer, SubTitle } from "../styledComponents";
import UserStates from "./userStateSection/UserStates";
import RegionContainer from "./regionSection/RegionContainer";
import PlayerContainer from "./playerSection/PlayerContainer";
import SubmitButton from "./SubmitButton";

const USERSTATES = ["Logged In", "Admin", "Logged out"];
const REGIONS = ["South East Asia", "Japan", "Taiwan", "Hong Kong"];

class VotingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: USERSTATES[0],
      selectedRegion: REGIONS[0],
      votingClosed: false,
      remainingVotes: 3,
      hasVoted: false,
      selectedPlayers: []
    };
  }

  updateHasVoted = () => {
    this.setState({ hasVoted: true });
  };
  toggleVoting = () => {
    this.setState({ votingClosed: !this.state.votingClosed });
  };

  updateSelectedState = selectedState => {
    this.setState({
      selectedState
    });
  };

  updateSelectedRegion = selectedRegion => {
    this.setState({
      selectedRegion: selectedRegion
    });
  };

  updateVotes = voteAdjustment => {
    let curVotes = this.state.remainingVotes;
    if (voteAdjustment === "increment") {
      curVotes++;
      this.setState({ remainingVotes: curVotes });
    } else if (voteAdjustment === "decrement") {
      curVotes--;
      this.setState({ remainingVotes: curVotes });
    }
  };

  updateSelectedPlayers = selectedPlayers => {
    this.setState({ selectedPlayers });
  };

  renderVotesAndSubmitButton = () => {
    if (this.state.selectedState === "Logged In") {
      return (
        <Fragment>
          <SubTitle>Remaining Votes: {this.state.remainingVotes}</SubTitle>
          <SubmitButton
            updateHasVoted={this.updateHasVoted}
            hasVoted={this.state.hasVoted}
            selectedPlayers={this.state.selectedPlayers}
            remainingVotes={this.state.remainingVotes}
          >
            Submit Votes
          </SubmitButton>
        </Fragment>
      );
    }
    return;
  };

  render() {
    return (
      <MainContainer>
        <UserStates
          selectedState={this.state.selectedState}
          updateSelectedState={this.updateSelectedState}
          toggleVoting={this.toggleVoting}
          votingClosed={this.state.votingClosed}
        />
        <RegionContainer
          selectedState={this.state.selectedState}
          votingClosed={this.state.votingClosed}
          selectedRegion={this.state.selectedRegion}
          updateSelectedRegion={this.updateSelectedRegion}
        />
        <SubTitle>
          The top 3 vote earners in each region make up that region's team.
        </SubTitle>
        {this.renderVotesAndSubmitButton()}
        <PlayerContainer
          hasVoted={this.state.hasVoted}
          updateSelectedPlayers={this.updateSelectedPlayers}
          updateVotes={this.updateVotes}
          selectedState={this.state.selectedState}
          votingClosed={this.state.votingClosed}
          selectedRegion={this.state.selectedRegion}
        />
      </MainContainer>
    );
  }
}

export default VotingPage;
