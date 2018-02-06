import React from 'react';
import one from '../images/CW/CW-min-1.png';
import two from '../images/CW/CW-min-2.png';
import three from '../images/CW/CW-min-3.png';
import four from '../images/CW/CW-min-4.png';
import five from '../images/CW/CW-min-5.png';
import six from '../images/CW/CW-min-6.png';

import {priceHeader} from '../data/CWpricelist';
import priceSource from '../data/CWpricelist';
import LocationPage from '../components/LocationPage';


class CW extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"COLLINGWOOD HOSTEL",
            address:"176 Hoddle St, Abbotsford VIC 3067",
            imagesArr:[one,two,three,four,five,six],
            details:`OZiHOUSE Collingwood Hostel is a Student Accommodation / Backpacker hostel in the heart of Melbourne’s 
            cosmopolitan, character filled suburb of Collingwood.
            OZiHOUSE Collingwood Hostel located at  Hoddle Street, Collingwood offers 
            dorm rooms with plenty of space and privacy.
            Our rooms are designed to provide students with the perfect environment to study, and rest. 
            
            `,
             directions:`<p>Train: 8 minutes to South Yarra Station.</p>
             <p>Bus: 1 minutes to Bus Stop</p>
             <p>Tram: Takes 15 minutes to city</p>
             <p>Train: 4 minutes from Ozihouse and takes 15 minutes to city.</p>
             `,
             amenities:`<p>Free Unlimited Wifi</p>
             <p>Entertainment Area</p>
             <p>Self study area</p>
             <p>Bicycle parking area</p>
             <p>50 inch plasma TVs</p>
             <p>Security lockers/ cameras</p>
             <p>Free bank account opening assistance</p>
             <p>High speed Wifi Internet access</p>`
        }        
    }
    render(){
        return (
            <LocationPage name={this.state.name} address={this.state.address} imagesArr={this.state.imagesArr}
            details={this.state.details} priceSource={priceSource} priceHeader={priceHeader} directions={this.state.directions}
            amenities={this.state.amenities}/>
        );
    }
}

export default CW;

//name
//address
//imagesArr
//details
//priceSource
//tableHeader (i.e. columns)
//directions
//amenities