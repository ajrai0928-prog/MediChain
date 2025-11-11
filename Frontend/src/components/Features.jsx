import React from 'react';
import { UserRound, Stethoscope, Hospital } from 'lucide-react';

export default function Features() {
  return (
    // This is a scroll section
    <section id="features" className="py-16 md:py-24 bg-gray-50" data-scroll-section>
      <div className="container mx-auto px-4">
        <h2
          className="reveal reveal-up text-4xl font-bold text-center mb-12"
          data-scroll
        >
          A Dedicated Portal for Everyone
        </h2>
        <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Patient Portal */}
          <div
            className="feature-card bg-white p-6 rounded-lg shadow-lg text-center reveal reveal-left"
            data-scroll
          >
            <div className="icon text-blue-600 mb-4 flex justify-center">
              <UserRound size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Patient Portal</h3>
            <p className="text-gray-600">
              Manage your complete medical history, view treatments, and
              communicate securely with your doctor. Your health, in your
              hands.
            </p>
          </div>
          {/* Doctor Portal */}
          <div
            className="feature-card bg-white p-6 rounded-lg shadow-lg text-center reveal reveal-up"
            data-scroll
            data-scroll-delay="0.1"
          >
            <div className="icon text-blue-600 mb-4 flex justify-center">
              <Stethoscope size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Doctor Portal</h3>
            <p className="text-gray-600">
              Access patient records with consent, update treatment plans,
              issue prescriptions, and monitor progress in real-time.
            </p>
          </div>
          {/* Hospital Portal */}
          <div
            className="feature-card bg-white p-6 rounded-lg shadow-lg text-center reveal reveal-right"
            data-scroll
            data-scroll-delay="0.2"
          >
            <div className="icon text-blue-600 mb-4 flex justify-center">
              <Hospital size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Hospital Portal</h3>
            <p className="text-gray-600">
              Streamline hospital administration, manage patient data,
              update bed availability, and oversee doctor assignments from a
              central dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}