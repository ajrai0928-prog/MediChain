import React from 'react';
import { Blocks, UserCheck, Lock } from 'lucide-react';

export default function Security() {
  return (
    <section id="security" className="py-16 md:py-24 bg-gray-50" data-scroll-section>
      <div className="container mx-auto px-4">
        <h2
          className="reveal reveal-up text-4xl font-bold mb-12 text-center"
          data-scroll
        >
          Built on a Foundation of Trust
        </h2>
        <div className="security-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Features */}
          <div className="security-text flex flex-col gap-8 reveal reveal-left" data-scroll>
            <div className="security-feature flex items-start gap-4">
              <div className="icon flex-shrink-0 text-blue-600">
                <Blocks size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">Blockchain Immutability</h3>
                <p className="text-gray-600">
                  Every record, prescription, and report is
                  cryptographically sealed on the blockchain, making it
                  tamper-proof and permanent.
                </p>
              </div>
            </div>
            <div className="security-feature flex items-start gap-4">
              <div className="icon flex-shrink-0 text-blue-600">
                <UserCheck size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">Patient-Controlled Access</h3>
                <p className="text-gray-600">
                  You are the sole gatekeeper of your data. You decide who
                  sees what, and for how long, using a sophisticated
                  permission system.
                </p>
              </div>
            </div>
            <div className="security-feature flex items-start gap-4">
              <div className="icon flex-shrink-0 text-blue-600">
                <Lock size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">End-to-End Encryption</h3>
                <p className="text-gray-600">
                  All data, including chats between doctors and patients, is
                  encrypted both in transit and at rest, ensuring complete
                  privacy.
                </p>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="security-image reveal reveal-right" data-scroll>
            <img
              src="https://bernardmarr.com/img/What%20Is%20Blockchain%20A%20Super%20Simple%20Guide%20Anyone%20Can%20Understand.png"
              alt="Blockchain Security"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}