import React, { useState } from 'react';
import { register } from '../services/authService';

export default function Register(){
    const [form, setForm] = useState({email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await register(form);
          alert('Registered successfully');
        } catch (err) {
          console.error(err);
          if (err.response) {
            alert(err.response.data.message);
          } else {
            alert("Failed to connect to the server.");
          }
        }
      };
      
    return(
        <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
    )
}