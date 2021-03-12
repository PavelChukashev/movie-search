import React, { useState, useEffect } from 'react';
import Header from './header'
import SearchBox from './searchBox'
import MovieList from './movieList'
import Footer from './footer'



const Main = () => {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('')

    var getMovie = async (searchValue) => {
        let url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1727d32d`;

        let response = await fetch(url);
        let responseJSON = await response.json();

        if (responseJSON.Search) {
            setMovies(responseJSON.Search)
        }
    }

    useEffect(() => {
        getMovie(searchValue);
    }, [searchValue])

    return (
        <div className='main-container'>
            <Header title='Movie Search'/>
            <div className="result-container">
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                <MovieList movies={movies}/>
            </div>
            <Footer />
        </div>
    )    
}

export default Main;