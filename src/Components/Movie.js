import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import CastMembers from './CastMembers'
import MovieVideo from './MovieVideo'
import MovieRecommendations from './MovieRecommendations';

class Movie extends Component {
  state = {
    title: '',
    overview: '',
    release: '',
    revenue: '',
    budget: '',
    genres: [],
    backdrop: '',
    vote_average: '',
    vote_count: '',
    language: '',
    runtime: '',
    id: '',
    cast: [],
    crew: [],
    video: []
  }
  componentDidMount() {
    let id = this.props.match.params.movie_id
    this.setState({
      id: id
    })
    axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=3327de82c58bbb5e77470af2495090c6&append_to_response=videos').then(res => {
      console.log(res.data)
      this.setState({
        overview: res.data.overview,
        title: res.data.original_title,
        release: res.data.release_date,
        revenue: res.data.revenue,
        budget: res.data.budget,
        genres: res.data.genres,
        poster: res.data.poster_path,
        backdrop: res.data.backdrop_path,
        vote_average: res.data.vote_average,
        vote_count: res.data.vote_count,
        language: res.data.original_language,
        runtime: res.data.runtime,
        video: res.data.videos.results

      })
      return axios.get('https://api.themoviedb.org/3/movie/' + this.state.id + '/credits?api_key=3327de82c58bbb5e77470af2495090c6')
    }).then(res => {
      console.log(res.data)
      this.setState({
        cast: res.data.cast.slice(0, 5),
        crew: res.data.crew.slice(0, 3)
      })
    })
  }
  render() {
    console.log(this.state)
    let backgroundImage = 'https://image.tmdb.org/t/p/w1280/' + this.state.backdrop
    let posterImage = 'https://image.tmdb.org/t/p/w342/' + this.state.poster
    let poster = {
      borderRadius: '15px',
      padding: '10px'
    }

    return (
      <div>
        <div className='movie-details-layout' >
          <img style={poster} src={posterImage} />
          <div className='movie-details'>
            <h1 className='testing'>{this.state.title}</h1>
            <span className='movie-basic-info'>
              <p>{this.state.release}</p>
              <p>{this.state.runtime}</p>
              {this.state.genres.map((genre, index) => {
                return (
                  <p>{genre.name}-</p>
                )
              })}
            </span>
            <h2>Overview</h2>
            <p className='movie-details-overview'>{this.state.overview}</p>
            <h2>Featured Crew</h2>
            <div className='movie-details-crew'>
              {this.state.crew.map((castMemeber, index) => {
                return (
                  <span >
                    <h1>{castMemeber.name}</h1>
                    <p>{castMemeber.job}</p>
                  </span>

                )
              })}
            </div>
          </div>
        </div>
        <CastMembers state={this.state} />
        <MovieVideo movieKey={this.state.video} />
        <MovieRecommendations movieId={this.state.id} />
      </div >
    )
  }
}

export default withRouter(Movie)
