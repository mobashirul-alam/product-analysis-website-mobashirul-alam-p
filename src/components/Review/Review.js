import React from 'react';

const Review = ({ review }) => {
    const { name, details, rating } = review;
    return (
        <div className='border-2 border-slate-400 rounded-xl p-5 relative'>
            <div className='mb-8'>
                <p className='border-b-2 border-zinc-300 font-medium text-xl'>{name}</p>
                <p className='mt-2 text-base'>{details}</p>
            </div>
            <div className='absolute bottom-0 pb-2'>
                <p className='border-t-2 border-zinc-300 text-lg font-medium'>
                    Rating: <span className='font-bold text-2xl'>{rating}</span> out of 5.0
                </p>
            </div>
        </div>
    );
};

export default Review;