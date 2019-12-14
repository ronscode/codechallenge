import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8e9acca9")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log(this.state)
          console.log("and..." + this.state.items.Title)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(items)
      return (
        <div style={{ width: '60%' }} >
          <p>Code Challenge</p>
          <p>Title: {this.state.items.Title}</p>
          <p>Title: {this.state.items.Year}</p>
          <p>Plot {this.state.items.Plot}</p>
        </div>
      );
    }
  }
}

export default Movies;