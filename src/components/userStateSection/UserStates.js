import React, { Component, Fragment } from "react";
import { SubTitle, ButtonContainer, Button } from "../../styledComponents";
import UserState from "./UserState";
const USERSTATES = ["Logged In", "Admin", "Logged out"];

class UserStates extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedUserState: USERSTATES[0], test: "test" };
  }

  renderAdminButton = () => {
    if (this.props.selectedState === "Admin") {
      return (
        <ButtonContainer>
          <Button onClick={this.props.toggleVoting}>
            {this.props.votingClosed ? "Open Voting" : "Close Voting"}
          </Button>
        </ButtonContainer>
      );
    } else return;
  };

  render() {
    return (
      <Fragment>
        <SubTitle>Select your user state.</SubTitle>
        <ButtonContainer>
          {USERSTATES.map((userState, index) => {
            if (this.props.selectedState === userState) {
              return (
                <UserState
                  selected="true"
                  updateSelectedState={this.props.updateSelectedState}
                  key={index}
                  userState={userState}
                />
              );
            }
            return (
              <UserState
                updateSelectedState={this.props.updateSelectedState}
                key={index}
                userState={userState}
              />
            );
          })}
        </ButtonContainer>
        {this.renderAdminButton()}
      </Fragment>
    );
  }
}

export default UserStates;
