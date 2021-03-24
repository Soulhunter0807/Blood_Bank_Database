import React, { Component } from 'react' 
import { SearchBox } from './../Components/SearchBox'

class Search extends Component {
    
    render() {
        return (
            <SearchBox hint = "Search" border_color = "Black"></SearchBox>
        )
    }
}

export default Search