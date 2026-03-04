'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Transparency() {
  const [copiedKub, setCopiedKub] = useState(false);
  const [copiedKaia, setCopiedKaia] = useState(false);
  
  const tokenAddresses = {
    kub: "0xa83a9e9B63D48551F56179a92A2Ccf7984B167ff",
    kaia: "0xd145A1F18c5EDc9CeE0994e6a8e2eB9Dd0A40Cb6"
  };
  
  const shortKubAddress = `${tokenAddresses.kub.slice(0, 6)}...${tokenAddresses.kub.slice(-4)}`;
  const shortKaiaAddress = `${tokenAddresses.kaia.slice(0, 6)}...${tokenAddresses.kaia.slice(-4)}`;

  const copyToClipboard = async (address: string, type: 'kub' | 'kaia') => {
    try {
      await navigator.clipboard.writeText(address);
      if (type === 'kub') {
        setCopiedKub(true);
        setTimeout(() => setCopiedKub(false), 2000);
      } else {
        setCopiedKaia(true);
        setTimeout(() => setCopiedKaia(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="transparency" className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Full Transparency</h2>
          <p className="text-lg text-gray-600">Every action is on-chain and verifiable</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* KUB Chain Token */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-50">
            <div className="flex items-center mb-4">
              <Image
                src="https://kilolend.xyz/images/blockchain-icons/kub-chain-icon.png"
                alt="KUB Chain"
                width={32}
                height={32}
                className="mr-3"
              />
              <h3 className="text-lg font-semibold text-gray-900">KUB Chain</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-mono text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded flex-1">
                  {shortKubAddress}
                </div>
                <button
                  onClick={() => copyToClipboard(tokenAddresses.kub, 'kub')}
                  className="ml-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  {copiedKub ? 'Copied!' : 'Copy'}
                </button>
              </div>
              
              <a
                href={`https://www.kubscan.com/token/${tokenAddresses.kub}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
              >
                View on KUB Explorer
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* KAIA Chain Token */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-50">
            <div className="flex items-center mb-4">
              <Image
                src="https://kilolend.xyz/images/blockchain-icons/kaia-token-icon.png"
                alt="KAIA Chain"
                width={32}
                height={32}
                className="mr-3"
              />
              <h3 className="text-lg font-semibold text-gray-900">KAIA Chain</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-mono text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded flex-1">
                  {shortKaiaAddress}
                </div>
                <button
                  onClick={() => copyToClipboard(tokenAddresses.kaia, 'kaia')}
                  className="ml-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  {copiedKaia ? 'Copied!' : 'Copy'}
                </button>
              </div>
              
              <a
                href={`https://www.kaiascan.io/token/${tokenAddresses.kaia}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
              >
                View on KAIA Explorer
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
}