import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_6x5dtos',
      'template_vvl8t4k',
      form.current,
      'g9YmxXClFZgFW5u5O'
    )
    .then(() => {
      setSent(true);
      setLoading(false);
      form.current.reset();
    })
    .catch((err) => {
      console.error('Email send error:', err);
      setLoading(false);
    });
  };

  return (
    <section id="contact" style={{ padding: '5rem 2rem', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Contact Me</h2>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          Want to work together or just say hi? Fill out the form below and I’ll get back to you!
        </p>

        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {sent && <p style={{ color: 'green', marginTop: '1rem' }}>Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

const inputStyle = {
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '0.75rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
};

export default Contact;
