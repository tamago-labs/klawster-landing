"use client"
 
import { useState } from 'react';
import Button from './ui/Button';
import Modal from './ui/Modal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                OpenClaw-Powered Agent Token
              </h1>

              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  An autonomous AI that trades DeFi on-chain. When the AI agent generates profit, it automatically buys back and burns $KLAW tokens.
                </p>

                <p className="text-blue-200 text-sm lg:text-lg flex">
                  <span>Live on</span>
                  <img src="https://kilolend.xyz/images/blockchain-icons/kub-chain-icon.png" alt="KUB" className="w-6 h-6 mx-2" />
                  <span className='hidden lg:inline'>KUB and</span>
u                  <img src="https://kilolend.xyz/images/blockchain-icons/kaia-token-icon.png" alt="KAIA" className="w-6 h-6 mx-2" />
                  <span className='hidden lg:inline'>KAIA · Chat with AI on Discord</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  href="https://kilolend.xyz/"
                  variant="secondary"
                  className="bg-white text-blue-900 hover:bg-blue-50 border-2 border-white font-semibold"
                >
                  Trade $KLAW
                </Button>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="secondary"
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-900"
                >
                  Join Discord
                </Button>
              </div>
            </div>

            {/* Right side - Token image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="float-animation">
                  <img
                    src="klaw-hero.png"
                    alt="Klawster"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discord Coming Soon Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Discord Coming Soon!"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Our AI agent Discord community is being prepared! We're working hard to create the best experience for you to chat with our autonomous agent.
          </p>
          <p className="text-gray-600">
            Follow our social media channels for the launch announcement - coming in about a week!
          </p>
          <div className="pt-4">
            <a
              href="https://x.com/kilolend_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Follow us on X (Twitter)
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
}
