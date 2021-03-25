import React from 'react'
import Product from './Product'
import './Home.css'

function Home(){
    return (
        <div className="home">
            <img className="home__image"
            alt=""
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>

            <div className="home__row">
                <Product
                    id="1234"
                    title="The lean Startup:How Contant Innovation"
                    price={11.96}
                    rating={4}
                    image = "https://m.media-amazon.com/images/I/81ET5Y7uyKL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="1234"
                    title="The lean Startup:How Contant Innovation"
                    price={11.96}
                    rating={3}
                    image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY608_CB432517900_.jpg"
                />
                <Product
                    id="1234"
                    title="The lean Startup:How Contant Innovation"
                    price={11.96}
                    rating={5}
                    image = "https://m.media-amazon.com/images/I/81U4Fw6p-BL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1234"
                    title="The lean Startup:How Contant Innovation"
                    price={11.96}
                    rating={4}
                    image = "https://m.media-amazon.com/images/I/81ET5Y7uyKL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="1234"
                    title="The lean Startup:How Contant Innovation"
                    price={11.96}
                    rating={3}
                    image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY608_CB432517900_.jpg"
                />
                <Product
                    id="1234"
                    title="The lean Startup:How Contant Innovation"
                    price={11.96}
                    rating={5}
                    image = "https://m.media-amazon.com/images/I/81U4Fw6p-BL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="1234"
                    title="The lean Startup:How Contant Innovation"
                    price={11.96}
                    rating={5}
                    image = "https://m.media-amazon.com/images/I/81U4Fw6p-BL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__row">
            <Product
                    id="1234"
                    title="The lean Startup:How Contant Innovation"
                    price={11.96}
                    rating={3}
                    image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY608_CB432517900_.jpg"
                />
                <Product
                    id="1234"
                    title="The lean Startup:How Contant Innovation"
                    price={11.96}
                    rating={5}
                    image = "https://m.media-amazon.com/images/I/81U4Fw6p-BL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="1234"
                    title="The lean Startup:How Contant Innovation"
                    price={11.96}
                    rating={5}
                    image = "https://m.media-amazon.com/images/I/81U4Fw6p-BL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
        </div>
    )
}

export default Home;