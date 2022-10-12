import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
class MovieRecommendations extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        let id = this.props.match.params.movie_id
        let url = 'https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key=3327de82c58bbb5e77470af2495090c6&language=en-US&page=1'
        axios.get(url).then(res => {


            this.setState({
                movies: res.data.results.slice(0, 5)
            })
            console.log(this.state)
        })


    }
    render() {
        let movieRecommendations = {
            paddingTop: '2em',
            width: '90%',
            margin: '0 auto',
            overflowX: 'scroll',
            display: 'grid',
            gap: '0.7em',
            justifyItems: 'center',
            gridTemplateColumns: `repeat(${this.state.movies.length}, 1fr)`
        }
        let movieStats = {

            display: 'flex',
            flexDirection: 'column',
        }
        let movieStatsInfo = {
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '10px'
        }
        let title = {
            padding: '10px',
            fontSize: '2em',
            fontFamily: 'montserat'
        }
        let image = {
            borderRadius: '5px'
        }
        let movie = this.state.movies.map((movie, index) => {
            let backgroundImage = 'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path
            return (
                <div style={movieStats}>
                    <img style={image} src={backgroundImage} />
                    <span style={movieStatsInfo}>
                        <p>{movie.title}</p>
                        <p>{movie.vote_average}</p>
                    </span>
                </div>
            )
        })
        return (
            <div>
                <h1 style={title}>Recommendations</h1>
                <div style={movieRecommendations}>
                    {movie}
                </div>
            </div>
        )
    }
}

export default withRouter(MovieRecommendations)
