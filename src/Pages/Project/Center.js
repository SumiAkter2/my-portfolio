import React from 'react';

const Center = () => {
    const tools = [
        {
            id: 1,
            img1: 'https://i.ibb.co/WxGnLjc/Screenshot-25.png',
            img2: 'https://i.ibb.co/Z8YV2Gv/Screenshot-24.png',
            img3: 'https://i.ibb.co/PCgRhVR/Screenshot-26.png',

            img5: 'https://i.ibb.co/JBWcVxG/screencapture-frosty-panini-1507ba-netlify-app-2022-06-12-09-44-41.png',
            name: 'Rose Community Center',
            des: "This is a responsive landing page. This is about a community center. It's make for responsive . It's created by html and css.",
            fea: 'Html, vanilla css, netlify'

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
                                        <a href="https://frosty-panini-1507ba.netlify.app/">Live site</a></li>
                                    <li>
                                        <a href="https://github.com/SumiAkter2/community-center">Client site code</a></li>

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

export default Center;
