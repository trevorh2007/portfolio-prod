import React from 'react'
import './projects-screen.scss'

const ProjectsScreen = ({pageRefs}) => {
  return (
    <section id="projects" className="projects-section" ref={el => pageRefs.current = { ...pageRefs.current, projects: el }}>
        Projects Section
    </section>
  )
}

export default ProjectsScreen