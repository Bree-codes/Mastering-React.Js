import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Bree's Pizzeria — All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
