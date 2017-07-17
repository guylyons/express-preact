import React from "react";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = "http://jsonplaceholder.typicode.com/posts";
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }

  render() {
    const posts = this.state.posts;
    const postItems = posts.map((post, index) =>
      <div key={index}>
        <h2>
          {post.title}
        </h2>
        <p>
          {post.body}
        </p>
      </div>
    );

    return (
      <div>
        <h1>Posts</h1>
        <p>Below is an example of rendering posts from an API endpoint</p>
        <hr />
        {postItems}
      </div>
    );
  }
}

export default Posts;
