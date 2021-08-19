import React from 'react'
import './projects-screen.scss'

const ProjectsScreen = ({pageRefs}) => {
  return (
    <section id="projects" className="projects-section" ref={el => pageRefs.current = { ...pageRefs.current, projects: el }}>
      <div className="container">
        <div className="section-header">
          Projects
          <div className="section-header-bar" />
        </div>
      </div>
    </section>
  )
}

export default ProjectsScreen