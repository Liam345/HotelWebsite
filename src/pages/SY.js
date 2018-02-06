import React from 'react';
import one from '../images/SY/SY-1-min.png';
import two from '../images/SY/SY-2-min.png';
import {priceHeader} from '../data/CWpricelist';
import priceSource from '../data/CWpricelist';
import LocationPage from '../components/LocationPage';


class VC extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"South Yarra Hostel",
            address:"733 Punt Road, South Yarra VIC 3141",
            imagesArr:[one,two],
            details:`OZiHOUSE ViLLAGE CiTY is a purpose built contemporary student accommodation for international students 
            looking for an inner city lifestyle. It offers luxurious and stylish fit-outs for your enjoyment.
            It has a total of 23 bedrooms over 4 levels. There are various room types - Single, Twin shared
            and Double rooms mainly en-suite options. It comes fully furnished with bedding, robe, desk, chair and drawer unit.
            Features of the residence include a fully furnished common lounge, dining and cooking areas, great for socializing
            with OZiHOUSE Housemates and meeting new friends. All common areas are air conditioned and serviced by cleaning staff.
            `,
             directions:`<p>Located on the edge of Melbourne's CBD.</p>
             <p>walking distance of all major city based Universities and language schools.</p>
             <p>conveniently positioned among some of Melbourne's most well-known atractions, gardens and
                nightlife</p>
            <p>The iconic peoples market - Queen Victoria Market only a 5 min walk away.</p>
             <p>The FREE city tram is just around the corner from the accommodation </p>
             <p> Tram offers students the opportunity
              to get to any part of Melbourne's CBD free of charge at any time.</p>
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

export default VC;
