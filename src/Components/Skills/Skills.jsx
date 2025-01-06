import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact }from '@fortawesome/free-brands-svg-icons'
import { faHtml5 }from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt }from '@fortawesome/free-brands-svg-icons'
import { faJs }from '@fortawesome/free-brands-svg-icons'
import { faGitAlt }from '@fortawesome/free-brands-svg-icons'
import { faGithub }from '@fortawesome/free-brands-svg-icons'
import './Skills.css'

function Skills() {

    const handleScroll = (evt) => {
        evt.preventDefault();
        document.querySelector('ul').scrollLeft += evt.deltaY
    }

    const objSkills = [
        {
            id: 'id1',
            name: 'ReactJS',
            img: faReact,
            imgId: 'imgId1',
            text: 'ReactJS é uma biblioteca JavaScript para criar interfaces de usuário interativas.'
        },

        {
            id: 'id2',
            name: 'Javascript',
            img: faJs,
            imgId: 'imgId2',            
            text: 'JavaScript é uma linguagem de programação para criar interatividade em páginas web.'
        },

        {
            id: 'id3',
            name: 'HTML',
            img: faHtml5,
            imgId: 'imgId3',            
            text: 'HTML é a linguagem de marcação para estruturar conteúdo web.'
        },

        {
            id: 'id4',
            name: 'CSS',
            img: faCss3Alt,
            imgId: 'imgId4',
            text: 'CSS é a linguagem para estilizar e formatar páginas web.'
        },

        {
            id: 'id5',
            name: 'GIT',
            img: faGitAlt,
            imgId: 'imgId5',           
            text: 'Sistema de controle de versão distribuído para rastrear e gerenciar alterações no código.'
        },

        {
            id: 'id6',
            name: 'GitHub',
            img: faGithub,
            imgId: 'imgId6',
            text: 'Plataforma para armazenar, compartilhar e colaborar em código, com controle de versão.'
        }
    ]

    const skills = objSkills.map(skill => 
        <li className="skill-container" id={skill.id}>
            <div className="" id="skill-background"></div>
                <div className="skill-text">
                    <FontAwesomeIcon icon={skill.img} id={skill.imgId} className="skill-img"></FontAwesomeIcon>
                    <div className="skill-type">{skill.name}</div>
                    <p className="skill-info">{skill.text}</p>
                </div>
        </li>
    )


    return(
        <ul className="skills-container" onWheel={handleScroll}>
            {skills}
        </ul>
    );
}

export default Skills