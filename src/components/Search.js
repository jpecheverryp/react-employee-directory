import React from "react"

function Search(props) {
    return (
        <input 
        placeholder="Search"
        onChange={(e) => props.handleSearchChange(e)}
        >
        </input>
    )
}

export default Search;