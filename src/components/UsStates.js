import React from "react";
import { Button, Col } from "react-bootstrap";

class UsStates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "Search a state",
      numStates: 0,
      searchTerm: "",
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      statesNew: []
    };
  }

  handleCopy(e) {
    alert("Copied!!!!!!!!");
  }

  handleChange(e) {
    var states = this.state.states;
    var value = e.target.value;

    this.matchFinder(value, states);
  }
  matchFinder(value, array) {
    var returnArray = array.filter(function(arrayIndex) {
      value = value.toLowerCase();
      arrayIndex = arrayIndex.toLowerCase();
      return arrayIndex.includes(value);
    });

    this.setState((prevState, currentProps) => {
      return {
        statesNew: returnArray,
        searchTerm: value,
        numStates: returnArray.length
      };
    });
  }
  render() {
    const statesNew = this.state.statesNew;
    const statesNewItems = statesNew.map((state, index) =>
      <Button className="statesNewItems__item" key={index}>
        {state}
      </Button>
    );

    return (
      <div>
        <Col md={6}>
          <h2 onCopy={this.handleCopy}>US States component</h2>
          <input type="text" onChange={this.handleChange.bind(this)} />
          <br />
          <h3>
            Number of States that contain{" "}
            <strong>{this.state.searchTerm}</strong>
            <br />
            {this.state.numStates}
          </h3>
        </Col>
        <Col md={6}>
          <div className="statesNewItems">
            <h1>
              {this.state.searchTerm}
            </h1>
            {statesNewItems}
          </div>
        </Col>
      </div>
    );
  }
}

export default UsStates;
