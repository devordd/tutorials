import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Search extends Component {
  state = {
    movie: ''
  }
  handleMovie = (e) => {
    let movie = e.target.value
    this.setState({
      movie: movie
    })
    console.log(this.state)
  }
  handleSearch = (e) => {
    this.props.history.push('/')
    e.preventDefault()
    let movie = this.state.movie
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=3327de82c58bbb5e77470af2495090c6&language=en-US&query=' + movie + '&page=1&include_adult=false'
    axios.get(url).then(res => {
      let movies = res.data.results.slice(0, 10)

      this.props.UpdateMovie(movies)
    })

  }

  render() {
    let formText = {
      border: 'none',
      borderRadius: '5px 0px 0px 5px',
      boxShadow: '0 3px 7px -5px rgba(50, 50, 93, .25), 0 8px 6px -8px rgba(0, 0, 0, .3)',
      padding: '0.5em  2em',

    }
    let formButton = {
      border: 'none',
      borderRadius: '0px 5px 5px 0px',
      boxShadow: '0 3px 7px -5px rgba(50, 50, 93, .25), 0 8px 6px -8px rgba(0, 0, 0, .3)',
      padding: '0.5em  2em',
      color: 'white',
      backgroundColor:'#4286f4'
    }
    return (
      <form >
        <input style={formText} onChange={this.handleMovie} type='text' placeholder='Movie name...' />
        <button style={formButton} onClick={this.handleSearch}>Search</button>
      </form>
    )
  }
}

export default withRouter(Search)
