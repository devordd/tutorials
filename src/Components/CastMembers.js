import React from 'react'
import '../App.css'

const CastMembers = (props) => {
    let title = {
        fontSize: '2em',
        padding: '10px'
    }
    return (
        <div>
            <h1 style={title}> Top Billed Cast</h1>
            <div className='cast'>
                {props.state.cast.map((castMemeber, index) => {
                    console.log(castMemeber)
                    let url = 'https://image.tmdb.org/t/p/w185/' + castMemeber.profile_path
                    return (
                        <div className='castMember'>
                            <img src={url} />
                            <p>{castMemeber.name}</p>
                            <h1>{castMemeber.character}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CastMembers
