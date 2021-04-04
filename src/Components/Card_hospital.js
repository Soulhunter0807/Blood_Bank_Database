import React from 'react'

// Icons
import { FaLocationArrow } from 'react-icons/fa'

// Images 
import image from './../Assets/hospital.webp'

// SCSS
import './../SCSS/Card_hospital.scss'

// Components 
import { BloodAvailaible } from './../Components/Blood_availaible'

export const CardHospital = () => {
    return (
        <div className = "card1-container">
            
            <div className = "card1-wrap">

                <div className = "card1-details">

                    <div className = "card-hospital-details">
                        
                        <div> Rakesh Store </div>

                        <div>
                            <FaLocationArrow/> 
                            Lal Bungla Ahirwan Chakeri Kanpur
                        </div>

                    </div>

                    <div className = "card1-image">

                        <div className = "card1-image-container">
                            <img src = { image } alt = "Profile"></img>    
                        </div>
                    </div>

                </div>

                <div className = "card1-blood-availaible">

                    <div className = "card1-label"> Availaible Blood Types </div>
                    <div className = "bloodAvalaibilityCards">
                        <BloodAvailaible/>
                        <BloodAvailaible/>
                        <BloodAvailaible/>
                       
                    </div>

                </div>
                
            </div>
        </div>
    )
}