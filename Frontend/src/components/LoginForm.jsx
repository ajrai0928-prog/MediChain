import React, { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const API_URL = import.meta.env.VITE_Backend_API_URL;

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/auth/login`, data);
      alert("Login successful!");
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        name="email"
        onChange={handle}
        placeholder="Enter your email"
        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white"
        required
      />

      <input
        type="password"
        name="password"
        onChange={handle}
        placeholder="Password"
        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white"
        required
      />

      <button className="w-full py-3 bg-white text-black rounded-lg font-medium">
        Sign in
      </button>

      <div className="flex items-center gap-4 my-4 text-neutral-400">
        <div className="flex-1 h-px bg-white/10" />
        OR SIGN IN WITH
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="py-3 rounded-lg bg-black/40 border border-white/10 text-white flex items-center justify-center gap-2"
        >
          <img src="/google-icon.png" className="h-5" />
          Google
        </button>

        <button
          type="button"
          className="py-3 rounded-lg bg-black/40 border border-white/10 text-white flex items-center justify-center gap-2"
        >
          <img src="/apple-icon.png" className="h-5" />
          Apple
        </button>
      </div>
    </form>
  );
}

