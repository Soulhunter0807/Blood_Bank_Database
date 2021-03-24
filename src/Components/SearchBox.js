import React from 'react'

// SCSS
import './../SCSS/SearchBox.scss'

// ICons
import { FaSearch } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Color = ['Black','Green','Blue']

export const SearchBox = ({hint, border_color}) => {
    
    const CheckBoxColor = Color.includes(border_color) ? border_color : Color[0];

    return (
        <IconContext.Provider value = {{color: "#fff"}}>
            
        <div class = "searchBox-container">

            <input 
                type = "search"
                placeholder = {hint}
                autoComplete = "on"
                className = {`input-box ${CheckBoxColor}`}
            />

            <span class = {`icon ${CheckBoxColor}`}>
                <FaSearch/>
            </span>

        </div>

        </IconContext.Provider>
    )
}