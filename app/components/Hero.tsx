"use client"
 
import Button from './ui/Button';

export default function Hero() {
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
                  <img src="https://kilolend.xyz/images/blockchain-icons/kaia-token-icon.png" alt="KAIA" className="w-6 h-6 mx-2" />
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
                  href="https://discord.gg/BDQnjcHbnj"
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
    </section>
  );
}
