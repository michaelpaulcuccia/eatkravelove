import React from 'react'
import { Carousel } from "react-bootstrap";
import beTheChange from '../images/CaroMenuImages/beTheChange.jpg';
import middlesexCountyNJ from '../images/CaroMenuImages/middlesexCountyNJ.jpg';
import NewarkBethIsrealOne from '../images/CaroMenuImages/NewarkBethIsrealOne.jpg';
import NewarkBethIsrealTwo from '../images/CaroMenuImages/NewarkBethIsraelTwo.jpg';
import weMatch from '../images/CaroMenuImages/weMatch.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const CaroMenu = () => {

    //removes next and prev 'carrot' pointers from carousel
    let nextIcon = '';
    let prevIcon = '';


    return (
        <div>
            <Carousel
                className='carousel'
                indicators={false}
                nextIcon={nextIcon}
                prevIcon={prevIcon}
            >

                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={beTheChange}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={8000}>
                    <img
                        className="d-block w-100"
                        src={middlesexCountyNJ}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={8000}>
                    <img
                        className="d-block w-100"
                        src={NewarkBethIsrealOne}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={8000}>
                    <img
                        className="d-block w-100"
                        src={NewarkBethIsrealTwo}
                        alt="Fourth slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={8000}>
                    <img
                        className="d-block w-100"
                        src={weMatch}
                        alt="Fifth slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default CaroMenu;
