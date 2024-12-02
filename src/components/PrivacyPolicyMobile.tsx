import FAQ from "@/components/FAQ";

export default function PrivacyPolicyMobile() {
  return (
    <div className="pt-[8rem] pb-20 flex items-center justify-center flex-col md:hidden max-w-[95%]">
      <div className="flex w-full px-5">
        <div className="flex flex-col space-y-5 w-full">
            <div className="flex flex-col space-y-2">
                <p className="w-[231px] leading-none text-[#191918] text-[32px] font-inter font-medium">Privacy Policy for StepVerse</p>
                <p className="text-[#6F6F6F] text-[15px]">Effective Date: 30 November, 2024</p>
            </div>
            
            <p className="w-full text-[#4C4C4C] text-base leading-tight">Welcome to StepVerse! At StepVerse, your privacy and data security are our top priorities. This Privacy Policy outlines how we collect, use, store, and protect your personal data when you access and use our platform. By using StepVerse, you consent to the practices described in this document.</p>

            <div className="flex flex-col space-y-10">
                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">1. Data We Collect</p>
                    <p className="w-full text-[#4C4C4C] text-base leading-tight">We collect and process only the data necessary to enhance your experience and operate our services effectively:</p>
                    <ul className="w-full pl-4 space-y-2">
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Contact Information:</span> Email addresses or Telegram usernames for account creation and communication.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Health and Fitness Data:</span>  Steps, health metrics, and activity logs submitted via wearables, smartphones, or manually.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Wallet and Transaction Data:</span> Blockchain wallet addresses and transaction details for rewards distribution.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">User-Generated Content:</span> Data from competitions, challenges, and family tracking.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Aggregated Data:</span> Anonymized data for research and system improvements.</li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">2. How We Use Your Data</p>
                    <p className="w-full text-[#4C4C4C] text-base leading-tight">We use your data for the following purposes:</p>
                    <ul className="w-full pl-4 space-y-2">
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Fitness Personalization:</span> To enhance gamification experiences, including challenges, leaderboards, and treasure hunts.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Reward Distribution:</span>  Tokenizing SV Points and ensuring smooth blockchain transactions.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">System Improvements:</span> Aggregated data is analyzed to improve StepVerse’s services and develop new features.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Healthcare Insights:</span> Anonymized data may be used for research or shared with healthcare partners for societal benefits.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Communication:</span> To send updates, alerts, and service-related announcements.</li>
                    </ul>
                </div>


                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">3. Transparency in Data Usage</p>
                    <p className="w-full text-[#4C4C4C] text-base leading-tight">We provide full transparency on how your data is handled:</p>
                    <ul className="w-full pl-4 space-y-2">
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Fitness Data:</span> Used to personalize your gamified experiences and provide health insights.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Aggregated Data:</span>  Anonymized and shared only for research or with healthcare partners under strict agreements.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Transaction Data:</span> Used exclusively for reward payouts and marketplace activity.</li>
                    </ul>
                </div>


                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">4. User Rights and Control</p>
                    <p className="w-full text-[#4C4C4C] text-base leading-tight">StepVerse ensures you maintain full control over your data:</p>
                    <ul className="w-full pl-4 space-y-2">
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Anonymity:</span> You can participate anonymously in challenges and competitions.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Data Sharing:</span>  You control when and with whom your data is shared.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Data Access:</span> You may request a copy of your data and review it at any time.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Data Deletion:</span> You can request the permanent deletion of your personal data, subject to applicable laws.</li>
                    </ul>
                </div>



                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">5. Data Security Measures</p>
                    <p className="w-full text-[#4C4C4C] text-base leading-tight">StepVerse implements rigorous measures to protect your data:</p>
                    <ul className="w-full pl-4 space-y-2">
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">End-to-End Encryption:</span> Data in transit is protected using AES-256 encryption.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">HIPAA Compliance:</span>  Health data is securely stored and accessed only by authorized parties.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Fraud Prevention:</span> Advanced algorithms detect and prevent artificially inflated steps or manipulated transactions.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">Regular Security Audits:</span> Third-party cybersecurity firms conduct quarterly audits to identify vulnerabilities.</li>
                    </ul>
                </div>


                
                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">6. Decentralized Ownership of Rewards</p>
                    <ul className="w-full pl-4 space-y-2">
                        <li className="w-full text-[#4C4C4C] text-base leading-tight">All rewards are tokenized on blockchain infrastructure, ensuring transparency and preventing manipulation.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight">Users retain full ownership of SV Points and other tokenized rewards.</li>
                    </ul>
                </div>


                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">7. Compliance with Global Standards</p>
                    <p className="w-full text-[#4C4C4C] text-base leading-tight">StepVerse adheres to:</p>
                    <ul className="w-full pl-4 space-y-2">
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">GDPR (General Data Protection Regulation):</span> Ensuring data privacy and user rights for European users.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">CCPA (California Consumer Privacy Act):</span>  Offering data transparency and control to U.S. users.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight"><span className="text-black">HIPAA (Health Insurance Portability and Accountability Act):</span> Protecting health data contributed by users.</li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">8. Fraud Prevention and Fairness</p>
                    <ul className="w-full pl-4 space-y-2">
                        <li className="w-full text-[#4C4C4C] text-base leading-tight">StepVerse uses fraud detection algorithms to prevent misuse, such as artificially inflated step counts or marketplace manipulation.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight">User activity is monitored to maintain a fair ecosystem for all participants.</li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">9. Third-Party Integrations</p>
                    <p className="w-full text-[#4C4C4C] text-base leading-tight">To enhance functionality, we may partner with third parties. Any data shared with third parties is anonymized and strictly governed by agreements.</p>
                </div>


                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">10. User Communication and Updates</p>
                    <ul className="w-full pl-4 space-y-2">
                        <li className="w-full text-[#4C4C4C] text-base leading-tight">Users receive clear and concise information on how their data is used.</li>
                        <li className="w-full text-[#4C4C4C] text-base leading-tight">Any changes to this Privacy Policy will be communicated via email or in-app notifications.</li>
                    </ul>
                </div>


                <div className="flex flex-col space-y-2 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">Children’s Privacy</p>
                    <p className="w-full text-[#4C4C4C] text-base leading-tight">StepVerse is not intended for users under the age of 13. We do not knowingly collect personal data from children.</p>
                </div>



                <div className="flex flex-col space-y-5 w-full">
                    <p className="text-[18px] text-[#191918] font-medium font-inter">12. Contact Us</p>
                    <p className="w-full text-[#4C4C4C] text-base leading-tight">If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please feel free to reach out to us through the following channels:</p>

                    <a href="mailto:privacy@stepverse.com" className="w-full text-[#55C056] text-base leading-tight">Email: privacy@stepverse.com</a>

                    <p className="w-full text-[#4C4C4C] text-base leading-tight">We value your feedback and are committed to addressing your inquiries promptly. Whether you’re seeking clarification on how your data is used, requesting access to your data, or initiating a data deletion request, our team is here to help.</p>

                    <p className="w-full text-[#4C4C4C] text-base leading-tight">Your privacy and trust are at the heart of StepVerse, and we are dedicated to providing you with a secure and transparent experience. Thank you for being a part of the StepVerse community!</p>
                </div>
            </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}
