import React from 'react'
import './../SCSS/EditBox.scss'

const EditBox = ({ label, name, type}) => {
    return (
        <div className = 'wrap'>
            <p className = 'Label'> {label} </p>
            <input
                type = {type} 
                name = {name}
                autoComplete = 'off'
                className = 'Editbox'>
            </input>
        </div>
    )
}

export default EditBox