import React, { Component } from 'react'
import Search from './Components/Search'
import './App.css'
import axios from 'axios'
import Movies from './Components/Movies'
import Movie from './Components/Movie'
import Sort from './Components/Sort'
import HomeButton from './Components/HomeButton'
import { BrowserRouter, Route } from 'react-router-dom'
import FilterMovies from './Components/FilterMovies'

class App extends Component {
  state = {
    movies: [],
    genres: [],
    director: [],
    cast: [],
    count: 18
  }
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3327de82c58bbb5e77470af2495090c6&language=en-US').then(res => {
      console.log(res)
      let movies = res.data.results.slice(0, this.state.count)
      this.setState({
        movies: movies
      })

    })
  }
  handleUpdateMovie = (movies) => {
    this.setState({
      movies: movies
    })

  }
  handleHome = () => {
    this.componentDidMount()
  }
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <h1>Movielex</h1>
          <div className='sort'>
            <HomeButton handleHome={this.handleHome} />
            <Search UpdateMovie={this.handleUpdateMovie} />
            <Sort UpdateMovie={this.handleUpdateMovie} />
          </div>
          <FilterMovies className='App' UpdateMovie={this.handleUpdateMovie} />
          <Route exact path='/' render={(props) => <Movies {...props} state={this.state} />} />
          <Route path="/:movie_id" component={Movie} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
