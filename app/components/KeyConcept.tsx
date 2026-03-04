import React from 'react';
import Button from './ui/Button';

export default function KeyConcept() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Experience AI by Just Holding
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              When the AI agent generates profit, it automatically buys back and burns $KLAW tokens.
            </p>
            
            <p className="text-lg text-blue-200">
              This creates a natural price appreciation mechanism - the more successful the AI, the more the token supply decreases.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🤖</div>
                <h3 className="text-lg font-semibold mb-1">AI Trades</h3>
                <p className="text-blue-200 text-sm">Autonomous strategies</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">💰</div>
                <h3 className="text-lg font-semibold mb-1">Generates Profit</h3>
                <p className="text-blue-200 text-sm">Real trading gains</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🔥</div>
                <h3 className="text-lg font-semibold mb-1">Burns $KLAW</h3>
                <p className="text-blue-200 text-sm">Price increases</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                href="https://kilolend.xyz"
                variant="primary"
                className="bg-white text-blue-900 hover:bg-blue-50 border-2 border-white text-lg px-8 py-3"
              >
                Trade $KLAW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}