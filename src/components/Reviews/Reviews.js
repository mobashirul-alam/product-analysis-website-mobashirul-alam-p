import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <h1 className='text-center text-3xl font-medium mt-2 mb-4'>Customers Reviews</h1>
            <div className='mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;