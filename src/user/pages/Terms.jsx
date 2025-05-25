import { useEffect } from 'react';
import { PiHamburgerLight, PiShieldCheck, PiUsers, PiGavel } from 'react-icons/pi';

// CLAUDE GENERATE CONTENT 

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keyTerms = [
    {
      id: 1,
      icon: <PiShieldCheck className="text-3xl text-blackBg mt-1" />,
      heading: "Service Availability",
      description: "Our QR code menu service is available 24/7 with 99.9% uptime guarantee for your restaurant operations."
    },
    {
      id: 2,
      icon: <PiUsers className="text-3xl text-blackBg mt-1" />,
      heading: "User Responsibilities",
      description: "Restaurant owners are responsible for menu accuracy, pricing updates, and compliance with local food regulations."
    },
    {
      id: 3,
      icon: <PiGavel className="text-3xl text-blackBg mt-1" />,
      heading: "Acceptable Use",
      description: "Service must be used for legitimate restaurant business purposes only, with accurate menu information."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="rounded-xl mx-4 py-16">
        <div className="flex justify-center py-6 text-blackBg">
          <div className="text-center max-w-4xl">
            <h1 className="sm:text-6xl text-4xl font-semibold mb-4">Terms of Use</h1>
            <p className="text-lg text-gray-600 mb-2">Effective Date: January 1, 2025</p>
            <p className="text-lg text-gray-600">Last Updated: May 25, 2025</p>
          </div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-16 px-4">
        <div className="flex justify-center py-6 text-blackBg">
          <h2 className="sm:text-4xl text-3xl font-semibold">Key Terms Overview</h2>
        </div>
        
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 place-items-center text-blackBg mt-10 max-w-6xl mx-auto">
          {keyTerms.map((item) => (
            <div
              key={item.id}
              className="bg-whiteBg rounded-lg p-6 max-w-xs flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.heading}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Terms Content */}
      <section className="bg-whiteBg mx-4 rounded-xl py-16 px-8">
        <div className="max-w-4xl mx-auto text-blackBg">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">1. Introduction and Acceptance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to our QR Code Menu Service ("Service"). These Terms of Use ("Terms") govern your access to and use of our contactless menu platform, dashboard, and related services. By accessing or using our Service, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Service provides restaurants and food establishments with digital menu solutions, including QR code generation, contactless ordering systems, kitchen display integration, and comprehensive dashboard management tools.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to these Terms, please do not use our Service. We reserve the right to modify these Terms at any time, and your continued use constitutes acceptance of any changes.
            </p>
          </div>

          {/* Service Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">2. Service Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our QR Code Menu Service includes the following features and capabilities:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <PiHamburgerLight className="text-lg mt-1 mr-3 flex-shrink-0" />
                  <span>Contactless digital menu accessible via QR codes and direct links</span>
                </li>
                <li className="flex items-start">
                  <PiHamburgerLight className="text-lg mt-1 mr-3 flex-shrink-0" />
                  <span>Real-time order management and kitchen display integration</span>
                </li>
                <li className="flex items-start">
                  <PiHamburgerLight className="text-lg mt-1 mr-3 flex-shrink-0" />
                  <span>Comprehensive dashboard for menu management and analytics</span>
                </li>
                <li className="flex items-start">
                  <PiHamburgerLight className="text-lg mt-1 mr-3 flex-shrink-0" />
                  <span>Unlimited menu categories, items, and QR code generation</span>
                </li>
                <li className="flex items-start">
                  <PiHamburgerLight className="text-lg mt-1 mr-3 flex-shrink-0" />
                  <span>Mobile and desktop responsive design</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We strive to maintain 99.9% service uptime and provide technical support during business hours. Service features may be updated or modified to improve functionality and user experience.
            </p>
          </div>

          {/* User Accounts and Registration */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">3. User Accounts and Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use our Service, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Account registration requirements include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              <li>Valid business name and contact information</li>
              <li>Legitimate restaurant or food service business operation</li>
              <li>Compliance with local business licensing requirements</li>
              <li>Agreement to these Terms and our Privacy Policy</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You must immediately notify us of any unauthorized use of your account or any other breach of security. We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.
            </p>
          </div>

          {/* Acceptable Use Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">4. Acceptable Use Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use our Service only for lawful purposes and in accordance with these Terms. Prohibited uses include:
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
              <ul className="space-y-2 text-gray-700">
                <li>• Uploading false, misleading, or inaccurate menu information</li>
                <li>• Violating any local, state, or federal laws or regulations</li>
                <li>• Infringing on intellectual property rights of others</li>
                <li>• Attempting to disrupt or compromise our Service security</li>
                <li>• Using the Service for any fraudulent or deceptive practices</li>
                <li>• Sharing account credentials with unauthorized parties</li>
                <li>• Reverse engineering or attempting to extract our source code</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Violation of this Acceptable Use Policy may result in immediate suspension or termination of your account and access to our Service.
            </p>
          </div>

          {/* Content and Menu Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">5. Content and Menu Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of all menu content, images, descriptions, and pricing information you upload to our Service. However, you grant us a limited license to display, store, and transmit this content as necessary to provide our Service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are solely responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              <li>Accuracy of menu items, descriptions, and pricing</li>
              <li>Compliance with food safety and labeling regulations</li>
              <li>Proper allergen and dietary restriction information</li>
              <li>Copyright clearance for any images or content used</li>
              <li>Regular updates to reflect current offerings and availability</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to remove content that violates these Terms, applicable laws, or our community standards.
            </p>
          </div>

          {/* Payment and Billing */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">6. Payment and Billing Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Service fees are billed according to your selected subscription plan. All fees are non-refundable except as required by law or as specifically stated in our refund policy.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Billing Terms:</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Automatic recurring billing on subscription anniversary</li>
                <li>• 7-day grace period for failed payments before service suspension</li>
                <li>• 30-day notice for subscription plan changes or cancellations</li>
                <li>• All prices subject to applicable taxes and fees</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Failure to pay subscription fees may result in service interruption or account termination. You remain responsible for all charges incurred before termination.
            </p>
          </div>

          {/* Service Availability and Support */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">7. Service Availability and Support</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to provide continuous service availability but cannot guarantee uninterrupted access. Scheduled maintenance will be announced in advance when possible.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our support services include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              <li>Technical support during business hours (9 AM - 6 PM EST)</li>
              <li>Online documentation and tutorial resources</li>
              <li>Email support with 24-hour response time commitment</li>
              <li>Emergency support for critical service issues</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Support response times may vary based on issue complexity and subscription tier.
            </p>
          </div>

          {/* Privacy and Data Protection */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">8. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to protecting your privacy and the privacy of your customers. Our data practices are governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Key privacy commitments:
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4">
              <ul className="space-y-2 text-gray-700">
                <li>• Customer order data is encrypted in transit and at rest</li>
                <li>• No sale or sharing of personal information with third parties</li>
                <li>• Compliance with GDPR, CCPA, and applicable privacy laws</li>
                <li>• Regular security audits and vulnerability assessments</li>
                <li>• Data retention policies aligned with legal requirements</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for obtaining necessary consents from customers for data collection through our Service.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, our liability for any damages arising from your use of the Service is limited to the amount you paid for the Service in the 12 months preceding the claim.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-4">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>We are not liable for:</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Indirect, incidental, or consequential damages</li>
                <li>• Loss of profits, revenue, or business opportunities</li>
                <li>• Service interruptions beyond our reasonable control</li>
                <li>• Third-party actions or content</li>
                <li>• Data loss due to user error or system failure</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              This limitation applies regardless of the legal theory under which damages are claimed.
            </p>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Either party may terminate this agreement with 30 days written notice. We may immediately terminate or suspend your account for violation of these Terms or non-payment of fees.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              <li>Your access to the Service will be immediately discontinued</li>
              <li>All QR codes and menu links will become inactive</li>
              <li>You may export your data within 30 days of termination</li>
              <li>Outstanding fees remain due and payable</li>
              <li>Confidentiality obligations survive termination</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Data deletion occurs 60 days after termination unless legal retention is required.
            </p>
          </div>

          {/* Governing Law and Disputes */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">11. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by and construed in accordance with the laws of [Your State/Country], without regard to conflict of law principles.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes arising from these Terms or your use of the Service will be resolved through binding arbitration, except for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              <li>Claims seeking injunctive relief</li>
              <li>Disputes involving intellectual property rights</li>
              <li>Small claims court matters within jurisdictional limits</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Arbitration will be conducted under the rules of the American Arbitration Association.
            </p>
          </div>

          {/* Changes and Updates */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">12. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Material changes will be communicated via email and posted on our website at least 30 days before becoming effective.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms. If you do not agree to the changes, you must discontinue use of the Service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We recommend reviewing these Terms periodically to stay informed of any updates.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-6">13. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms or need to contact us regarding your account:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> tushargsoni17@gmail.com</p>
                <p><strong>Phone:</strong> 9327584894</p>
                <p><strong>Address:</strong> Udhana, Surat</p>
                <p><strong>Business Hours:</strong> Monday - Friday, 10 AM - 6 PM EST</p>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-3 text-blackBg">Acknowledgment</h3>
            <p className="text-gray-700 leading-relaxed">
              By using our QR Code Menu Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. These Terms constitute the entire agreement between you and our company regarding the use of our Service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;