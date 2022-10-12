import React, { Component } from 'react';
import '../App.css'
import axios from 'axios';

class FilterMovies extends Component {

    state = {
        filterYear: '1900',
        filterVote: '1',
        genre: ''
    }
    handleYearChange = (event) => {
        this.setState({
            filterYear: event.target.value
        })
    }
    handleVoteChange = (event) => {
        this.setState({
            filterVote: event.target.value
        })
    }
    handleGenre = (event) => {
        this.setState({
            genre: event.target.value
        })
        console.log(this.state.genre)
    }
    handleSearch = (event) => {
        let url = 'https://api.themoviedb.org/3/discover/movie?api_key=3327de82c58bbb5e77470af2495090c6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=' + this.state.filterYear + '&release_date.gte=' + this.state.filterVote + '&with_genres=' + this.state.genre + ''
        axios.get(url).then(res => {
            let movies = res.data.results.slice(0, 12)
            this.props.UpdateMovie(movies)
        })
    }
    render() {
        let filterWrapper = {
            backgroundColor: 'white',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '80%',
            borderRadius: '10px',
            margin: '0 auto',
            boxShadow: '0 23px 97px -15px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3)',
            padding: '10px',
            marginBottom: '1em',
            marginTop: '1em'

        }
        let button = {
            width: '10%',
            border: 'none',
            backgroundColor: '#4286f4',
            color: 'white',
            borderRadius: '10px',
            padding: '0.5em 2em',
            fontFamily: 'montserat-medium',
            boxShadow: '0 3px 7px -5px rgba(50, 50, 93, .25), 0 8px 6px -8px rgba(0, 0, 0, .3)',
            alignSelf: 'center',
            margin: '1em'
        }
        let grid = {
            width: '70%',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 4fr',
            gridTemplateRows: '1fr 1fr1 1fr',

        }
        let filterNames = {
            display: 'grid',
            gap: '1em',
            alignSelf: 'space-around',
            alignItems: 'center'
        }
        let filterOptions = {
            display: 'grid',
            gap: '1em',
            width: '100%',
            justifySelf: 'start',
        }
        let first = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridTemplateRows: '1fr',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
        let second = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridTemplateRows: '1fr',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
        let slider = {
            width: '30em'
        }
        let counter = {
            backgroundColor: 'white',
            width: '100%',
            borderRadius: '10px',
            boxShadow: '0 3px 7px -5px rgba(50, 50, 93, .25), 0 8px 6px -8px rgba(0, 0, 0, .3)',
            fontSize: '1.7em'
        }
        return (
            <div style={filterWrapper}>
                <div style={grid}>
                    <div style={filterNames}>
                        <p>Genres</p>
                        <p>Release Year:</p>
                        <p>Average Vote:</p>
                    </div>
                    <div style={filterOptions}>
                        <select onChange={this.handleGenre}>
                            <option>All</option>
                            <option value='28'>Action</option>
                            <option value='12'>Adventure</option>
                            <option value='16'>Animation</option>
                            <option value='35'>Comedy</option>
                            <option value='80'>Crime</option>
                            <option value='99'>Documentary</option>
                            <option value='18'>Drama</option>
                            <option value='10751'>Family</option>
                            <option value='14'>Fantasy</option>
                            <option value='36'>History</option>
                            <option value='27'>Horror</option>
                            <option value='10402'>Music</option>
                            <option value='9648'>Mystery</option>
                            <option value='10749'>Romance</option>
                            <option value='878'>Science Fiction</option>
                            <option value='53'>Thriller</option>
                            <option value='10752'>War</option>
                            <option value='37'>Western</option>
                        </select>
                        <div style={first}>
                            <p>1900</p>
                            <input style={slider} type="range" min="1900" max="2019" class="slider" id="myRange" value={this.state.filterYear} onChange={this.handleYearChange} />
                            <p>2019</p>
                            <span style={counter}>{this.state.filterYear}</span>
                        </div>

                        <div style={second}>
                            <p>1</p>
                            <input style={slider} type="range" min="1" max="10" class="slider" id="myRange" value={this.state.filterVote} onChange={this.handleVoteChange} />
                            <p>10</p>
                            <span style={counter}>{this.state.filterVote}</span>
                        </div>
                    </div>
                </div>
                <button onClick={this.handleSearch} style={button}>Search</button>
            </div>
        )
    }
}

export default FilterMovies