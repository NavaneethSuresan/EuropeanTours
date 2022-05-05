import React, { useEffect } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import bgimage from '../assets/img/backgroundimg.png';
import search from '../assets/img/search.svg';
import wavyblue from '../assets/img/wavyblue.svg';
import videobackground from '../assets/img/videobackground.png';
import wavywhite from '../assets/img/wavywhite.svg';
import videolink from '../assets/img/videolink.png';
import play from '../assets/img/play.svg';
import mountain from '../assets/img/mountain.png';
import index from '../assets/img/index.png';
import map from '../assets/img/MAP.png';
import mapicon from '../assets/img/mapicon.svg';
import { getPlaces } from '../reducks/places/selectors';
import { getCategories } from '../reducks/categories/selectors';
import { fetchPlaces } from '../reducks/places/operations';
import { push } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../reducks/categories/operations';
import { fetchFromLocalStorage } from '../reducks/favourites/operations';
import GridContent from '../components/common/GridContent';
import Thumbnail from '../components/common/Thumbnail';
const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const places = getPlaces(selector);
    useEffect(() => {
        dispatch(fetchPlaces());
    }, []);
    const categories = getCategories(selector);
    console.log(places);
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchFromLocalStorage());
    }, []);
    return (
        <>
            <Header />
            <section class="firstpage">
                <img src={bgimage} alt="" />
                <div class="shade"></div>
                <div class="input">
                    <p id="maincap">Happiest place on Earth!</p>
                    <input placeholder="search your destination" />
                    <a href="www.google.com">
                        <img src={search} alt="" id="search" />
                    </a>
                </div>
            </section>
            <section class="cols">
                <div class="heading">
                    <p>Natural wonders in Europe</p>
                    <img src={wavyblue} alt="" id="wblue" />
                </div>
                <div class="flex">
                    {categories.map((category) => <GridContent key={category.id} category={category} />)}
                </div>
            </section>
            <div class="heading">
                <p>Tourist attractions in Europe</p>
                <img src={wavyblue} alt="" />
            </div>

            <section class="grid">{places.map((places) => <Thumbnail places={places} />)}</section>

            <section class="video">
                <img src={videobackground} alt="" id="bgvideo" />
                <div class="caption">
                    <p id="discover">DISCOVER</p>
                    <div class="wavy">
                        <p id="watchvd">Watch Our Video Tour</p>
                        <img src={wavywhite} alt="" id="wavywhite" />
                    </div>
                    <a href="www.google.com">
                        <img src={videolink} alt="" />
                    </a>
                </div>
                <div class="play">
                    <img src={play} alt="" id="play" />
                </div>
            </section>

            <section class="offer">
                <div class="img-gradient">
                    <img src={mountain} alt="" id="mountain" />
                </div>

                <div class="main-img">
                    <img src={index} alt="" />
                </div>

                <div class="ads">
                    <p id="off">Get 10% Off on Your Next Travel</p>
                    <p>Maximum discount 1000$ per person</p>
                    <div class="fields">
                        <input type="text" placeholder="Enter your email" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </section>

            <section class="location">
                <div class="map">
                    <img src={map} alt="" />
                </div>
                <div class="mapimage">
                    <a href="./map.html">
                        <img src={mapicon} alt="" class="src" id="mapicon" />
                    </a>
                </div>
            </section>
            <Footer />
        </>
    );
};
export default Home;
