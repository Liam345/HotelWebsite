import React from 'react';
import  {Carousel} from 'antd';
import { Table, Divider } from 'antd';
import  Slider  from 'react-slick';
import lo from '../images/VSY/VSY-1-min.png';
import log from '../images/VSY/VSY-2-min.png';
import logo from '../images/VSY/VSY-3-min.png';
import logon from '../images/VSY/VSY-4-min.png';

const columns = [{
    title: 'Type of Room',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: '12 weeks',
    dataIndex: '12',
    key: '12',
  }, {
    title: '24 weeks',
    dataIndex: '24',
    key: '24',
  },
  {
    title: '48 weeks',
    dataIndex: '48',
    key: '48',
  }];
const data = [{
    key: '1',
    type: 'Single-Ensuite',
    12: 360,
    24: 350,
    48:330
  }];
const VSY = () => (
    <div>
    <h1>VILLAGE SOUTH YARRA</h1>
    <h5>420 Punt Road South Yarra, VIC 3141</h5>
    <div className="container" style={{display:`flex`, flexWrap:`wrap`}}>
    <div ><img src={lo} /></div>
    <div><img src={log} /></div>
    <div><img src={logo} /></div>
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
     {/* <h5>PRICING</h5> */}
    <Table columns={columns} dataSource={data} pagination={false} showHeader={true} />
    </div>

    

  </div>
);

export default VSY;

