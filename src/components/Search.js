import React from "react"

function Search(props) {
    return (
        <input 
        placeholder="Search Name or Email"
        onChange={(e) => props.handleSearchChange(e)}
        style={{
            margin: '1rem auto',
            display: 'block'
        }}
        >
        </input>
    )
}

export default Search;