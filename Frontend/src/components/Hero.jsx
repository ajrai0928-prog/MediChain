import React from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      className="hero min-h-screen flex items-center justify-center py-20"
      data-scroll-section
    >
      <div className="hero-content container mx-auto px-4 text-center">
        <h1
          id="typewriter-headline"
          data-scroll
          data-scroll-speed="1"
          className="reveal reveal-up text-5xl md:text-7xl font-bold mb-4"
        >
          MediChain
        </h1>
        <p
          data-scroll
          data-scroll-speed="1.2"
          className="decs reveal reveal-up text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          <Typewriter
            options={{
              strings: ["A blockchain-secured, three-portal medical record & hospital management system for Patients, Doctors, and Hospitals.", "Your secure, unified, and permanent medical record.", ],
              delay:50,
              deleteSpeed:25,
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
        </p>
        <a
          href="#features"
          className="reveal reveal-up inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          data-scroll
          data-scroll-speed="1.4"
          data-scroll-to // This tells Locomotive Scroll to handle the anchor link
        >
          Explore The Portals
        </a>
      </div>
    </section>
  );
}
