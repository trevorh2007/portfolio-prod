import React, { useRef, useState } from 'react'
import './projects-screen.scss'

import ProjectModal from '../project-modal/project-modal'
import moreThanTiredImage from '../../assets/images/more-than-tired-logo.svg'
import narcolepsyLinkLogo from '../../assets/images/narc-temp-logo-lg.png'
import { RiDiscordFill } from 'react-icons/ri'

const ProjectsScreen = ({pageRefs}) => {
  const modal = useRef(null)
  const modal2 = useRef(null)
  const modal3 = useRef(null)
  const modal4 = useRef(null)

  const [modalHover1, setmodalHover1] = useState('hover-hidden')
  const [modalHover2, setmodalHover2] = useState('hover-hidden')
  const [modalHover3, setmodalHover3] = useState('hover-hidden')
  const [modalHover4, setmodalHover4] = useState('hover-hidden')

  return (
    <section id="projects" className="projects-section" ref={el => pageRefs.current = { ...pageRefs.current, projects: el }}>
      <div className="container">
        <div className="section-header">
          Projects
          <div className="section-header-bar" />
        </div>
        <div className="project-gallery">
          <div className="project-cards">
            <div className="card"
                 onClick={() => {
                   modal.current.open()
                   document.getElementsByClassName('fixed-nav')[0].className += ' hidden-nav'
                   document.body.className += 'modal-open'
                }}
                 onMouseEnter={() => setmodalHover1('hover-show')}
                 onMouseLeave={() => setmodalHover1('hover-hidden')}
            >
              <RiDiscordFill className="discord-icon" />
              <div className={modalHover1}>
                <div className="hover-title">
                  Discord Bot
                </div>
              </div>
            </div>
            <ProjectModal ref={modal} true>
              <div className="project-gifs" />
              <div className="project-description">
                A commissioned Discord bot with fun and managerial commands for Saints Hall clan, playing Old School Runescape.
                <ul>
                  <li>MongoDB for storage needs</li>
                  <li>Express front-end</li>
                  <li>Node back-end</li>
                </ul>
              </div>
              <div className="project-btns">
                <div className="project-link-btn btn" onClick={() => window.open('https://www.saintshall.com', '_blank')}>View Site</div>
                <div className="project-source-btn btn" onClick={() => window.open('https://replit.com/@RelliKBooN/SaintsHallDiscordBot', '_blank')}>View Source</div>
                <div className="discord-btn btn" onClick={() => window.open('https://discord.gg/UuAtKjcgk5', '_blank')}>
                  Play on Discord!
                  <span>
                    (requires discord login)
                  </span>
                </div>
              </div>
            </ProjectModal>
            <div className="card"
              onClick={() => {
                modal2.current.open()
                document.getElementsByClassName('fixed-nav')[0].className += ' hidden-nav'
                document.body.className += 'modal-open'
              }}
              onMouseEnter={() => setmodalHover2('hover-show')}
              onMouseLeave={() => setmodalHover2('hover-hidden')}
            >
              <img src={moreThanTiredImage} alt="More than tired"/>
              <div className={modalHover2}>
                <div className="hover-title">
                  More Than Tired
                </div>
              </div>
            </div>
            <ProjectModal ref={modal2} fade>
              Project Modal 2
            </ProjectModal>
            <div className="card"
              onClick={() => {
                modal3.current.open()
                document.getElementsByClassName('fixed-nav')[0].className += ' hidden-nav'
                document.body.className += 'modal-open'
              }}
              onMouseEnter={() => setmodalHover3('hover-show')}
              onMouseLeave={() => setmodalHover3('hover-hidden')}
            >
              <img src={narcolepsyLinkLogo} alt="Narcolepsy Link"/>
              <div className={modalHover3}>
                <div className="hover-title">
                  Narcolepsy Link
                </div>
              </div>
            </div>
            <ProjectModal ref={modal3} true>
              Project Modal 3
            </ProjectModal>
            <div className="card" onClick={() => {
              modal4.current.open()
              document.getElementsByClassName('fixed-nav')[0].className += ' hidden-nav'
              document.body.className += 'modal-open'
            }}>
              Project Image 4
            </div>
            <ProjectModal ref={modal4} fade>
              Project Modal 4
            </ProjectModal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsScreen