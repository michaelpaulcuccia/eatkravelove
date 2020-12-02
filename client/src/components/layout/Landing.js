import React from 'react';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import chef_sank from '../../images/chef_sank.jpg';
import pic_two from '../../images/pic_two.jpg';
import pic_three from '../../images/pic_three.jpg';
import '../../style/LandingStyle.css';

const Landing = () => {

    //removes next and prev 'carrot' pointers from carousel
    let nextIcon = '';
    let prevIcon = '';

    return (

        <Carousel
            className='carousel'
            indicators={false}
            nextIcon={nextIcon}
            prevIcon={prevIcon}
        >

            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={chef_sank}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={pic_two}
                    alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={pic_three}
                    alt="Third slide"
                />
            </Carousel.Item>

        </Carousel>

    )
}

export default Landing