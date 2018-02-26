import React from 'react';
import Location from '../components/Location';
import SY from '../images/SY-min.png';
import VSY from '../images/VSY-min.png';
import CW from '../images/CW-min.png';
import VC from '../images/VC-min.png';
import Link from 'gatsby-link';

const Ozihouse = () => (
    <div>
    <p>Melbourne's leading Student Services and Accommodation provider with 4 properties in Melbourne.</p>
    <p>Room types and prices to match your needs</p>
    <h2>Locations</h2>
    <br/>
    <div className="container" style={{display:`flex`, maxWidth:1300, flexWrap:'wrap'}}>
    <Link to="/VC/"><Location image={VC}  name="Village City" address="38 Howard St. North Melbourne"/></Link>
    <Link to="/VSY/"><Location image={VSY}  name="Village South Yarra" address="420 Punt Road South Yarra"/></Link>
    <Link to="/SY/"><Location image={SY}  name="South Yarra Hostel" address="733 Punt Road South Yarra"/></Link>
    <Link to="/CW/"><Location image={CW}  name="Collingwood Hostel" address="Hoddle Street Abbotsford"/></Link>
    </div>

    </div>
);


export default Ozihouse;