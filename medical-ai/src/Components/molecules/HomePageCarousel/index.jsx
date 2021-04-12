import React from 'react'
import "./index.scss"
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const banner1 = require("../../../images/slider1.png").default
const banner2 = require("../../../images/slider2.png").default
const banner3 = require("../../../images/slider3.png").default

function HomePageCarousel() {
    return (
        <div className="homepageCarousel">
            <Carousel autoplay>
                <img src={banner1} alt="no image"/>
                <img src={banner2} alt="no image"/>
                <img src={banner3} alt="no image"/>
            </Carousel>
        </div>
    )
}

export default HomePageCarousel