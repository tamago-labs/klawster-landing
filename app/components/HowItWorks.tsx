import React from 'react';
import { Rocket, TrendingUp, BarChart3, Settings } from 'lucide-react';

export default function HowItWorks() {
  const features = [
  {
    title: "Deploys $KLAW",
    description: "Allocates its token across strategies, liquidity, and active positions",
    icon: Rocket
  },
  {
    title: "Borrows & Expands",
    description: "Uses $KLAW as a base to borrow and access additional capital",
    icon: TrendingUp
  },
  {
    title: "Trades & Executes",
    description: "Continuously enters and exits positions based on market conditions",
    icon: Settings
  }
];

  return (
    <section id="how-it-works" className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">An autonomous agent operating with and around $KLAW</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}