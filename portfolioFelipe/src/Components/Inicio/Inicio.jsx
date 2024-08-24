import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Inicio.css'

function Inicio({ text }) {

    const copy = () => {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className="body">
            <div className="container">
                <div className="info">
                    <p className="description">Oi, eu sou o Felipe!</p>
                    <p className="title"><span className="title" id="react">REACT</span>DEVELOPER</p>
                    <div className="email" onClick={copy}>
                        <div className="box"><FontAwesomeIcon icon={faEnvelope}/></div>
                        <div className="text">{text}</div>
                    </div>
                </div>
                <div className="icons">

                        <a href="https://github.com/Felipe-Cassiano" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
                        </a>

                        <a href="https://www.linkedin.com/in/felipe-roberto-cassiano-1198b4281/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
                        </a>

                </div>
            </div>
        </div>
    )
}

export default Inicio