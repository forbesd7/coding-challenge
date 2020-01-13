import React, { Component } from "react";
import { Button, ButtonContainer } from "../../styledComponents";

class UserStates extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ButtonContainer>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
      </ButtonContainer>
    );
  }
}

export default UserStates;
