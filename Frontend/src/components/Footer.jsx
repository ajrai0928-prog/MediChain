import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      data-scroll-section
      className="bg-gray-900 text-gray-300 pt-12 pb-8"
    >
      <div className="container mx-auto px-4 text-center">
        
        {/* Developers Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Developed By
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            
            <a
              href="https://www.linkedin.com/in/abhinav-sahu-865a01297/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-gray-200 px-6 py-2 rounded-full shadow-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              Abhinav Sahu
            </a>
            
            <a
              href="https://www.linkedin.com/in/adarshsachan01/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-gray-200 px-6 py-2 rounded-full shadow-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              Adarsh Sachan
            </a>
            
            <a
              href="https://www.linkedin.com/in/abhinav-kumar-10a942262/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-gray-200 px-6 py-2 rounded-full shadow-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              Abhinav
            </a>

          </div>
        </div>

        <div className="mb-0 text-center">
          <a
            href="https://github.com/theadarsh1m/MediChain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-white transition-colors"
          >
            <Github className="inline-block w-5 h-5 mr-2" />
            Contribute on GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}