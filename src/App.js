import React, { Component } from 'react';
import MovieCard from './MovieCard.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appebN5ZriniJ22Cy/favorirtes?api_key=key7UGQWikZTAtvzd')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: data.records });
    }).catch(err => {
      // Error
    });
  }
  
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card-deck">
            {this.state.movies.map(movie => <MovieCard {...movie.fields} /> )}            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;