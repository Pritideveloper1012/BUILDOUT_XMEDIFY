import React, { useState } from 'react';

const SmsForm = () => {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Link sent to ${phone}`);
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="tel"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        style={{width:"70%"}}
        required
      />
      <button
        type="submit"
        style={{background:"rgb(42, 168, 255)",margin: "0px 10px", padding: "7px"}}
      >
        Send Link
      </button>
    </form>
  );
};

export default SmsForm;