import React from 'react'


const SearchBox = (props) => {
    return (
        <div className="search">
            <input 
                type="text" 
                value={props.value} 
                onChange={(e)=> props.setSearchValue(e.target.value)}
                placeholder='Type to search'
            />
        </div>
    )
}

export default SearchBox;