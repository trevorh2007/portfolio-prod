import React, { useRef, useState } from 'react'
import './projects-screen.scss'

import ProjectModal from '../project-modal/project-modal'
import kanbanBoardImage from '../../assets/images/kanban-board.svg'
import narcolepsyLinkLogo from '../../assets/images/narc-temp-logo-lg.png'
import xyremLogo from '../../assets/images/xyrem-sodium-oxybate-logo.png'

import discordGif from '../../assets/gifs/discord-bot1.gif'
import kanbanGif from '../../assets/gifs/kanban.gif'
import narcolepsyGif from '../../assets/gifs/narc-link1.gif'
import xyremGif from '../../assets/gifs/xyrem1.gif'
import { RiDiscordFill } from 'react-icons/ri'

const ProjectsScreen = ({ pageRefs }) => {
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
            <ProjectModal ref={modal} fade>
              <img src={discordGif} className="project-gif" alt="Discord bot" />
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
              <img src={kanbanBoardImage} className="width-50-img" alt="Kanban Board" />
              <div className={modalHover2}>
                <div className="hover-title">
                  Kanban Board
                </div>
              </div>
            </div>
            <ProjectModal ref={modal2} fade>
              <img src={kanbanGif} className="project-gif short-height-gif" alt="Kanban Board" />
              <div className="project-description">
                Drag and drop kanban board I wanted to create for personal use. If you demo the site you can see I was actually using it as I was building it. This was a ton of fun to build and I will be using and upgrading this application throughout my development career.
                <ul>
                  <li>PostgreSQL for storage needs (Micro-service RESTful API hosted on Heroku)</li>
                  <li>React front-end</li>
                  <li>Node back-end, Express for API routes</li>
                </ul>
              </div>
              <div className="project-btns">
                <div className="project-link-btn btn" onClick={() => window.open('https://kanban-clone.rellikboon.repl.co/', '_blank')}>View Site</div>
                <div className="project-source-btn btn" onClick={() => window.open('https://github.com/trevorh2007/kanban-clone', '_blank')}>View Source</div>
              </div>
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
              <img src={narcolepsyLinkLogo} alt="Narcolepsy Link" />
              <div className={modalHover3}>
                <div className="hover-title">
                  Narcolepsy Link
                </div>
              </div>
            </div>
            <ProjectModal ref={modal3} fade>
              <img src={narcolepsyGif} className="project-gif" alt="Narcolepsy Link" />
              <div className="project-description">
                A website built for healthcare professionals to stay informed about narcolepsy. ESS/SNS screeners to help determine if their patients may have narcolepsy with or without cataplexy.
                <ul>
                  <li>MySQL for storage needs</li>
                  <li>React front-end</li>
                  <li>Node back-end</li>
                </ul>
              </div>
              <div className="project-btns">
                <div className="project-link-btn btn" onClick={() => window.open('https://www.narcolepsylink.com', '_blank')}>View Site</div>
              </div>
            </ProjectModal>
            <div className="card" onClick={() => {
              modal4.current.open()
              document.getElementsByClassName('fixed-nav')[0].className += ' hidden-nav'
              document.body.className += 'modal-open'
            }}
              onMouseEnter={() => setmodalHover4('hover-show')}
              onMouseLeave={() => setmodalHover4('hover-hidden')}>
              <img src={xyremLogo} alt="Narcolepsy Link" />
              <div className={modalHover4}>
                <div className="hover-title">
                  Xyrem
                </div>
              </div>
            </div>
            <ProjectModal ref={modal4} fade>
              <img src={xyremGif} className="project-gif" alt="Xyrem" />
              <div className="project-description">
                A healthcare based website for the pharmaceutical drug Xyrem. Information for obtaining, taking, and any questions patients or professionals may have about the drug Xyrem.
                <ul>
                  <li>MySQL for storage needs</li>
                  <li>MODX CMS used for all front-end content</li>
                </ul>
              </div>
              <div className="project-btns">
                <div className="project-link-btn btn" onClick={() => window.open('https://www.xyrem.com', '_blank')}>
                  View Site
                  <span>
                    (disable adblock to view site)
                  </span>
                </div>
              </div>
            </ProjectModal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsScreen