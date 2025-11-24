import React from 'react'

type Item = {
  id: number
  name: string
  description?: string
  priceKES: number
  image?: string
}

const MENU: Item[] = [
  { id: 1, name: 'Margherita', description: 'Tomato, mozzarella, basil', priceKES: 800, image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=60' },
  { id: 2, name: 'Pepperoni', description: 'Spicy pepperoni, cheese', priceKES: 1000, image: 'https://images.unsplash.com/photo-1604908177522-9f77b2c48f97?auto=format&fit=crop&w=800&q=60' },
  { id: 3, name: 'Veggie Delight', description: 'Peppers, olives, onions', priceKES: 900, image: 'https://images.unsplash.com/photo-1604917861259-0d03a8de4b4a?auto=format&fit=crop&w=800&q=60' },
  { id: 4, name: 'Bree Special', description: 'Chef special toppings', priceKES: 1200, image: 'https://images.unsplash.com/photo-1541599540903-216a46caad27?auto=format&fit=crop&w=800&q=60' }
]

const formatter = new Intl.NumberFormat('en-KE', {
  style: 'currency',
  currency: 'KES',
})

const Menu: React.FC = () => {
  return (
    <section>
      <h1>Menu</h1>
      <div className="menu-grid">
        {MENU.map((it) => (
          <div key={it.id} className="menu-item">
            <div className="menu-media">
              <img alt={it.name} src={it.image} />
            </div>
            <div className="menu-body">
              <h3>{it.name}</h3>
              <p className="muted">{it.description}</p>
              <div className="menu-foot">
                <div className="price">{formatter.format(it.priceKES)}</div>
                <button className="order-btn primary">Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
