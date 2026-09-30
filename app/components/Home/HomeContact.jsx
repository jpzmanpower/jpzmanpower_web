import { QRCodeSVG } from 'qrcode.react'
import React, { useState } from 'react';

const HomeContact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number.';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic (e.g., send to server)
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  return (
    <div>
      <div className="bg-white text-black my-6 flex justify-center items-center">
        <div className="max-w-7xl w-full p-6">
          {/* Header Section */}
          <h1 className="text-3xl font-bold mb-4">Request a Call Back</h1>
          <p className="mb-6 text-gray-600">
            If you have any questions about our services or need assistance regarding our processes, feel free to reach out. We will respond to your inquiry as soon as possible. You can contact us in the following ways:
          </p>
          <h2 className="font-bold mb-2">JPZ Technologies</h2>
          <div className="w-16 h-1 bg-secondary mb-6 rounded-md"></div>

          {/* Form & Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form */}
            <form onSubmit={handleSubmit} >
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-secondary ${errors.name ? 'ring-red-500' : ''
                      }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-secondary ${errors.email ? 'ring-red-500' : ''
                      }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-secondary ${errors.phone ? 'ring-red-500' : ''
                      }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-secondary ${errors.message ? 'ring-red-500' : ''
                      }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full p-3 text-white rounded-md bg-secondarydark bg-[length:180%_100%] bg-left hover:bg-right transition-all duration-500"
                >
                  Send
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-gray-600">
                      Office No 99 Jinnah Stadium, Civil Lines, Gujranwala, Pakistan
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">Telephone</h3>
                    <p className="text-gray-600">+92-553844098-99</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">Whatsapp</h3>
                    <p className="text-gray-600">
                      +92-3006407345 | +92-3217443131
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">Email</h3>
                    <a href="mailto:Jpzmanpower@gmail.com" className="text-blue-600 hover:text-blue-800">
                      Jpzmanpower@gmail.com
                    </a>
                  </div>
                </div>

                {/* Right Column - QR Code */}
                <div className="flex justify-center md:justify-end items-center">
                  <div className="bg-white p-2  shadow-md">

                    <QRCodeSVG
                      value="https://wa.me/message/QU63HAS5NBOKF1"
                      size={120}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeContact
