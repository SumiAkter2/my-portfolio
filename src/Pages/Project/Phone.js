import React from 'react';

const Phone = () => {
    const tools = [
        {
            id: 1,
            img1: 'https://i.ibb.co/HV1CypL/Screenshot-27.png',
            img2: 'https://i.ibb.co/Dwt5wfZ/Screenshot-29.png',
            img3: 'https://i.ibb.co/h7mmf8n/Screenshot-28.png',

            img5: 'https://i.ibb.co/HrgC35j/phone-seeker.png',
            name: 'Phone Seeker',
            des: "This is a site where a person can find different type of phone and watch. And also can see description or feature of this product. ",
            fea: 'Bootstrap, js, api, netlify , css , html'

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
                                        <a href="https://loving-snyder-d7906c.netlify.app/">Live site</a></li>
                                    <li>
                                        <a href="https://github.com/programming-hero-web-course2/phone-hunter-SumiAkter2">Client site code</a></li>

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
                                <img src={tool.img3} className='min-h-full' alt="" />

                            </div>
                        </div>
                    </div>
                </>)
            }
        </div >
    );
};

export default Phone;
