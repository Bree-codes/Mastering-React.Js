import React from 'react'
const hero = '/src/assets/hero.svg'

const Home: React.FC = () => {
  return (
    <section>
      <div className="hero">
        <img alt="Delicious pizza" src={hero} />
        <div className="hero-overlay container">
          <h1>Welcome to Bree's Pizzeria</h1>
          <p>
            Hand-tossed pies made from the freshest ingredients. Try our chef
            specials and taste the love in every slice.
          </p>
          <a className="btn" href="/menu">View Menu</a>
        </div>
      </div>
    </section>
  )
}

export default Home
