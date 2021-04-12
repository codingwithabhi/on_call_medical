import React from 'react'
import HomePageCarousel from "../../Components/molecules/HomePageCarousel/index"
import CardsCarousel from "../../Components/molecules/CardsCarousel/cardsCarousel"
import Banner from '../../Components/molecules/Banner'
 
export default function Home() {
    return (
        <>
            <HomePageCarousel />
            <br />
            <CardsCarousel />
            <br/>
            <Banner/>
            <br/>
        </>
    )
}
