import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {

    const navigate = useNavigate();
    const [reviews] = useReviews();

    return (
        <div>
            <div className='flex'>
                <div className='my-auto'>
                    <img src="https://www.casio-intl.com/product/image/1425458815935/" alt="" />
                </div>
                <div className='my-auto py-20'>
                    <p className='text-8xl font-black'>DESIRED CALCULATOR EVER</p>
                    <p className='text-2xl mt-4'>Casio Scientific Calculator fx-991EX</p>
                    <hr className='w-3/4 border-slate-300' />
                    <p className='text-xl'>Latest high performance Scientific Calculator. It has new high resolution LCD display. No matter what the need is, this scientific calculator can do it all!!! </p>
                    <button className='mt-5 px-9 py-3 rounded-2xl bg-cyan-300 text-xl hover:bg-teal-400 hover:text-white'>Details</button>
                </div>
            </div>
            <div>
                <h1 className='text-center text-3xl font-bold mb-8'>Customer Reviews</h1>
                <div className='mx-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div className='flex justify-center my-8'>
                    <button onClick={() => navigate('/reviews')}
                        className='px-16 py-1 rounded-lg text-xl bg-sky-600 text-white'>See all reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;