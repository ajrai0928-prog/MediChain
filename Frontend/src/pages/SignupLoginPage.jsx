import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import BackgroundDNA from "../components/BackgroundDNA";
import Navbar from "../components/Navbar";

/**
 * SignupLoginPage.jsx
 * - Uses BackgroundDNA for extreme DNA lab animation
 * - Modal card sits on top (z-10)
 */
export default function SignupLoginPage() {
  const [mode, setMode] = useState("signup");
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
    <Navbar />

      {/* Animated background */}
      <BackgroundDNA />

      {/* subtle dim overlay to increase contrast on modal */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      {/* modal container */}
      <div className="relative w-full max-w-lg mx-auto z-10">
        <div className="relative bg-gradient-to-b from-neutral-900/80 to-neutral-900/70 backdrop-blur-2xl border border-white/10 p-7 rounded-2xl shadow-2xl">
          {/* Header row: tabs + optional vector logo */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full px-3 py-1 bg-white text-black font-medium">MediChain</div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setMode("signup")}
                className={`px-4 py-2 rounded-full text-sm transition ${mode === "signup" ? "bg-white text-black font-medium" : "bg-transparent text-white/70"}`}
              >
                Sign up
              </button>
              <button
                onClick={() => setMode("signin")}
                className={`px-4 py-2 rounded-full text-sm transition ${mode === "signin" ? "bg-white text-black font-medium" : "bg-transparent text-white/70"}`}
              >
                Sign in
              </button>
              <button onClick={() => setOpen(false)} className="text-white/60 ml-2">✕</button>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-white mb-6">
            {mode === "signup" ? "Create an account" : "Welcome back"}
          </h1>

          {mode === "signup" ? <SignupForm /> : <LoginForm />}
        </div>

        <div className="mt-4 text-center text-neutral-400 text-sm">
          {mode === "signup" ? "By creating an account, you agree to our Terms & Service" : "Don't have an account? Switch to Sign up"}
        </div>
      </div>
    </div>
  );
}
