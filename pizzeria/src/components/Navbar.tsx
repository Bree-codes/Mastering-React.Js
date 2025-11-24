import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return true
    }
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const body = document.body
    if (dark) {
      body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link${isActive ? ' active' : ''}`

  return (
    <nav className="nav container">
      <div className="nav-left">
        <img src={logo} alt="Bree's logo" style={{ width: 46, height: 46, borderRadius: 8, marginRight: 12 }} />
        <div>
          <div className="brand">Bree's Pizzeria</div>
        </div>
      </div>

      <div className="nav-right">
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" className={linkClass} end onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/menu" className={linkClass} onClick={() => setOpen(false)}>
            Menu
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
            Contact Us
          </NavLink>
        </div>

        <label className="theme-toggle">
          <input
            aria-label="Toggle dark mode"
            type="checkbox"
            checked={dark}
            onChange={() => setDark((s) => !s)}
          />
          <span>{dark ? 'Dark' : 'Light'}</span>
        </label>

        <button
          className="mobile-toggle"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </nav>
  )
}

export default Navbar
