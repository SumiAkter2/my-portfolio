import React, { useEffect, useState } from 'react';

import Projects from './Projects';

const Project = () => {
    const [allProjects, setAllProjects] = useState([]);
    console.log('lkj');

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setAllProjects(data));
    }, [])

    console.log('lkj');
    return (
        <div>
            <h1 className='text-6xl text-primary font-bold lg:mx-96 my-24 animate-charcter'>My All Projects</h1>

            <div className='grid lg:grid-cols-3 gap-6 my-12 px-12'>

                {
                    allProjects.map(project => <Projects key={project.id} project={project}></Projects>)
                }

            </div>
        </div>
    );
};

export default Project;