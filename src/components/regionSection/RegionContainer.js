import React, { Component, Fragment } from "react";
import {
  Title,
  SubTitle,
  Button,
  ButtonContainer
} from "../../styledComponents";
class RegionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Title>Results of voting for each region</Title>
        <SubTitle>Select your region to browse players.</SubTitle>
        <ButtonContainer>
          <Button>South East Asia</Button>
          <Button>Japan</Button>
          <Button>Taiwan</Button>
          <Button>Hong Kong</Button>
        </ButtonContainer>
      </Fragment>
    );
  }
}

export default RegionContainer;
