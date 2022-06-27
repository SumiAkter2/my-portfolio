import React from 'react';
import SkillBar from 'react-skillbars';
// import './Skill.css'
const Skill = () => {

    const skills = [
        { type: "HTML", level: 96 },
        { type: "CSS", level: 90 },
        { type: "JavaScript", level: 85 },
        { type: "React.js", level: 92 },
        { type: "Tailwind", level: 95 },
        { type: "BootStrap", level: 90 },


    ]
    const colors = {
        bar: "rgb(217 70 239)",
        title: {
            text: "#fff",
            background: "rgb(217 70 239)"
        }

    }
    return (
        <div>
            {/* <p className=' text-white'>Html</p>
            <div className="container">
                <div className="skills html" >95%</div>
            </div>
            <p className=' text-white'>Tailwind</p>
            <div className="container">
                <div className="skills tailwind" >94%</div>
            </div>
            <p className=' text-white'>CSS</p>
            <div className="container">
                <div className="skills css" >90%</div>
            </div>

            <p className=' text-white'>JavaScript</p>
            <div className="container">
                <div className="skills js" >75%</div>
            </div>

            <p className=' text-white'>React</p>
            <div className="container">
                <div className="skills php" >80%</div>
            </div> */}
            <SkillBar skills={skills} colors={colors} height={35} ></SkillBar>
        </div>
    );
};

export default Skill;