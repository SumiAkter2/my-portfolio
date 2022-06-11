import React from 'react';
import SkillBar from 'react-skillbars';
import './Skill.css'
const Skill = () => {

    const skills = [
        { type: "HTML", level: 95 },
        { type: "Tailwind", level: 92 },
        { type: "BootStrap", level: 90 },
        { type: "CSS", level: 80 },
        { type: "JavaScript", level: 70 },
        { type: "React.js", level: 80 },
    ]



    return (
        <div>
            <p className=' text-white'>Html</p>
            <div className="container">
                <div className="skills html" data-aos="fade-right">95%</div>
            </div>
            <p className=' text-white'>Tailwind</p>
            <div className="container">
                <div className="skills tailwind" data-aos="fade-right">94%</div>
            </div>
            <p className=' text-white'>CSS</p>
            <div className="container">
                <div className="skills css" data-aos="fade-right">90%</div>
            </div>

            <p className=' text-white'>JavaScript</p>
            <div className="container">
                <div className="skills js" data-aos="fade-right">75%</div>
            </div>

            <p className=' text-white'>React</p>
            <div className="container">
                <div className="skills php" data-aos="fade-right">80%</div>
            </div>
        </div>
    );
};

export default Skill;