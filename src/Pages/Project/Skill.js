import React from 'react';
import SkillBar from 'react-skillbars';
const Skill = () => {

    const skills = [
        { type: "HTML", level: 95 },
        { type: "Tailwind", level: 92 },
        { type: "BootStrap", level: 90 },
        { type: "CSS", level: 80 },
        { type: "JavaScript", level: 70 },
        { type: "React.js", level: 80 },


    ];
    const colors = {
        bar: 'gray',

        title: {
            text: 'white', background: 'indigo'
        }

    }

    return (
        <div className='p-4'>
            <SkillBar skills={skills} colors={colors} height={'2vh'} animationDuration={3000} />
        </div>
    );
};

export default Skill;