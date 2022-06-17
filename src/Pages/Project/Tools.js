import React from 'react';

const Tools = () => {
    const tools = [
        {
            id: 1,
            img1: 'https://i.ibb.co/F0Mv9bz/best-tools2.png',
            img2: 'https://i.ibb.co/985JGJf/best-tools3.png',
            img3: 'https://i.ibb.co/swygDQF/best-ttols1.png',
            img4: 'https://i.ibb.co/nk0W2QB/screencapture-best-tools-co-web-app-dashboard-admin-2022-06-17-13-11-24.png',
            img5: 'https://i.ibb.co/MBX1cRG/best-tools-full.png',
            name: 'Best Tools Co',
            des: "A tools manufacturing site.There are admin panel and users.where people buy different kinds of tools and get reviews.Admin can make another user admin,can manage all product, can added any products",
            fea: 'React, js, firebase, heroku, mongodb, react hook form, react route,aos,firebase hook form, html, css, daisy ui. sweet alert.'

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
                                <p className='text-2xl pt-12  font-bold'>
                                    <li>
                                        <a href="https://best-tools-co.web.app/">Live site</a></li>
                                    <li>
                                        <a href=" https://github.com/SumiAkter2/best-tools-server">Client site code</a></li>
                                    <li>
                                        <a href="https://github.com/SumiAkter2/tools-server">Server site code</a></li>
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

export default Tools;