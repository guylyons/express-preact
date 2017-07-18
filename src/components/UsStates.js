import React from "react";
import { Button, Col, ProgressBar } from "react-bootstrap";

class UsStates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "Search a state",
      percentage: 0,
      searchTerm: "Search the states!",
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
    var e = e.target;
    var states = this.state.states;
    var value = e.value;

    this.matchFinder(value, states);
  }
  matchFinder(value, array) {
    var returnArray = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i].includes(value)) {
        returnArray.push(array[i]);
      }
    }
    console.log(returnArray.length / 51);
    var newPercentage = returnArray.length / 51 * 100;

    this.setState({
      statesNew: returnArray,
      percentage: Math.round(newPercentage),
      searchTerm: value
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
        <h2 onCopy={this.handleCopy}>US States component</h2>
        <Col md={6}>
          <input type="text" onChange={this.handleChange.bind(this)} />
          <br />
          <h3>
            Percentage: {this.state.percentage}
          </h3>
          <ProgressBar bsStyle="info" now={this.state.percentage} />
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
