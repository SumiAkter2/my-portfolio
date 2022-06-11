import React from 'react';

const Projects = ({ project }) => {
    return (
        <div >
            <div class="card w-96 bg-gray-600 shadow-xl">
                <figure><img src={project.img} className='shrink-0' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Shoes!
                        <div class="badge badge-secondary">React</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Fashion</div>
                        <div class="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;