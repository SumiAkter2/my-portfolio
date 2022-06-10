import React from 'react';
import Projects from './Projects';
import img1 from '../../assect/Screenshot_26.png'
import img2 from '../../assect/Screenshot_27.png'
import img3 from '../../assect/Screenshot_28.png'

const Project = () => {
    const allProject = [{
        id: 1,
        img: 'img1',
        describe: '',

    },
    {
        id: 2,
        img: 'img2',
        describe: '',

    },
    {
        id: 3,
        img: 'img3',
        describe: '',

    },
    {
        id: 4,
        img: '',
        describe: '',

    },

    ]
    return (
        <div>
            <h1 className='text-5xl text-primary font-bold text-center'>My All Projects</h1>
            <div className='grid lg:grid-cols-3 gap-6 my-12 px-12'>
                {
                    allProject.map(project => <Projects key={project.id}
                        project={project}
                    ></Projects>)
                }
            </div>
        </div>
    );
};

export default Project;