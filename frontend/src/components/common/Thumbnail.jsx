import React, { useState, useEffect } from 'react';
import like from '../../assets/img/like.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from '../../reducks/favourites/operations';
import { getFavourites } from '../../reducks/favourites/selectors';

const Thumbnail = ({ places }) => {
    const dispatch = useDispatch();
    const clickFavourite = places => {
        dispatch(addFavourite(places));
    };
    const selector = useSelector(state => state);
    const favourites = getFavourites(selector);
    const [showLikeButton, setShowLikeButton] = useState(true);
    useEffect(() => {
        let favoritePlace = favourites.filter(favourite => favourite.id == places.id);
        if (favoritePlace.length > 0) {
            setShowLikeButton(false);
        }
    }, [favourites]);
    return (
        <div class="thumbnail">
            {showLikeButton && (
                <div class="like">
                    <img
                        src={like}
                        onClick={() => {
                            clickFavourite(places);
                        }}
                        alt=""
                    />
                </div>
            )}
            <img src={places.image} alt="" />
            <p class="thumbheading">{places.name}</p>
            <p class="thumbtext">{places.description}</p>
        </div>
    );
};

export default Thumbnail;
