import React, { Component } from "react";
import { Button, ButtonContainer } from "../../styledComponents";
class RegionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ButtonContainer>
        <Button>South East Asia</Button>
        <Button>Japan</Button>
        <Button>Taiwan</Button>
        <Button>Hong Kong</Button>
      </ButtonContainer>
    );
  }
}

export default RegionContainer;
