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
            des: "A  manufacturing site.where people buy different kinds of tools and get review.Admin can make another user admin,can manage all product, can added any products",
            fea: 'React, js, firebase, heroku, mongodb, react hook form, react router'

        }
    ]
    return (
        <div>
            {
                tools.map(tool => < >
                    <div className='grid lg:grid-cols-2  lg:px-12 my-12 gap-4 '>
                        <img src={tool.img2} className='max-w-xl max-h-xl mx-auto' alt="" />


                        <img src={tool.img3} className='max-w-xl max-h-xl mx-auto' alt="" />
                        <img src={tool.img1} className='max-w-xl h-screen mx-auto' alt="" />
                        <label for="my-modal-6" class="btn modal-button lg:mx-96 w-48 mt-24 mx-24">More </label>

                    </div>




                    {/* <!-- Put this part before </body> tag-- > */}
                    < input type="checkbox" id="my-modal-6" class="modal-toggle " />
                    <div class="modal ">
                        <div class="modal-box w-11/12 max-w-5xl">
                            <div className='gap-y-4'>
                                <img src={tool.img5} className='min-h-full' alt="" />

                            </div>
                            <label for="my-modal-6" class="btn btn-lg btn-circle absolute right-2 top-2">✕</label>
                            <h3 class="font-bold text-lg">{tool.name}</h3>
                            <p class="py-4">{tool.des} </p>
                            <p class="py-4">{tool.fea} </p>
                            {/* <div class="modal-action">
                                <label for="my-modal-6" class="btn">Yay!</label>
                            </div> */}
                        </div>
                    </div>
                </>)
            }
        </div >
    );
};

export default Phone;
