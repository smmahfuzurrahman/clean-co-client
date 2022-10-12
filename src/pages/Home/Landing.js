import React from 'react';
import BucketGirl from "../../assets/images/bucketgirl.png";
const Landing = () => {
    return (
        <div class="relative">
            <div class="hero h-screen lg:h-[60vh] bg-accent relative mt-16">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" class='text-xl'>Best Quality</p>
                        <h1 data-aos="fade-right" data-aos-duration="900" data-aos-delay="400" class="text-5xl font-bold">Professional Cleaning Services</h1>
                        <p data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600"class="py-6 max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos praesentium autem, maiores odio delectus ab neque nobis aspernatur esse, sed non consequuntur quis qui. Voluptatem sunt sed cupiditate vel.</p>
                        <button class="btn btn-primary" data-aos="zoom-in" data-aos-delay="1000">Get Started</button>
                    </div>
                    <div className='lg:h-[60vh] shrink-0'>
                        <img src={BucketGirl} class="h-full" alt='' />
                    </div>
                </div>
            </div>
            <div class="rounded-2xl mx-auto mt-[-30px] relative z-20 bg-base-200 shadow-lg p-5 w-5/6">
                <h1 class="text-2xl mb-5 text-primary">Get Free Estimate</h1>
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button class="btn btn-primary mt-5"> Get a Quote</button>
            </div>
        </div>
    );
};

export default Landing;