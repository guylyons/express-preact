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
      ]
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
    // loop thru the array
    for (var i = 0; i < array.length; i++) {
      // see if there is a match
      if (array[i].includes(value)) {
        returnArray.push(i);
        // there is? sweet!
        console.log("bingo! @ index: " + i);
      }
    }
    console.log(returnArray);
  }
  render() {
    const states = this.state.states;
    const stateItems = states.map((state, index) =>
      <li key={index}>
        {state}
      </li>
    );
    return (
      <div>
        <h2>US States component</h2>
        <p>State search</p>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <p>
          {this.state.result}
        </p>
        <ul>
          {stateItems}
        </ul>
      </div>
    );
  }
}

export default UsStates;
