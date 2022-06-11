import React from 'react';

const Contact = () => {
    return (
        <div className='lg:px-48 px-6'>
            <div class="hero min-h-screen" style={{ "backgroundImage": "url(https://i.ibb.co/qWwqsPP/gtch.jpg )" }}>
                <div class="hero-overlay bg-opacity-70 text-center "> <h1 className='text-white text-5xl  font-bold mt-24'>Get In Touch</h1></div>
                <div class="hero-content  ">


                    <div className='grid md:grid-cols-1 lg:grid-cols-2 text-white '>
                        <div className='mt-6'>
                            <div className='flex ' >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" class="fill-current"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" /></svg>
                                <p className='text-xl pl-2 font-bold'>sumiakter6335@gmail</p>
                            </div>
                            <div className='flex '>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg> <a href="https://www.facebook.com/alishaakhtersumi.sumi" className='text-xl font-bold pl-2'>Facebook</a></div>
                            <div className='flex '>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" class="fill-current"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                                <a className='text-xl font-bold pl-2' href="https://www.linkedin.com/in/sumi-akter-90b114219/"> Linkedin</a>
                            </div>
                        </div>


                        {/* <button className='btn btn-primary mx-12 pr-2'> </button> */}

                        <label for="my-modal-6" class="btn btn-primary mx-12 pr-2 modal-button my-6"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512 " width="24" height="24" class="fill-current"><path d="M256 128h64c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256C238.3 0 224 14.33 224 32v64C224 113.7 238.3 128 256 128zM528 64H384v48C384 138.5 362.5 160 336 160h-96C213.5 160 192 138.5 192 112V64H48C21.49 64 0 85.49 0 112v352C0 490.5 21.49 512 48 512h480c26.51 0 48-21.49 48-48v-352C576 85.49 554.5 64 528 64zM288 224c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S252.7 224 288 224zM384 448H192c-8.836 0-16-7.164-16-16C176 405.5 197.5 384 224 384h128c26.51 0 48 21.49 48 48C400 440.8 392.8 448 384 448z" /></svg> Contact Me</label>
                    </div>
                </div >
            </div>
        </div>


















    );
};

export default Contact;