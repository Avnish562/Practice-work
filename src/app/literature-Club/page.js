"use client";

import { useState } from "react";

export default function LiteratureClub() {
  const [formData, setFormData] = useState({
    name: "",
    registrationNo: "",
    email: "",
    section: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Application submitted successfully!");

    console.log(formData);
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h1>Literature Club Application Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        {/* Registration Number */}
        <label>Registration No:</label>
        <input
          type="text"
          name="registrationNo"
          value={formData.registrationNo}
          onChange={handleChange}
          required
        />

        <br /><br />

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        {/* Section */}
        <label>Section:</label>
        <select
          name="section"
          value={formData.section}
          onChange={handleChange}
          required
        >
          <option value="">Select Section</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>

        <br /><br />

        {/* Department */}
        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">Apply</button>
      </form>
    </div>
  );
}