import React from 'react'

const Home: React.FC = () => {
  return (
    <section>
      <h1>Welcome to Bree's Pizzeria</h1>
      <p>
        Hand-tossed pies, fresh ingredients, and a warm atmosphere. Order online
        or visit us in person.
      </p>
      <div className="hero">
        <img alt="pizza" src="https://images.unsplash.com/photo-1601924582970-1c2aeba8f3d1?auto=format&fit=crop&w=1200&q=60" />
      </div>
    </section>
  )
}

export default Home
