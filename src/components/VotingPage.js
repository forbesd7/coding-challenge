import React, { Component } from "react";
import { MainContainer, Title, SubTitle } from "../styledComponents";

class VotingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MainContainer>
        <Title>Results of voting for each region</Title>
        <SubTitle>Select your region to browse players.</SubTitle>
        <SubTitle>
          The top 3 vote earners in each region make up that region's team.
        </SubTitle>
      </MainContainer>
    );
  }
}

export default VotingPage;
