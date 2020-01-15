import React, { Component, Fragment } from "react";
import { Title, SubTitle, ButtonContainer } from "../../styledComponents";
import Region from "./Region";

const REGIONS = ["South East Asia", "Japan", "Taiwan", "Hong Kong"];

class RegionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { titleContent: "" };
  }

  renderSelectedButton = (curRegion, index) => {
    return (
      <Region
        selected
        updateSelectedRegion={this.props.updateSelectedRegion}
        key={index}
        regionName={curRegion}
      />
    );
  };

  renderButton = (curRegion, index) => {
    return (
      <Region
        updateSelectedRegion={this.props.updateSelectedRegion}
        key={index}
        regionName={curRegion}
      />
    );
  };

  renderTitle = () => {
    if (this.props.selectedState === "Logged In" && !this.props.votingClosed) {
      return "Vote for players to represent your region's team";
    } else {
      return "Results of voting for each region";
    }
  };
  render() {
    return (
      <Fragment>
        <Title>{this.renderTitle()}</Title>
        <SubTitle>Select your region to browse players.</SubTitle>
        <SubTitle>NOTE: You may only vote for one region.</SubTitle>

        <ButtonContainer>
          {REGIONS.map((region, index) => {
            if (region === this.props.selectedRegion) {
              return this.renderSelectedButton(region, index);
            }
            return this.renderButton(region, index);
          })}
        </ButtonContainer>
      </Fragment>
    );
  }
}

export default RegionContainer;
