import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return true
    }
  })

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
        <div className="brand">Bree's Pizzeria</div>
        <div className="nav-links">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/menu" className={linkClass}>
            Menu
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className="nav-right">
        <label className="theme-toggle">
          <input
            aria-label="Toggle dark mode"
            type="checkbox"
            checked={dark}
            onChange={() => setDark((s) => !s)}
          />
          <span>{dark ? 'Dark' : 'Light'}</span>
        </label>
      </div>
    </nav>
  )
}

export default Navbar
