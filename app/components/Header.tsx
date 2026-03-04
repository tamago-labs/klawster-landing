 
"use client"
import Button from './ui/Button';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Klawster</h1>
            <span className="ml-2 text-sm text-gray-500">($KLAW)</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => {
                const element = document.getElementById('live-activity');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
            >
              Live Activity
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('how-it-works');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
            >
              How It Works
            </button>
             
          </nav>
          
          <nav className="flex items-center space-x-4">
            <Button 
              href="https://kilolend.xyz" 
              variant="primary"
              className="text-sm"
            >
              Trade $KLAW
            </Button>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}