import React from 'react';
import  {Card} from 'antd';
import { Table, Divider } from 'antd';
import  Slider  from 'react-slick';
import one from '../images/VSY/VSY-1-min.png';
import two from '../images/VSY/VSY-2-min.png';
import three from '../images/VSY/VSY-3-min.png';
import four from '../images/VSY/VSY-4-min.png';
import Carousel, {Decorators} from 'nuka-carousel';
import {priceHeader} from '../data/VSYpricelist';
import priceSource from '../data/VSYpricelist';

//head1
//address
//imagesArr
//Details
//Directions
//Amenities

const VSY = () => (
    <div>
    <h1>VILLAGE SOUTH YARRA</h1>
    <h5>420 Punt Road South Yarra, VIC 3141</h5>
    <Carousel decorators={Decorators}  slidesToShow={2}>
    <div ><img src={one} /></div>
    <div><img src={two} /></div>
    <div><img src={three} /></div>
    </Carousel>
    <div className="wrapper">
    <h5>DETAILS</h5>
    <p>
    OZiHOUSE Village is a LUXURY STUDENT ACCOMMODATION in the heart of Melbourne’s 
    most prestigious neighbourhood, South Yarra.
    OZiHOUSE Village located at  Punt Road, South Yarra is a recently renovated beautiful old mansion built
     in 1941 and transformed in to a luxury guest house in 2014.The Village offers premier twin and student 
     dorm rooms with plenty of space and privacy.
    Our rooms are designed to provide students with the perfect environment to study, and rest. 
    Each room comes with a study desk, lamp, large comfortable king single bed, flat screen TV, 
    large bay windows, beautiful wooden floors, plenty of storage space and much more.
    The Village is situated on a large beautifully landscaped property with plenty of outdoor spaces.
     The front of the property has a lovely secure garden area where students can relax, study and soak up the sun.
     The rear of the property has a parking, BBQ, Picnic benches and enough space to hold our Soccer competitions.
     </p>

    <Table columns={priceHeader} dataSource={priceSource} pagination={false} showHeader={true} />

    <div style={{ background: '#ECECEC', padding: '30px',display:`flex`, flexWrap:`wrap`,  justifyContent:`space-around` }}>
    <Card title="Directions" bordered={false}  >
      <p>Train: 8 minutes to South Yarra Station.</p>
      <p>Bus: 0 minutes to Bust Stop</p>
      <p>Tram: 1 minute to Tram No. 58</p>
      <p>20 minutes by tram or train to Melbourne CBD</p>
      <p>20 minutes by Bus to St Kilda beach</p>
      <p>Near Chapel Street</p>
    </Card>
    <Card title="Building Amenities" bordered={false} >
      <p>Free Unlimited Wifi</p>
      <p>Free Laundry Services</p>
      <p>Flat Screen TV's</p>
      <p>Heating and Cooling units</p>
      <p>Free Parking</p>
      <p>Outside BBQ and Sports area</p>
      <p>Large Dining and Entertainment area</p>
      <p>Large Secure property- 24 hour CCTV monitoring</p>
    </Card>
    </div>
    {/* </div> */}
    </div>

    

  </div>
);

export default VSY;

