import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Bree's Pizzeria — All rights reserved.</p>
        <p style={{marginTop:8,fontSize:12}}>Follow us on social media for specials.</p>
      </div>
    </footer>
  )
}

export default Footer
