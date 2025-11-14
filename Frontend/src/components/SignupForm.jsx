import React, { useState } from "react";
import axios from "axios";
import RoleSelector from "./RoleSelector";

export default function SignupForm() {
  const API_URL = import.meta.env.VITE_Backend_API_URL;

  const [role, setRole] = useState("patient");

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    specialization: "",
    licenseNumber: "",
  });

  const handle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const payload = {
      name: `${data.firstName} ${data.lastName}`.trim(),
      email: data.email,
      password: data.password,
      dob: data.dob,
      gender: data.gender,
      role,
      ...(role === "doctor"
        ? {
            specialization: data.specialization,
            licenseNumber: data.licenseNumber,
          }
        : {}),
    };

    try {
      await axios.post(`${API_URL}/auth/signup`, payload);
      alert("Account created!");
    } catch (err) {
      alert(err?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      {/* Role Selector (only once!) */}
      <RoleSelector role={role} setRole={setRole} />

      <form onSubmit={submit} className="space-y-4">
        {/* Name */}
        <div className="grid grid-cols-2 gap-4">
          <input
            name="firstName"
            onChange={handle}
            placeholder="First name"
            className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white"
            required
          />
          <input
            name="lastName"
            onChange={handle}
            placeholder="Last name"
            className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white"
            required
          />
        </div>

        {/* Email */}
        <input
          name="email"
          type="email"
          onChange={handle}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white"
          required
        />

        {/* DOB + Gender */}
        <div className="grid grid-cols-2 gap-4">
          <input
            name="dob"
            type="date"
            onChange={handle}
            className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white"
            required
          />
          <select
            name="gender"
            onChange={handle}
            className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white"
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Password */}
        <input
          name="password"
          type="password"
          onChange={handle}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white"
          required
        />

        {/* Doctor-only fields */}
        {role === "doctor" && (
          <div className="space-y-3">
            <input
              name="specialization"
              onChange={handle}
              placeholder="Specialization"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white"
              required
            />
            <input
              name="licenseNumber"
              onChange={handle}
              placeholder="License Number"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white"
              required
            />
          </div>
        )}

        {/* Submit button */}
        <button className="w-full py-3 bg-white text-black rounded-lg font-medium">
          Create an account
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-4 text-neutral-400">
          <div className="flex-1 h-px bg-white/10" />
          OR SIGN IN WITH
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Social */}
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
    </>
  );
}

