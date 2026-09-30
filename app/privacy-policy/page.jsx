import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              JPZ Manpower ("we," "our," or "us") is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or use our recruitment and visa processing services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Name, contact information (email, phone, address)</li>
              <li>Date of birth, nationality, and passport information</li>
              <li>Educational background and work experience</li>
              <li>Skills, qualifications, and certifications</li>
              <li>Employment preferences and job requirements</li>
              <li>Financial information for payment processing</li>
              <li>Government-issued identification documents</li>
              <li>Visa application documents and supporting materials</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Providing recruitment and job placement services</li>
              <li>Processing visa applications and related documentation</li>
              <li>Matching candidates with suitable employment opportunities</li>
              <li>Communicating with you about our services and job opportunities</li>
              <li>Verifying your identity and qualifications</li>
              <li>Processing payments and managing financial transactions</li>
              <li>Complying with legal and regulatory requirements</li>
              <li>Improving our services and website functionality</li>
              <li>Marketing and promotional activities (with your consent)</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Employers and Clients:</strong> To facilitate job placements and recruitment processes</li>
              <li><strong>Government Agencies:</strong> For visa processing and compliance with immigration requirements</li>
              <li><strong>Service Providers:</strong> Third-party companies that assist us in providing our services</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and interests</li>
              <li><strong>Business Partners:</strong> With your explicit consent for specific purposes</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage.
            </p>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Types of Cookies We Use:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You can control cookie settings through your browser preferences, though disabling certain cookies may 
              affect website functionality.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Encryption of sensitive data during transmission and storage</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection practices</li>
              <li>Secure data centers and backup systems</li>
            </ul>
          </section>

          {/* Visa Processing & Refund Policy */}
          <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Visa Processing & Refund Policy</h2>
            <p className="text-gray-700 mb-4">
              This section outlines our specific policies regarding visa processing services and refunds.
            </p>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Work Visa Processing</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Work visas are <strong>refundable</strong> subject to our cancellation and processing terms</li>
              <li>Refund eligibility depends on the stage of processing and reason for cancellation</li>
              <li>Processing fees may be deducted from refunds based on work completed</li>
              <li>Refund requests must be submitted in writing within 30 days of cancellation</li>
              <li>Refunds will be processed within 15-30 business days after approval</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Visit Visa Processing</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Visit visas are <strong>non-refundable</strong> once processing has commenced</li>
              <li>This policy applies regardless of the outcome of the visa application</li>
              <li>Government fees and third-party charges are non-refundable</li>
              <li>Processing fees cover administrative costs and cannot be recovered</li>
            </ul>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> All refund policies are subject to government regulations and third-party 
                terms. Please review all terms and conditions before proceeding with any visa application.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request a copy of your personal information we hold</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Restriction:</strong> Limit how we process your information</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Active recruitment files: 3 years after last contact</li>
              <li>Visa processing records: 7 years for compliance purposes</li>
              <li>Financial records: 7 years as required by law</li>
              <li>Website analytics data: 2 years maximum</li>
            </ul>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700">
              As a recruitment agency, we may transfer your personal information to countries outside your residence 
              for the purpose of job placements and visa processing. We ensure appropriate safeguards are in place 
              to protect your information during such transfers.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
              information from children. If we become aware that we have collected information from a child, we will 
              take steps to delete such information promptly.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the updated policy on our website and updating the 
              "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>JPZ Manpower</strong></p>
              <p>Email: Jpzmanpower@gmail.com</p>
              <p>Phone: +92-553844098-99 | +92-3217443131</p>
              <p>Address: Office No 99 Jinnah Stadium, Civil Lines, Gujranwala Pakistan</p>
            </div>
            <p className="text-gray-700 mt-4">
              We will respond to your inquiry within 30 days of receipt.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
