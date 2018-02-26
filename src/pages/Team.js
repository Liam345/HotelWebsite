import React from 'react';
import Person from '../components/Person';
import Yun from '../images/team/Yun.png'; 
import Josh from '../images/team/Josh.png'; 

const Team = () => (
    <div>
    <h2>Team </h2>
    <Person image={Yun} name="Seyun Kim" title="CEO"
    details="Seyun is the founder of OZiHOUSE Group, having established the company in 2013.
    He has been involved in the education industry for more than 10 years, working for
    Cambridge International College and Victoria University in Melbourne.
    Seyun has also worked within the accommodation industry for a number of years
    and has used his networking within the education industry to build OZiHOUSE Group
    into a well-known and successful student accommodation provider.
    He is currently based full-time in OZiHOUSE building up our business and partner
    connections. "
    />

    <Person image={Josh} name="Joshua Kaiwai" title="General Manager"
    details="Joshua is a key member in the establishment of OZiHOUSE Group.
    His professional experience within the accommodation industry includes previous
    roles at the Intercontinental Wellington, Sacred waters, Taupo, New Zealand and the
    Sheraton, Taipei, Taiwan. Josh has a breadth of local and international experience
    working throughout Asia over the last 10 years in Taiwan, Japan, and Hong Kong.
    Josh oversees the daily operations of OZiHOUSE group."
    />


    </div>
);

export default Team;