import React from 'react';
// Components
import HomepageSection from '../../Components/HomepageSection';

// Parametres
import { homeObjOne, homeObjTwo } from './Data';

const Homepage = props => {
    return (
        <>
        <HomepageSection {...homeObjOne}/>
        <HomepageSection {...homeObjTwo}/>
        <HomepageSection {...homeObjOne}/>
        <HomepageSection {...homeObjTwo}/>
        </>
    );
};

export default Homepage;