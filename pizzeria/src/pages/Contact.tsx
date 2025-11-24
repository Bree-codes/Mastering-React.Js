import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you, ${name}! We'll get back to ${email} soon.`)
  }

  return (
    <section>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Message
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact
