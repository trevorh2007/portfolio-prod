import React from 'react'
import './nav-bar.scss'

function NavBar({ pageRefs }){
    function scrollIntoView(type) {
        pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
    }
    
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
                </div>  
            </nav>
        </div>
    )
}

export default NavBar