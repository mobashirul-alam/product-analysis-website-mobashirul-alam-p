import React from 'react';

const Review = ({ review }) => {
    const { name, details, rating } = review;
    return (
        <div className='border-2'>
            <p>Name: {name}</p>
            <p>{details}</p>
            <p>Rating: {rating} out of 5.0</p>
        </div>
    );
};

export default Review;