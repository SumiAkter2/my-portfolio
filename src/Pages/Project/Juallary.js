import React from 'react';

const Juallary = () => {
    const tools = [
        {
            id: 1,
            img1: 'https://i.ibb.co/QDrHMgf/juallary-1.png',
            img2: 'https://i.ibb.co/hfJMQfy/juallary-4.png',
            img3: 'https://i.ibb.co/WWDY1JC/juallary-2.png',

            img5: 'https://i.ibb.co/9bpyJDj/juallary.png',
            name: 'Jewelry Empire',
            des: "This is a review page. Added customer review by using custom hook. Also have recharts and  different charts. Add feature by using heroIcon.",
            fea: 'React, js, react hook form, react router, html, css, bootstrap'

        }
    ]
    return (
        <div>
            {
                tools.map(tool => < >
                    <div className='grid lg:grid-cols-2  lg:px-12 my-6 gap-4 '>
                        <img src={tool.img5} className='min-w-full mx-auto' alt="" />
                        <div className='px-12'>
                            <h3 class="font-bold text-4xl  pb-12">{tool.name}</h3>
                            <div className='grid lg:grid-cols-2 lg:gap-6'>
                                <p class="py-4"><span className='text-2xl font-bold'>Description:</span>
                                    <br />    {tool.des} </p>
                                <p className='text-2xl pt-12 font-bold'>
                                    <li>
                                        <a href="https://dapper-rugelach-683330.netlify.app/">Live site</a></li>
                                    <li>
                                        <a href="https://github.com/programming-hero-web-course-4/product-analysis-website-SumiAkter2">Client site code</a></li>

                                </p>
                                <p class="py-4"><span className='text-2xl font-bold'>Feature:</span>
                                    <br /><li>{tool.fea}</li> </p>
                            </div>
                            <label for="my-modal-6" class="btn bg-indigo-400 modal-button text-primary  w-48 mt-6 ">More </label>
                        </div>
                    </div>

                    < input type="checkbox" id="my-modal-6" class="modal-toggle " />
                    <div class="modal ">
                        <div class="modal-box w-9/12">
                            <div className='gap-y-8'>
                                <label for="my-modal-6" class="btn btn-lg btn-circle absolute right-2 top-2">✕</label>
                                <img src={tool.img1} className='min-h-full' alt="" />
                                <img src={tool.img2} className='min-h-full' alt="" />
                                <img src={tool.img3} className='min-h-full' alt="" />
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div >
    );
};

export default Juallary;
