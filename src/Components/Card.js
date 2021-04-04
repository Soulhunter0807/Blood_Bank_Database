import React from 'react'

// Components
import { Button } from './Button'

// Icons
import { FaShoppingCart } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'

// SCSS
import './../SCSS/Card.scss'

// card-logo
import image from './../Assets/hospital.webp'

export const Card = ({Name, Desc, type, cnt, distance, location, img}) => {

    return (
        <div className = "card-container">
            
            <div class = "card-logo">
                <img src = {image} className = "card-img-container"></img>
            </div>

            <div className = "card-description">
                <div className = "card-name">
                    <span>
                        Rakesh Store
                    </span>
                    <span >
                        Lal bungla Chakeri Kanpur
                    </span>
                    <span>
                        2 units Availaible
                    </span>
                </div>
                
                <div className = "card-buttons">
                        
                    <Button buttonStyle = "btn--icon" buttonColor = "icon--blue">
                        <FaShoppingCart/>
                    </Button>
    
                    <Button buttonStyle = "btn--icon" buttonColor = "icon--green">
                        <FaPhoneAlt/>
                    </Button>
                    

                </div>

            </div>

        </div>
    )
}