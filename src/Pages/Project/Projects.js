import React from 'react';

const Projects = ({ project }) => {
    return (
        <div >
            <div className="card w-96 bg-gray-600 shadow-xl">
                <figure><img data-aos="zoom-in-down" src={project.img} className=' shrink-0' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {project.name}
                        <div className="badge badge-secondary"> React</div>
                    </h2>
                    <p>{project.describe}</p>
                    <div className="card-actions justify-end   " data-aos="fade-right">

                        <div className="badge badge-outline p-6 text-white text-xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" className="fill-current"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" /></svg> Details</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;