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
            <div class="container">
                <div class="skills html">95%</div>
            </div>
            <p className=' text-white'>Tailwind</p>
            <div class="container">
                <div class="skills tailwind">94%</div>
            </div>
            <p className=' text-white'>CSS</p>
            <div class="container">
                <div class="skills css">90%</div>
            </div>

            <p className=' text-white'>JavaScript</p>
            <div class="container">
                <div class="skills js">75%</div>
            </div>

            <p className=' text-white'>React</p>
            <div class="container">
                <div class="skills php">80%</div>
            </div>
        </div>
    );
};

export default Skill;