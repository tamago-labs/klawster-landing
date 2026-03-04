"use client"

import React, { useState } from 'react';
import Button from './ui/Button';
import Modal from './ui/Modal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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

              {/* Links */}
              {/* <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#live-activity" className="text-gray-400 hover:text-white transition-colors">
                      Live Activity
                    </a>
                  </li>
                  <li>
                    <a href="https://explorer.kubchain.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      KUB Explorer
                    </a>
                  </li>
                  <li>
                    <a href="https://explorer.kaia.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      KAIA Explorer
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      Discord Community
                    </a>
                  </li>
                </ul>
              </div> */}

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
                      onClick={() => setIsModalOpen(true)}
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
    </>
  );
}