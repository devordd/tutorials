import React from 'react'
import '../App.css'

const MovieVideo = (props) => {
  console.log(props.movieKey)
  let videoPlayer = {
    paddingTop: '2em',
    width: '90%',
    margin: '0 auto',
    overflowX: 'scroll',
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: `repeat(${props.movieKey.length}, 1fr)`

  }
  return (
    <div style={videoPlayer}>
      {props.movieKey.map((movie, index) => {
        let url = 'https://www.youtube.com/embed/' + movie.key
        return (
          <iframe width='560' height='315' src={url} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
        )
      })

      }
    </div>
  )
}

export default MovieVideo
