import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  ajaxReq() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://jsonplaceholder.typicode.com/users", true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var jsonResponse = JSON.parse(xhr.responseText);
        this.setState({
          data: jsonResponse
        });
      }
    };

    xhr.send();
  }

  render() {
    let things = this.state.data;
    let listThings = things.map(thing =>
      <div>
        {thing.id}
      </div>
    );

    return (
      <div>
        <h1>About</h1>
        {this.state.data}
        <button onClick={this.ajaxReq.bind(this)}>Click me</button>
      </div>
    );
  }
}

export default About;
