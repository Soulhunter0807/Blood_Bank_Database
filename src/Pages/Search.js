import React, { Component } from 'react'

// Components
import { CardHospital } from './../Components/Card_hospital'
import GoogleMapReact from './../Components/GoogleMapReact'
import { BloodAvailaible }  from './../Components/Blood_availaible'
import { Button } from './../Components/Button'

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkedAlt } from 'react-icons/fa'

// SCSS
import './../SCSS/Search.scss'

class Search extends Component {
    render () {
        return (
            <div className = "search-wrapper">

                <div className = "search-cards">
                    <CardHospital/>
                    <CardHospital/>
                    <CardHospital/>
                    <CardHospital/>
                    <CardHospital/>
                    <CardHospital/>

                </div>

                <div className = "search-maps-container">

                    <div className = "search-hospital-location">
                        <GoogleMapReact/>
                    </div>

                    <div className = "search-buy-card">

                        <div className = "search-buy-card-desc">
                            
                            <div> Rakesh Store </div>
                            <div>
                                <FaMapMarkerAlt/>
                                Lal Bungla
                            </div>
                            <div> 
                                <FaPhoneAlt/>
                                +91-201422520
                            </div>
                            <div> 
                                <FaEnvelope/>
                                RakeshStore@iiitl.ac.in
                            </div>
            
                            <div> 
                                <FaClock/>
                                9:30am-10:30pm
                            </div>

                            <div>
                                <span> Status:</span>
                                <span>Open</span>
                            </div>
                        </div>

                        <div className = "search-buy-card-availaible">

                            <span>
                                Choose Blood Types
                            </span>
                            <div className = "search-buy-card-bloodAvalaibilityCards">
                                <BloodAvailaible/>
                                <BloodAvailaible/>
                                <BloodAvailaible/>
                                
                            </div>

                            <div className = "search-buy-card-button">
                                <Button buttonColor = "green" buttonSize = "btn--mobile"> Reserve </Button>
                            </div>
                        </div>

                    </div>
                </div>
               
            </div>
        )
    }
   
}

export default Search