import React, { useState, useEffect, useRef } from 'react'
import './nav-bar.scss'

import resumePDF from '../../assets/pdf/Trevor Howard - Resume.pdf'
import resumeDOCX from '../../assets/docx/Trevor Howard - Resume.docx'

function NavBar({ pageRefs }){
    const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false)
    const resumeDropdownRef = useRef(null)

    function scrollIntoView(type) {
        pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
    }
    
    function scrollIntoViewMobile(type) {
        pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
        document.getElementById('mobile-checkbox').checked = false
    }

    function handleClickOutside(event) {
        if (resumeDropdownRef.current && !resumeDropdownRef.current.contains(event.target)) {
            setResumeDropdownOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside)
    }, [])
    
    return (
        <div className="fixed-nav">
            <nav>  
                <div className="header">
                    <div>Trevor Howard</div>
                    <div>Software Developer</div>
                </div>
                <div className="nav-bar">
                    <div className="page-link" onClick={() => scrollIntoView('home')}>Home</div>  
                    <div className="page-link" onClick={() => scrollIntoView('about')}>About</div>
                    <div className="page-link" onClick={() => scrollIntoView('projects')}>Projects</div>
                    <div className="page-link" onClick={() => scrollIntoView('contact')}>Contact</div>
                    <div className="page-link" onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}>Resume</div>
                    <div className="resume-container">
                        {resumeDropdownOpen && (
                            <div className="resume-dropdown" ref={resumeDropdownRef}>
                                <ul>
                                    <li onClick={() => window.open(resumePDF, "_blank")}>PDF</li>
                                    <li onClick={() => window.open(resumeDOCX, "_blank", 'noopener,noreferrer')}>DOCX</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mobile-nav-toggle">
                    <input id="mobile-checkbox" type="checkbox" />
                    <span />
                    <span />
                    <span />
                    <div id="mobile-menu">
                        <div className="page-link-padding">
                            <div className="page-link" onClick={() => scrollIntoViewMobile('home')}>Home</div>  
                            <div className="page-link" onClick={() => scrollIntoViewMobile('about')}>About</div>
                            <div className="page-link" onClick={() => scrollIntoViewMobile('projects')}>Projects</div>
                            <div className="page-link" onClick={() => scrollIntoViewMobile('contact')}>Contact</div>
                            <div className="page-link" onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}>Resume</div>
                            <div className="resume-container">
                                {resumeDropdownOpen && (
                                    <div className="resume-dropdown" ref={resumeDropdownRef}>
                                        <ul>
                                            <li onClick={() => window.open(resumePDF, "_blank")}>PDF</li>
                                            <li onClick={() => window.open(resumeDOCX, "_blank", 'noopener,noreferrer')}>DOCX</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar