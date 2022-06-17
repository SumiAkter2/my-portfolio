import React from 'react';

const Car = () => {
    const tools = [
        {
            id: 1,
            img1: 'https://i.ibb.co/JCJN1bj/carland-1.png',
            img2: 'https://i.ibb.co/7zZ8Ln0/carland2.png',
            img3: 'https://i.ibb.co/bBrLphb/carland3.png',

            img5: 'https://i.ibb.co/BrXS0W4/the-car-land.png',
            name: 'The Car Land',
            des: " This is a e-commerce landing page.There have a login form and google sign in page. There also have an user,they can order products. They can show their products. ",

            fea: 'React, js, firebase, heroku, mongodb, react hook form, react router, html, css, aos .'

        }
    ]
    return (
        <div>
            {
                tools.map(tool => < >
                    <div className='grid lg:grid-cols-2  lg:px-12 my-6 gap-4 '>
                        <img src={tool.img5} className='min-w-full mx-auto' alt="" />
                        <div className='px-12'>
                            <h3 class="font-bold text-4xl pb-12 ">{tool.name}</h3>
                            <div className='grid lg:grid-cols-2 lg:gap-6'>
                                <p class="py-4"><span className='text-2xl font-bold pt-12'>Description:</span>
                                    <br />    {tool.des} </p>
                                <p className='text-2xl  font-bold'>
                                    <li>
                                        <a href="https://the-car-land.web.app/">Live site</a></li>
                                    <li>
                                        <a href=" https://github.com/SumiAkter2/car-land">Client site code</a></li>
                                    <li>
                                        <a href="https://github.com/SumiAkter2/car-land-server">Server site code</a></li>
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
                                <img src={tool.img4} className='min-h-full' alt="" />
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

export default Car;
