import React from 'react';
import  {Card} from 'antd';
import { Table, Divider } from 'antd';
import  Slider  from 'react-slick';
import Carousel, {Decorators} from 'nuka-carousel';

const renderImages = (imageArr) => {
    return imageArr.map(function(img,index,image) {
        return <img src={img}  key={index} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>

        ///Fixes the slider 0 px min height bug in nuka carousel.
    }
    );
}

const LocationPage = (props) => (
    <div>
    <h1>{props.name}</h1>
    <h5>{props.address}</h5>

    <Carousel decorators={Decorators}  slidesToShow={2}>
    {renderImages(props.imagesArr)}
    
    </Carousel> 
    <div className="wrapper">
    <h5>DETAILS</h5>
    
    
    {props.details}

    <Table columns={props.priceHeader} dataSource={props.priceSource} pagination={false} showHeader={true} />

    <div style={{ background: '#ECECEC', padding: '30px',display:`flex`, flexWrap:`wrap`,  justifyContent:`space-around` }}>
    <Card title="Directions" bordered={false}  >
    <div dangerouslySetInnerHTML={{__html: props.directions.replace(/(<? *script)/gi, 'illegalscript')}} >
    </div>
    </Card>
    <Card title="Building Amenities" bordered={false} >
    <div dangerouslySetInnerHTML={{__html: props.amenities.replace(/(<? *script)/gi, 'illegalscript')}} >
    </div>
    </Card>
    </div>
    </div>
  </div>
);

export default LocationPage;
