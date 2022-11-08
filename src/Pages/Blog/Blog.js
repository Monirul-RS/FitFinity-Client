import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url("https://i.ibb.co/CbYrtyv/shirtless-bodybuilder-doing-side-plank-exercise.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content pt-32 pb-10 mb-2">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-error font-bold">Blog</h1>
                        <p className="mb-5">READ EVERYTHING FITNESS, TRAINING, NUTRITION AND HEALTH RELATED FROM ROBERT COTTERILL.</p>

                    </div>
                </div>
            </div>
            <h1 className='text-center text-4xl font-bold mt-28'>B</h1>
            <div className='grid md:grid-cols-2 my-8'>
                <div className="border-2 shadow-xl mr-8">
                    <div className="rounded-xl ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">1.What is Difference between SQL and NoSQL?</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="border-2 shadow-xl">
                    <div className=" ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">2. WHat is JWT and how does it work?</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="border-2 shadow-xl mr-8 mt-8">
                    <div className="rounded-xl ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">3. What is the difference between Javascript and NodeJS?</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="border-2 shadow-xl mt-8">
                    <div className=" ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">4. How does NodeJs handle multiple requests at the same time?</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;