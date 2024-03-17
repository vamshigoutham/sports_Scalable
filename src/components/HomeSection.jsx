import React, {useState, useEffect} from 'react';
import image1 from '../assets/images/cricket2.jpg'
import image2 from '../assets/images/football-stadium-2.jpg';
import image3 from '../assets/images/golf.jpg'


export const HomeSection1 = () => {
    const sectionData = [
        {
            desc: "Welcome to our sports hub website, where you can embark on an exhilarating journey through the world of sports! Discover sports venues spanning the globe. Whether you're seeking the roar of the crowd in a bustling stadium or the serene beauty of a local field, our Location Finder lets you uncover the perfect spots to indulge in your favorite sports activities, no matter where you are."
        },
        {
            desc: "Continue your adventure by delving into our Workshop section, where you'll find a treasure trove of opportunities to enhance your skills and knowledge. From immersive workshops led by seasoned professionals to specialized training sessions tailored to your preferred sports, there's something for everyone eager to elevate their game. Whether you're a novice looking to learn the basics or a seasoned athlete striving for mastery, our workshops offer invaluable insights and guidance to help you excel in your chosen sports endeavors."
        },
        {
            desc: "Discover new sports adventures perfectly suited to your surroundings, whether it's a local favorite or a hidden gem waiting to be uncovered. Let our Recommender be your guide as you embark on thrilling sports experiences tailored to your preferences and geographic location."
        }
    ]

    const getSrc = (index) => {
        return (
            index === 0 ? image1 : index === 1 ? image2 : image3
        )
    }

    return (
        <div className='p-24 flex flex-col gap-24'>
            {sectionData?.map((data, index) => {
                return (
                    <div className='flex gap-32 justify-center items-center text-md'>
                        {index === 1 && <div className='w-[550px]'>{data?.desc}</div>}
                        <img src={getSrc(index)} height={200} width={300} className='rounded-md'/>
                        {index !==1 && <div className='w-[550px]'>{data?.desc}</div>}
                    </div>
                )
            })}
        </div>
    )
}