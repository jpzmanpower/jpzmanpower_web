import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">JPZ</h3>
            <p className="text-gray-300 text-sm">
              JPZ is committed to connecting talented professionals with international opportunities, specializing in providing quality manpower solutions worldwide while helping resources secure better career prospects abroad.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com/jpzinternationaltravels" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/jpztravels" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/jpz.travels" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>

            </div>
          </div>

          {/* Quick Links Section
          <div>
            <h3 className="text-xl font-bold mb-4">Countries We Serve</h3>
            <ul className="space-y-2">
              {[
                'Japan',
                'UAE',
                'Saudi Arabia',
                'Qatar',
                'Bahrain',
                'Oman',
                'Kuwait',
                'Romania'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/countries/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Industries We Serve</h3>
            <ul className="space-y-2">
              {[
                'Construction',
                'Banking',
                'Hospitality',
                'Transportation',
                'Information Technology',
                'Oil Gas'
              ].map((industry) => (
                <li key={industry}>
                  <Link
                    href={`/industry/${industry.toLowerCase().replace(/\s+/g, '_')}`}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-gray-300 mt-1" size={20} />
                <p className="text-gray-300 text-sm">
                  Office No 99 Jinnah Stadium, Civil Lines, Gujranwala Pakistan
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-gray-300" size={20} />
                <p className="text-gray-300 text-sm">
                  <a href="tel:+92553844098" className="hover:text-white">+92-553844098-99</a>
                  {" | "}
                  <a href="tel:+923217443131" className="hover:text-white">+92-3217443131</a>
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-gray-300" size={20} />
                <a href="mailto:Jpzmanpower@gmail.com" className="text-gray-300 text-sm hover:text-white">
                  Jpzmanpower@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright + Built by SyncOps */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-300">
            <p>
              © {new Date().getFullYear()} JPZ · Built by{" "}
              <Link
                href="/built-by-syncops"
                className="text-white hover:underline"
                title="Website engineered by SyncOps"
              >
                SyncOps
              </Link>
              {" · "}
              <a
                href="https://syncops.tech"
                target="_blank"
                rel="noopener"
                className="hover:text-white hover:underline"
                title="SyncOps — AI-powered software solutions"
              >
                syncops.tech
              </a>
              {" · "}
              <a
                href="https://majidali.tech"
                target="_blank"
                rel="noopener"
                className="hover:text-white hover:underline"
                title="Majid Ali — Founder & CEO of SyncOps"
              >
                Majid Ali
              </a>
            </p>
            <div className="flex gap-5">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
