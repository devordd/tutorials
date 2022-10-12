import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import { Link, NavLink, withRouter } from 'react-router-dom'

class Movies extends Component {
  state = {
    genres: [],
    director: [],
    cast: []
  }

  /* query for each movie to get more in depth details */


  handleRoute = (route) => {
    this.props.history.push('/' + route)
  }
  render() {
    console.log(this.props.state)
    const { movies } = this.props.state
    console.log(movies)

    let movie = movies.map((movie, index) => {

      if (movie.poster_path == null) {
        return (null)
      } else {
        let url = 'https://image.tmdb.org/t/p/w185/' + movie.poster_path
        return (
          <div onClick={() => { this.handleRoute(movie.id) }} key={movie.id}>
            <div className='movie'>
              <img className='poster' src={url} />
              <div className="movie-info">
                <span>
                  <p className='movie-rating '>{movie.vote_average} <meter min="0" low="4" high="7" max="10" value={movie.vote_average}></meter></p>
                  <p className='movie-title'>{movie.title}</p>
                  <hr />
                  <p className='movie-release'>{movie.release_date}</p></span>
                <p className='movie-overview'>{movie.overview.substring(0, 400)}</p>
              </div>
            </div>
          </div >
        )
      }
    })
    console.log(movies)
    return (
      <div className='wrapp'>
        {movie}
      </div>
    )
  }
}
export default withRouter(Movies)
