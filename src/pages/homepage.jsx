import React from 'react';
import { Banner } from '../components/Banner';
import { HomeSection1 } from '../components/HomeSection';
import { Footer } from '../components/Footer';

export const HomePage = () => {
    return (
        <div>
            <Banner />
            <HomeSection1 />
            <Footer />
        </div>
    )
}