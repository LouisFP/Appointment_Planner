import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="0\d{9}"
        required
      />
      <input
        input="email"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input type="submit" value="Add contact" />
    </form>
  );
};
