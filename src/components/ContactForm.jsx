import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\+\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (minimum 10 digits)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    // Simulate successful submission
    setSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setCharCount(0);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2>Have Questions About Planetary Science?</h2>
          <p className="contact-description">
            Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?<br />
            Reach out and we'll get back to you.
          </p>
        </div>

        {submitted ? (
          <div className="success-message">
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-grid">

              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name<span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">
                  Email<span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="example@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phoneNumber">
                  Phone Number<span className="asterisk">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="e.g. 08012345678"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">
                  Message<span className="asterisk">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Enter your message"
                  maxLength="500"
                />
                <div className="char-counter">{charCount}/500 characters</div>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

            </div>

            <button type="submit" className="submit-btn">
              Submit <span className="arrow"> &rsaquo; </span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;