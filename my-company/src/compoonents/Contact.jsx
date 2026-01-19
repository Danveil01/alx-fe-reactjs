import { useState } from 'react';

function Contact() {
  // Initialize state with an object to hold all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Spread the existing data and update only the field that changed
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple interactivity: show an alert with the user's name
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    console.log('Form Data:', formData);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: 'auto' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>Contact Us</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        
        <button 
          type="submit" 
          style={{ 
            backgroundColor: '#007bff', 
            color: 'white', 
            padding: '12px', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;