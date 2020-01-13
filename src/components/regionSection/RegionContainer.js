import React, { Component, Fragment } from "react";
import { Title, SubTitle, ButtonContainer } from "../../styledComponents";
import Region from "./Region";

const REGIONS = ["South East Asia", "Japan", "Taiwan", "Hong Kong"];

class RegionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  render() {
    return (
      <Fragment>
        <Title>Results of voting for each region</Title>
        <SubTitle>Select your region to browse players.</SubTitle>
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
