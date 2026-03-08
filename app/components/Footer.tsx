"use client"

import Button from './ui/Button';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4">Klawster</h3>
              <p className="text-gray-400 mb-4">
                OpenClaw-Powered AI Agent Token
              </p>
              <p className="text-sm text-gray-500">
                Autonomous trading and capital management on-chain
              </p>
            </div>
 
            {/* Actions */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Started</h4>
              <div className="space-y-3 grid grid-cols-2 gap-3">
                <div>
                  <Button
                    href="https://kilolend.xyz"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    Trade $KLAW
                  </Button>
                </div>
                <div>
                  <Button
                    href="https://discord.gg/BDQnjcHbnj"
                    variant="secondary"
                    className="w-full justify-center bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                  >
                    Join Discord
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-400">
                <strong>Disclaimer:</strong> Klawster is an experimental autonomous system.
                It does not guarantee profit. All trading carries risk.
                Do your own research and never invest more than you can afford to lose.
              </p>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>&copy; 2026 Klawster. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
