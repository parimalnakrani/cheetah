import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-antonio text-3xl font-bold uppercase tracking-tighter mb-6">
            Cheetah Run
          </h3>
          <p className="font-archivo text-gray-400 max-w-xs text-sm">
            This project is just an experiment built by Parimal. It works in
            desktop only.
          </p>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">
            Features
          </h4>
          <ul className="space-y-4 font-archivo text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Speed Technology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Agility Framework
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Power Core
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Predatory Instinct
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">
            Support
          </h4>
          <ul className="space-y-4 font-archivo text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Warranty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">
            Company
          </h4>
          <ul className="space-y-4 font-archivo text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Sustainability
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center font-archivo text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Cheetah Run. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
