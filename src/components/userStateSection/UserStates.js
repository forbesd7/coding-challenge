import React, { Component, Fragment } from "react";
import { SubTitle, ButtonContainer } from "../../styledComponents";
import UserState from "./UserState";
const USERSTATES = ["Logged In", "Admin", "Logged out"];

class UserStates extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedUserState: USERSTATES[0] };
  }

  // updateSelectedUserState = selectedUserState => {
  //   this.setState({ selectedUserState: selectedUserState });
  // };

  render() {
    return (
      <Fragment>
        <SubTitle>Select your user state.</SubTitle>
        <ButtonContainer>
          {USERSTATES.map((userState, index) => {
            if (this.props.selectedUserState === userState) {
              return (
                <UserState
                  selected="true"
                  updateSelectedUserState={this.props.updateSelectedUserState}
                  key={index}
                  userState={userState}
                />
              );
            }
            return (
              <UserState
                updateSelectedUserState={this.props.updateSelectedUserState}
                key={index}
                userState={userState}
              />
            );
          })}
        </ButtonContainer>
      </Fragment>
    );
  }
}

export default UserStates;
