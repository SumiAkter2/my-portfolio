import React from 'react';

const Makeup = () => {
    const tools = [
        {
            id: 1,
            img1: 'https://i.ibb.co/LSY2RXF/Screenshot-27.png',
            img2: 'https://i.ibb.co/192vwz6/screencapture-tiny-monstera-043ad8-netlify-app-2022-06-17-14-09-16.png',


            name: 'Exhibit Your Beauty',
            des: "A  manufacturing site.where people buy different kinds of tools and get review.Admin can make another user admin,can manage all product, can added any products",
            fea: 'React, js, html, css, bootstrap, netlify, '

        }
    ]
    return (
        <div>
            {
                tools.map(tool => < >
                    <div className='grid lg:grid-cols-2  lg:px-12 my-6 gap-4 '>
                        <img src={tool.img2} className='min-w-full mx-auto' alt="" />
                        <div className='px-12'>
                            <h3 class="font-bold text-4xl  pb-12">{tool.name}</h3>
                            <div className='grid lg:grid-cols-2 lg:gap-6'>
                                <p class="py-4"><span className='text-2xl font-bold'>Description:</span>
                                    <br />    {tool.des} </p>
                                <p className='text-2xl pt-12 font-bold'>
                                    <li>
                                        <a href="https://tiny-monstera-043ad8.netlify.app/">Live site</a></li>
                                    <li>
                                        <a href="https://github.com/SumiAkter2/lucky-one-select">Client site code</a></li>

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

                            </div>
                        </div>
                    </div>
                </>)
            }
        </div >
    );
};

export default Makeup;
