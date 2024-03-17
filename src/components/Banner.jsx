import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import image1 from '../assets/images/cricket1.jpg';
import image2 from '../assets/images/cricket2.jpg';
import image3 from '../assets/images/football-stadium.jpg';
import image4 from '../assets/images/football-stadium-2.jpg';
import image5 from '../assets/images/golf.jpg';
import image6 from '../assets/images/swimming.jpg';

export const Banner = () => {
    return (
        <div>
        <Splide options={{ rewind: true, autoplay:true, interval:3000, height: 600}} aria-label="React Splide Example">
            <SplideSlide>
                <img src={image1} alt="Image 1" />
            </SplideSlide>
            {/* <SplideSlide>
                <img src={image2} alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
                <img src={image3} alt="Image 3" />
            </SplideSlide> */}
            <SplideSlide>
                <img src={image4} alt="Image 4" />
            </SplideSlide>
            <SplideSlide>
                <img src={image5} alt="Image 5" />
            </SplideSlide>
            <SplideSlide>
                <img src={image6} alt="Image 6" />
            </SplideSlide>
        </Splide>
        </div>
    );
}
