import React from 'react';
import BucketGirl from "../../assets/images/bucketgirl.png";
const Landing = () => {
    return (
        <div class="hero lg:h-[60hv] bg-accent mt-16">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <p class='text-xl'>Best Quality</p>
                    <h1 class="text-5xl font-bold">Professional Cleaning Services</h1>
                    <p class="py-6 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officia itaque quod iusto obcaecati error necessitatibus eos commodi cumque id?</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <div className='lg:h-[60vh] shrink-0'>
                    <img src={BucketGirl} class="h-full" alt='/' />
                </div>
            </div>
        </div>
    );
};

export default Landing;