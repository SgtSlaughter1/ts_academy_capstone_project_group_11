import React, { useState } from 'react';


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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'message') {
      setCharCount(value.length);
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Real API endpoint
        const response = await fetch('https://whitebricks.com/tsacademy.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          })
        });
        
        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
          setCharCount(0);
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert('Submission failed. Please try again.');
        }
      } catch (error) {
        console.error('Submission error:', error);
        alert('Something went wrong. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
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
              <div className="form-group">
                <label htmlFor="fullName">Full Name<span className="asterisk">*</span></label>
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

              <div className="form-group">
                <label htmlFor="email">Email<span className="asterisk">*</span></label>
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

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number<span className="asterisk">*</span></label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="Please enter a valid phone number"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message<span className="asterisk">*</span></label>
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
                <div className="char-counter">{charCount}/100 characters</div>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit'} <span className="arrow"> &rsaquo; </span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;