import React from 'react'
import Header from '../../components/UI/Header/Header'
import HeroHeader from '../../components/UI/HeroHeader/HeroHeader'
import ProductsSection from '../../components/UI/ProductsSection/ProductsSection'
import Footer from '../../components/UI/Footer/Footer'
import Auxiliary from "../../hoc/Auxiliary";

const home = () => {
    return (
        <Auxiliary>
            <Header/>
            <HeroHeader/>
            <ProductsSection />
            <Footer />
        </Auxiliary>
    )
}

export default home