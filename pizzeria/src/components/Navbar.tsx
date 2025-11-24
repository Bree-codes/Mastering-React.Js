import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
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

  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="brand">Bree's Pizzeria</div>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/menu" className="nav-link">
          Menu
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact Us
        </NavLink>
      </div>
      <div className="nav-right">
        <label className="theme-toggle">
          <input
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
