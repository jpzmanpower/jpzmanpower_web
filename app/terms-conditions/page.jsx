import React from 'react';

const TermsAndConditions = () => {
  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">Last Updated: {formattedDate}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Intro */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              By using the services of <strong>Jpz International Travels</strong>, you agree to the following terms.
            </p>
          </section>

          {/* 1. Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Services</h2>
            <p className="text-gray-700">
              We provide travel, ticketing, Umrah packages, and manpower services as per availability and
              third-party policies (airlines, embassies, etc.).
            </p>
          </section>

          {/* 2. Bookings & Payments */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Bookings & Payments</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All bookings require full or partial advance payment.</li>
              <li>Prices are subject to change without prior notice until payment is made.</li>
              <li>Additional charges (taxes, visa fees, baggage fees) may apply.</li>
            </ul>
          </section>

          {/* 3. Cancellations & Refunds */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cancellations & Refunds</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Refunds depend on airline/embassy rules, not just our office.</li>
              <li>Service charges are non-refundable.</li>
              <li>Refund timelines may vary from 15–90 days depending on the provider.</li>
            </ul>
          </section>

          {/* 4. Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We act as an agent between you and airlines/embassies.</li>
              <li>
                We are not responsible for delays, cancellations, or decisions by airlines, embassies, or
                immigration authorities.
              </li>
              <li>Travelers are responsible for valid travel documents (passport, visa, vaccination, etc.).</li>
            </ul>
          </section>

          {/* 5. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-3">Jpz International Travels is not liable for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Losses caused by flight delays, cancellations, or missed connections.</li>
              <li>Rejection of visa applications.</li>
              <li>Force majeure events (strikes, weather, political unrest).</li>
            </ul>
          </section>

          {/* 6. Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Governing Law</h2>
            <p className="text-gray-700">
              These Terms & Conditions shall be governed by the laws of Pakistan.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;


