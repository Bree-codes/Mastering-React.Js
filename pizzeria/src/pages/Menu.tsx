import React from 'react'

type Item = {
  id: number
  name: string
  description?: string
  priceKES: number
}

const MENU: Item[] = [
  { id: 1, name: 'Margherita', description: 'Tomato, mozzarella, basil', priceKES: 800 },
  { id: 2, name: 'Pepperoni', description: 'Spicy pepperoni, cheese', priceKES: 1000 },
  { id: 3, name: 'Veggie Delight', description: 'Peppers, olives, onions', priceKES: 900 },
  { id: 4, name: 'Bree Special', description: 'Chef special toppings', priceKES: 1200 }
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
            <h3>{it.name}</h3>
            <p className="muted">{it.description}</p>
            <div className="price">{formatter.format(it.priceKES)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
