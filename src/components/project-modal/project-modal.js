import React, { useState, useCallback, useImperativeHandle, useEffect, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import './project-modal.scss'
import { RiCloseFill } from 'react-icons/ri'

const modalElement = document.getElementById('modal-root')

export function ProjectModal({ children, fade = false, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened)

  const close = useCallback(() => {
    setIsOpen(false)
    document.getElementsByClassName('fixed-nav')[0].classList.remove('hidden-nav')
    document.body.classList.remove('modal-open')
  }, [])

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [close])

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  return createPortal(
    isOpen ? (
      <div className={`modal-wrap ${fade ? 'modal-fade' : ''}`}>
        <div className="modal">
          <span role="button" className="modal-close" aria-label="close" onClick={close}>
            <RiCloseFill />
          </span>
          <div className="modal-body">
            {children}
            <div className="mobile-close-modal" onClick={close}>Close modal</div>
          </div>
        </div>
      </div>
    ) : null,
    modalElement
  )
}

export default forwardRef(ProjectModal)