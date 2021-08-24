import React, { useState, useRef } from 'react'
import './projects-screen.scss'

import ProjectModal from '../project-modal/project-modal'

const ProjectsScreen = ({pageRefs}) => {
  const modal = useRef(null)

  return (
    <section id="projects" className="projects-section" ref={el => pageRefs.current = { ...pageRefs.current, projects: el }}>
      <div className="container">
        <div className="section-header">
          Projects
          <div className="section-header-bar" />
        </div>
        <div className="project-gallery">
          <div className="cards">
            <button onClick={() => modal.current.open()}>Show modal</button>
            <ProjectModal ref={modal}>
              Quick test, card will go here later
            </ProjectModal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsScreen