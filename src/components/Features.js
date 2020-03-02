import React from 'react';
import requireAuth from './requireAuth';

const Features = () => {
    return (
        <>
            <h1>Protected Resource</h1>
            <p>only authenticated users have access to this route!</p>

            <br />
            <h5>Your Reward:</h5>
            <p>
                <a href='https://www.nbcnews.com/science/science-news/owl-monkeys-rate-among-animal-worlds-best-mates-fathers-n59316'>
                    Thanks for signing up
                </a>
            </p>
        </>
    );
};

export default requireAuth(Features);
