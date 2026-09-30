
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

import { Download, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const metadata = {
  title: "Contact Us",
  description:
    "Contact JPZ Manpower in Gujranwala for overseas employment, visa processing, and recruitment. Phone, WhatsApp, email, and office location.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact JPZ Manpower",
    description:
      "Get in touch with JPZ Manpower for overseas careers, visa processing, and recruitment support.",
    url: "/contact",
  },
};

const ContactItem = ({ icon: Icon, label, value, isLink }) => (
  <div className="flex items-center space-x-3 py-2 rounded-lg hover:bg-white/50 transition-all">
    <Icon className="w-5 h-5 text-secondary" />
    <div>
      <span className="font-medium text-gray-700">{label}: </span>
      {isLink ? (
        <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {value.replace('https://', '')}
        </a>
      ) : (
        <span className="text-gray-600">{value}</span>
      )}
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="flex items-center justify-start space-x-6 mt-6">
    <a
      href="https://facebook.com/jpzinternationaltravels"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
    >
      <Facebook className="w-6 h-6" />
    </a>
    <a
      href="https://twitter.com/jpztravels"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
    >
      <Twitter className="w-6 h-6" />
    </a>
    <a
      href="https://instagram.com/jpz.travels"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors"
    >
      <Instagram className="w-6 h-6" />
    </a>
  </div>
);

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with JPZ Manpower Services</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-8 max-w-4xl mx-auto p-6 lg:p-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {/* Address */}
                <ContactItem
                  icon={MapPin}
                  label="Address"
                  value="Office No 99, Jinnah Stadium, Civil Lines, Gujranwala, Pakistan"
                />

                {/* Telephone */}
                <ContactItem
                  icon={Phone}
                  label="Telephone"
                  value="+92-553844098-99"
                />

                {/* Email */}
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value="Jpzmanpower@gmail.com"
                />

                {/* WhatsApp with QR Code */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6">
                  <div>
                    <ContactItem
                      icon={Phone}
                      label="WhatsApp"
                      value="+92-3006407345 | +92-3217443131"
                    />
                    <SocialLinks />
                  </div>
                  <div className="lg:ml-auto">
                    <QRCodeSVG
                      value="https://wa.me/message/QU63HAS5NBOKF1"
                      size={120}
                      className="border-4 border-white rounded-lg shadow-md"
                    />
                  </div>
                </div>

                {/* Social Links */}
              </div>
            </div>

            {/* Download Resume Button */}
            <a
              href="/pic/JPZresume.png"
              download
              className="inline-flex items-center justify-center w-full  px-4  py-4 space-x-3 text-white rounded-xl bg-secondarydark bg-[length:180%_100%] bg-left hover:bg-right  transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              <Download className="w-6 h-6" />
              <span className="font-medium text-lg">Download Application Form</span>
            </a>
          </div>

          <div className="space-y-8">

            <Image
              src="/pic/JPZresume.png"
              alt="JPZ Travel Team"
              width={600}
              height={100}
              className="w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="container mx-auto h-[500px] mb-6">
          <iframe
            title="JPZ Manpower Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262.3257603446632!2d74.19033425897794!3d32.162888819428396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2a20e5a91cc9%3A0x4fbde55746ea9746!2sJpz%20Travel%20%26%20Manpower%20Services!5e1!3m2!1sen!2s!4v1735566699608!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        {/* Built by SyncOps — compact credit */}
        <section className="max-w-4xl mx-auto mt-4 mb-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
            <Link href="/built-by-syncops" className="relative w-10 h-10 shrink-0">
              <Image
                src="/pic/majid-ali-ceo.png"
                alt="Majid Ali, CEO of SyncOps"
                fill
                sizes="40px"
                className="object-cover rounded-full"
              />
            </Link>
            <p className="text-sm text-gray-600">
              Built by{" "}
              <Link
                href="/built-by-syncops"
                className="font-semibold text-primary hover:underline"
                title="Website engineered by SyncOps"
              >
                SyncOps
              </Link>
              {" · "}
              <a
                href="https://syncops.tech"
                target="_blank"
                rel="noopener"
                className="text-blue-700 hover:underline"
                title="SyncOps — AI-powered software solutions"
              >
                syncops.tech
              </a>
              {" · "}
              <a
                href="https://majidali.tech"
                target="_blank"
                rel="noopener"
                className="text-blue-700 hover:underline"
                title="Majid Ali — Founder & CEO of SyncOps"
              >
                Majid Ali
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
