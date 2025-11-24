import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // simulate form submission
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
    setTimeout(() => setSubmitted(false), 4000)
  }

  const canSubmit = name.trim().length > 0 && /\S+@\S+\.\S+/.test(email)

  return (
    <section>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form" aria-live="polite">
        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your full name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </label>
        <label>
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="How can we help you?"
          />
        </label>
        <button type="submit" disabled={!canSubmit} className={canSubmit ? 'btn' : 'order-btn'}>
          Send Message
        </button>

        {submitted && (
          <div className="contact-success" role="status">
            Thank you — we'll get back to you shortly.
          </div>
        )}
      </form>
    </section>
  )
}

export default Contact
