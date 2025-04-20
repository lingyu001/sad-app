// components/modals/SubscriptionModal.js
import { useState } from 'react';
import { motion } from 'framer-motion';
export default function SubscriptionModal({ onClose }) {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('annual');
  
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: billingCycle === 'annual' ? 9.99 : 14.99,
      description: 'Perfect for beginners exploring stock analysis',
      features: [
        '10 stock analyses per month',
        'Basic technical indicators',
        'Market news integration',
        'Email support',
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: billingCycle === 'annual' ? 19.99 : 24.99,
      description: 'For active investors seeking deeper insights',
      features: [
        'Unlimited stock analyses',
        'Advanced technical indicators',
        'Economic factor analysis',
        'Portfolio tracking',
        'Priority support',
      ],
      isPopular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: billingCycle === 'annual' ? 49.99 : 59.99,
      description: 'Professional tools for serious investors',
      features: [
        'Everything in Pro',
        'API access',
        'Custom analysis models',
        'Team collaboration',
        'Dedicated account manager',
        'White-label reports',
      ],
    },
  ];
  
  const handleContinue = () => {
    // This would redirect to payment page in a real app
    window.open('https://example.com/payment', '_blank');
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-screen overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Upgrade Your Insights</h2>
              <p className="text-gray-600 mt-1">Choose the plan that fits your investment style</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Billing Toggle */}
          <div className="flex justify-center items-center mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>
              Monthly
            </span>
            <div 
              className="relative w-14 h-7 bg-gray-200 rounded-full cursor-pointer"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            >
              <div 
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                  billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-1'
                }`} 
              />
            </div>
            <div className="flex items-center">
              <span className={`ml-3 ${billingCycle === 'annual' ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>
                Annual
              </span>
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                Save 20%
              </span>
            </div>
          </div>
          
          {/* Plan Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative rounded-lg border-2 p-6 cursor-pointer transition-all ${
                  selectedPlan === plan.id 
                    ? 'border-teal-500 shadow-md' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-coral px-3 py-1 rounded-full text-white text-xs font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button 
                    className={`w-full py-2 px-4 rounded-md transition ${
                      selectedPlan === plan.id 
                        ? 'bg-coral hover:bg-coral-dark text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Feature Comparison */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Features Comparison</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 text-left text-gray-600 font-medium">Feature</th>
                    {plans.map((plan) => (
                      <th key={plan.id} className="py-3 px-4 text-center text-gray-600 font-medium">{plan.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 text-gray-800">Stock Analyses</td>
                    <td className="py-3 px-4 text-center text-gray-600">10/month</td>
                    <td className="py-3 px-4 text-center text-gray-600">Unlimited</td>
                    <td className="py-3 px-4 text-center text-gray-600">Unlimited</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 text-gray-800">Technical Indicators</td>
                    <td className="py-3 px-4 text-center text-gray-600">Basic</td>
                    <td className="py-3 px-4 text-center text-gray-600">Advanced</td>
                    <td className="py-3 px-4 text-center text-gray-600">Advanced</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 text-gray-800">Portfolio Tracking</td>
                    <td className="py-3 px-4 text-center">
                      <svg className="h-5 w-5 text-red-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <svg className="h-5 w-5 text-teal-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <svg className="h-5 w-5 text-teal-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 text-gray-800">API Access</td>
                    <td className="py-3 px-4 text-center">
                      <svg className="h-5 w-5 text-red-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <svg className="h-5 w-5 text-red-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <svg className="h-5 w-5 text-teal-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 text-gray-800">Customer Support</td>
                    <td className="py-3 px-4 text-center text-gray-600">Email</td>
                    <td className="py-3 px-4 text-center text-gray-600">Priority</td>
                    <td className="py-3 px-4 text-center text-gray-600">Dedicated Account Manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
            <button 
              onClick={onClose}
              className="py-2 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition"
            >
              Maybe Later
            </button>
            <button 
              onClick={handleContinue}
              className="py-2 px-6 bg-coral hover:bg-coral-dark text-white rounded-md transition flex items-center justify-center"
            >
              <span>Continue with {plans.find(p => p.id === selectedPlan)?.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          {/* Satisfaction Guarantee */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>30-day money-back guarantee, no questions asked</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}