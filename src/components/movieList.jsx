import React from 'react'

const MovieList = (props) => {
    return (
        <div className="container">
            {props.movies.map((movie, index)=> (
                <div className='movie-container'>
                    <img src={movie.Poster} className='poster' alt='movie'></img>
                    <span>{movie.Title}</span>
                    <span>{movie.Year}</span>
                </div>   
            ))}
        </div>
    )
}

export default MovieList;