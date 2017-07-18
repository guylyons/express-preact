import React from "react";

class UsStates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "Search a state",
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
    console.log(returnArray);
    this.setState({
      statesNew: returnArray
    });
  }
  render() {
    const statesNew = this.state.statesNew;
    const statesNewItems = statesNew.map((state, index) =>
      <li key={index}>
        {state}
      </li>
    );
    const states = this.state.states;
    const stateItems = states.map((state, index) =>
      <li key={index}>
        {state}
      </li>
    );
    return (
      <div>
        <h2>US States component</h2>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <ul>
          {statesNewItems}
        </ul>
      </div>
    );
  }
}

export default UsStates;
