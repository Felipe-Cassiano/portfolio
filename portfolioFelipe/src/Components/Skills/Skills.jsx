import React, { useEffect } from "react";
import './Skills.css'

function Skills() {

    const handleScroll = (evt) => {
        evt.preventDefault();
        document.querySelector('ul').scrollLeft += evt.deltaY
    }

    const objSkills = [
        {
            name: 'React',
            img: 'https://placehold.co/200',
            text: 'lorem sla oq'
        },

        {
            name: 'HTML',
            img: 'https://placehold.co/200',
            text: 'lorem sla oq'
        },

        {
            name: 'CSS',
            img: 'https://placehold.co/200',
            text: 'lorem sla oq'
        },

        {
            name: 'Javascript',
            img: 'https://placehold.co/200',
            text: 'lorem sla oq'
        },

        {
            name: 'GIT',
            img: 'https://placehold.co/200',
            text: 'lorem sla oq'
        },

        {
            name: 'GitHub',
            img: 'https://placehold.co/200',
            text: 'lorem sla oq'
        }
    ]

    const skills = objSkills.map(skill => 
        <li className="skill-container">
            <img src={skill.img} alt="" />
            <div>{skill.name}</div>
            <p>{skill.text}</p>
        </li>
    )


    return(
        <ul onWheel={handleScroll}>
            {skills}
        </ul>
    );
}

export default Skills