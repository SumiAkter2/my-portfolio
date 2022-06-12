
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // 
        emailjs.send('service_tjvjjnt', 'template_0lgw5l1', form.current, 'DA9w5z8oRRndB68kK')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });


    }
    return (
        <div className='lg:px-48 px-6'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            <div className="hero min-h-screen" style={{ "backgroundImage": "url(https://i.ibb.co/qWwqsPP/gtch.jpg )" }}>
                <div className="hero-overlay bg-opacity-70 text-center "> <h1 className='text-white text-5xl  font-bold mt-24 ' data-aos="fade-up"
                    data-aos-anchor-placement="bottom-center">Get In Touch</h1></div>
                <div className="hero-content  ">


                    <div className='grid md:grid-cols-1 lg:grid-cols-2 text-white '>
                        <div className='my-6'>
                            <div className='flex ' >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" className="fill-current"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" /></svg>
                                <p className='text-xl pl-2 font-bold'>sumiakter6335@gmail</p>
                            </div>
                            <div className='flex mt-4'>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg> <a href="https://www.facebook.com/alishaakhtersumi.sumi" className='text-xl font-bold pl-2'>Facebook</a></div>
                            <div className='flex '>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" className="mt-4 fill-current"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                                <a className=' mt-4 text-xl font-bold pl-2' href="https://www.linkedin.com/in/sumi-akter-90b114219/"> Linkedin</a>
                            </div>
                        </div>


                        {/* <button className='btn btn-primary mx-12 pr-2'> </button> */}

                        <label for="my-modal-6" className=" btn  mx-12 px-4 btn-primary modal-button my-4" data-aos="fade-right"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512 " width="24" height="24" className="fill-current"><path d="M256 128h64c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256C238.3 0 224 14.33 224 32v64C224 113.7 238.3 128 256 128zM528 64H384v48C384 138.5 362.5 160 336 160h-96C213.5 160 192 138.5 192 112V64H48C21.49 64 0 85.49 0 112v352C0 490.5 21.49 512 48 512h480c26.51 0 48-21.49 48-48v-352C576 85.49 554.5 64 528 64zM288 224c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S252.7 224 288 224zM384 448H192c-8.836 0-16-7.164-16-16C176 405.5 197.5 384 224 384h128c26.51 0 48 21.49 48 48C400 440.8 392.8 448 384 448z" /></svg> Contact Me</label>
                    </div>
                </div >
            </div>
            <div>


                {/* <!-- Put this part before </body> tag-- > */}
                <input type="checkbox" id="my-modal-6" className="modal-toggle mx-12 mt-12" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg " >Contact Me </h3>




                        <form ref={form} onSubmit={sendEmail}>
                            <label class="label">
                                <span class="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Type Full Name" class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text">Phone Num</span>
                            </label>
                            <input type="text" placeholder="Type Phone Num" class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Type Email" class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea class="textarea name='message' w-full max-w-xs textarea-error " placeholder="Text Message"></textarea>
                        </form>

                        <div className="modal-action">
                            <button type='submit' for="my-modal-6" className="btn">Submit <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" className="fill-current"><path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" /></svg> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Contact;