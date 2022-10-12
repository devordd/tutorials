import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const HomeButton = (props) => {
  let handleRoute = () => {
    props.history.push('/')
    props.handleHome()
  }
  let button = {
    border: 'none',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '0.5em 2em',
    fontFamily: 'montserat',
    boxShadow: '0 3px 7px -5px rgba(50, 50, 93, .25), 0 8px 6px -8px rgba(0, 0, 0, .3)'
  }
  return (

    <button style={button} onClick={handleRoute}>HOME</button>
  )
}

export default withRouter(HomeButton)
