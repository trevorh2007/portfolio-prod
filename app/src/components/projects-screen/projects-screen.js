import React, { useRef, useState } from 'react'
import './projects-screen.scss'

import ProjectModal from '../project-modal/project-modal'
import projectImage1 from '../../assets/images/DiscordProject.png'

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
                 onClick={() => modal.current.open()}
                 onMouseEnter={() => setmodalHover1('hover-show')}
                 onMouseLeave={() => setmodalHover1('hover-hidden')}
            >
              <img src={projectImage1} />
              <div className={modalHover1}>
                <div className="hover-title">
                  Discord Bot
                </div>
              </div>
            </div>
            <ProjectModal ref={modal} true>
              Project Modal 1
            </ProjectModal>
            <div className="card" onClick={() => modal2.current.open()}>
              Project Image 2
            </div>
            <ProjectModal ref={modal2} fade>
              Project Modal 2
            </ProjectModal>
            <div className="card" onClick={() => modal3.current.open()}>
              Project Image 3
            </div>
            <ProjectModal ref={modal3} true>
              Project Modal 3
            </ProjectModal>
            <div className="card" onClick={() => modal4.current.open()}>
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