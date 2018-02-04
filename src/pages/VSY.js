import React from 'react';
import  {Card} from 'antd';
import { Table, Divider } from 'antd';
import  Slider  from 'react-slick';
import lo from '../images/VSY/VSY-1-min.png';
import log from '../images/VSY/VSY-2-min.png';
import logo from '../images/VSY/VSY-3-min.png';
import logon from '../images/VSY/VSY-4-min.png';
import Carousel, {Decorators} from 'nuka-carousel';
import {columns} from '../data/pricelist';
import VSYPrice from '../data/pricelist';

// const columns = [{
//     title: 'Type of Room',
//     dataIndex: 'type',
//     key: 'type',
//   }, {
//     title: '12 weeks',
//     dataIndex: '12',
//     key: '12',
//   }, {
//     title: '24 weeks',
//     dataIndex: '24',
//     key: '24',
//   },
//   {
//     title: '48 weeks',
//     dataIndex: '48',
//     key: '48',
//   }];
// const data = [{
//     key: '1',
//     type: 'Single-Ensuite',
//     12: 360,
//     24: 350,
//     48:330
//   },
//   {key: '2',
//   type: 'Twin Room-Ensuite',
//   12: 270,
//   24: 260,
//   48:235
// },
// {key: '3',
// type: '3 Shared Room-Ensuite',
// 12: 250,
// 24: 240,
// 48:210
// },
// {key: '4',
// type: '4 Shared Room-Ensuite',
// 12: 225,
// 24: 215,
// 48:195
// }];
const VSY = () => (
    <div>
    <h1>VILLAGE SOUTH YARRA</h1>
    <h5>420 Punt Road South Yarra, VIC 3141</h5>
    <Carousel decorators={Decorators}  slidesToShow={2}>
    <div ><img src={lo} /></div>
    <div><img src={log} /></div>
    <div><img src={logo} /></div>
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

    <Table columns={columns} dataSource={VSYPrice} pagination={false} showHeader={true} />

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

