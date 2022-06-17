import React from 'react';

const Calculator = () => {
    const tools = [
        {
            "id": 7,
            "img": "https://i.ibb.co/Bc0PkWf/screencapture-joyful-vacherin-96c794-netlify-app-2022-06-17-15-01-12.png",
            "describe": "This is a calculator created by javascript.",
            "name": "Js calculator",
            "badge": " Js, Bootstrap, html, Netlify"

        }
    ]
    return (
        <div>
            {
                tools.map(tool => < >
                    <div className='grid lg:grid-cols-2  lg:px-12 my-6 gap-4 '>
                        <img src={tool.img} className='min-w-full mx-auto' alt="" />
                        <div className='px-12'>
                            <h3 class="font-bold text-4xl pb-12 ">{tool.name}</h3>
                            <div className='grid lg:grid-cols-2 lg:gap-6'>
                                <p class="py-4"><span className='text-2xl font-bold pt-12'>Description:</span>
                                    <br />    {tool.describe} </p>
                                <p className='text-2xl  font-bold'>
                                    <li>
                                        <a href="https://joyful-vacherin-96c794.netlify.app/">Live site</a></li>
                                    <li>
                                        <a href=" https://github.com/SumiAkter2/js-calculator">Client site code</a></li>


                                </p>
                                <p class="py-4"><span className='text-2xl font-bold'>Feature:</span>
                                    <br /><li>{tool.badge}</li> </p>
                            </div>

                        </div>
                    </div>




                </>)
            }
        </div >
    );
};
export default Calculator;