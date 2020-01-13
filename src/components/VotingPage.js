import React, { Component } from "react";
import { MainContainer, Title, SubTitle } from "../styledComponents";
import UserStates from "./userStateSection/UserStates";
import RegionContainer from "./regionSection/RegionContainer";

const USERSTATES = ["Logged In", "Admin", "Logged out"];

class VotingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedUserState: USERSTATES[0] };
  }

  updateSelectedUserState = selectedUserState => {
    this.setState({ selectedUserState: selectedUserState });
  };

  render() {
    return (
      <MainContainer>
        <UserStates
          selectedUserState={this.state.selectedUserState}
          updateSelectedUserState={this.updateSelectedUserState}
        />
        <RegionContainer />
        <SubTitle>
          The top 3 vote earners in each region make up that region's team.
        </SubTitle>
      </MainContainer>
    );
  }
}

export default VotingPage;
