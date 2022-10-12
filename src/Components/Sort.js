import React from 'react'
import '../App.css'
import axios from 'axios'

const Sort = (props) => {
  let handleSort = (e) => {
    e.preventDefault()
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=3327de82c58bbb5e77470af2495090c6&language=en-US&sort_by=' + e.target.value + '&page=1&vote_count.gte=100'
    axios.get(url).then(res => {
      let movies = res.data.results
      props.UpdateMovie(movies)
      console.log(movies)
    })
  }
  let sortStyle = {
    border: 'none',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '0.5em 2em',
    fontFamily: 'montserat',
    boxShadow: '0 3px 7px -5px rgba(50, 50, 93, .25), 0 8px 6px -8px rgba(0, 0, 0, .3)'
  }
  return (
    <form onChange={handleSort}>
      <select style={sortStyle} id='country' name='country'>

        <option value='release_date.desc'>Date Released</option>
        <option value='popularity.asc'>Popularity</option>
        <option value='vote_average.desc'>Rating</option>
      </select>
    </form>
  )
}

export default Sort
