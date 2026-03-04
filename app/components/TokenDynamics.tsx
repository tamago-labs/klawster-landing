import React from 'react';

export default function TokenDynamics() {
  return (
    <section id="token-dynamics" className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Token Dynamics</h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Agent activity may reduce $KLAW supply over time through trading and buybacks.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">70%</div>
                <div className="text-sm text-gray-600">AI-Managed Allocation</div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">Active</div>
                <div className="text-sm text-gray-600">Dynamic Execution</div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">Enabled</div>
                <div className="text-sm text-gray-600">Conditional Burn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}