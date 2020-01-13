import React, { Component } from "react";
import { MainContainer, SubTitle } from "../styledComponents";
import UserStates from "./userStateSection/UserStates";
import RegionContainer from "./regionSection/RegionContainer";
import PlayersContainer from "./playerSection/PlayersContainer";

const USERSTATES = ["Logged In", "Admin", "Logged out"];
const REGIONS = ["South East Asia", "Japan", "Taiwan", "Hong Kong"];

class VotingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: USERSTATES[0],
      selectedRegion: REGIONS[0]
    };
  }

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

  render() {
    return (
      <MainContainer>
        <UserStates
          selectedUserState={this.state.selectedState}
          updateSelectedState={this.updateSelectedState}
        />
        <RegionContainer
          selectedRegion={this.state.selectedRegion}
          updateSelectedRegion={this.updateSelectedRegion}
        />
        <SubTitle>
          The top 3 vote earners in each region make up that region's team.
        </SubTitle>
        <PlayersContainer selectedRegion={this.state.selectedRegion} />
      </MainContainer>
    );
  }
}

export default VotingPage;
