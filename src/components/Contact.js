import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const emailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    if (contactForm.name.trim().length < 3) {
      setErrorMsg('Your name should be at least 3 characters long.');
      return false;
    }
    if (!emailIsValid(contactForm.email)) {
      setErrorMsg('Please enter a valid email address.');
      return false;
    }
    if (contactForm.message.trim().length < 15) {
      setErrorMsg('Please write a longer message.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSuccessMsg('Thank you! I will get back to you as soon as possible.');
    setTimeout(() => {
      setSuccessMsg('');
      setContactForm({ name: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <div
      id="contact"
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        width: '100%',
        background: '#FCFDFD',
        flexWrap: 'wrap',
      }}
    >
      {/* Left Image Column */}
      <div
        style={{
          flex: isMobile ? '1 1 100%' : '0 0 45%',
          height: isMobile ? '200px' : '100vh',
          backgroundImage: `url('/images/bg-nexus.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <img
          src="/images/logo-nexus-1.png"
          alt="Logo"
          style={{
            width: '8rem',
            padding: '1.5rem',
          }}
        />
      </div>

      {/* Right Form Column */}
      <div
        style={{
          flex: isMobile ? '1 1 100%' : '0 0 55%',
          padding: isMobile ? '2rem' : '5rem 3.5rem',
          borderTop: '0.2px solid #818386',
          borderBottom: '0.2px solid #818386',
          boxSizing: 'border-box',
        }}
      >
        <h1
          style={{
            color: '#3F444C',
            textTransform: 'uppercase',
            fontSize: isMobile ? '2rem' : '2.5rem',
            letterSpacing: '0.5rem',
            fontWeight: '300',
            fontFamily: "'Jost', sans-serif",
          }}
        >
          Contact us
        </h1>

        <p
          style={{
            color: '#818386',
            fontSize: '0.9rem',
            marginTop: '0.5rem',
            fontFamily: "'Helvetica Neue', sans-serif",
          }}
        >
          Let's discuss how EquiCore Nexus can partner with you to achieve your most ambitious financial goals.
        </p>

        {/* Form */}
        <form
          onSubmit={handleContactSubmit}
          style={{
            width: '100%',
            maxWidth: '600px',
            marginTop: '2rem',
            padding: '1rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              style={{
                color: '#818386',
                textTransform: 'uppercase',
                fontSize: '0.625rem',
                fontFamily: "'Jost', sans-serif",
                marginBottom: '0.5rem',
                display: 'block',
              }}
            >
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              required
              value={contactForm.name}
              onChange={handleContactChange}
              style={{
                width: '100%',
                color: '#010712',
                fontWeight: 500,
                background: '#FCFDFD',
                border: 'none',
                borderBottom: '1px solid #818386',
                padding: '0.5rem 0',
                outline: 'none',
                fontFamily: "'Helvetica Neue', sans-serif",
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              style={{
                color: '#818386',
                textTransform: 'uppercase',
                fontSize: '0.625rem',
                fontFamily: "'Jost', sans-serif",
                marginBottom: '0.5rem',
                display: 'block',
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              required
              value={contactForm.email}
              onChange={handleContactChange}
              style={{
                width: '100%',
                color: '#010712',
                fontWeight: 500,
                background: '#FCFDFD',
                border: 'none',
                borderBottom: '1px solid #818386',
                padding: '0.5rem 0',
                outline: 'none',
                fontFamily: "'Helvetica Neue', sans-serif",
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              style={{
                color: '#818386',
                textTransform: 'uppercase',
                fontSize: '0.625rem',
                fontFamily: "'Jost', sans-serif",
                marginBottom: '0.5rem',
                display: 'block',
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              value={contactForm.message}
              onChange={handleContactChange}
              style={{
                width: '100%',
                color: '#010712',
                fontWeight: 500,
                background: '#FCFDFD',
                border: 'none',
                borderBottom: '1px solid #818386',
                padding: '0.5rem 0',
                outline: 'none',
                resize: 'none',
                fontFamily: "'Helvetica Neue', sans-serif",
              }}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              textTransform: 'uppercase',
              fontWeight: 300,
              background: '#00acc1',
              color: '#FCFDFD',
              width: '10rem',
              height: '2.32rem',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              fontFamily: "'Jost', sans-serif",
            }}
          >
            Get In Touch
          </button>
        </form>

        {/* Messages */}
        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            fontFamily: "'Jost', sans-serif",
            color: '#818386',
          }}
        >
          {errorMsg}
        </div>
        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            fontFamily: "'Jost', sans-serif",
            color: '#818386',
          }}
        >
          {successMsg}
        </div>
      </div>
    </div>
  );
};

export default Contact;
