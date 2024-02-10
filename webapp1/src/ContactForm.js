import React, { useState } from 'react';
// Import Metro UI CSS here if you installed it via npm

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="metro-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default ContactForm;
