import React from 'react'

const bats = [
  {
    name: 'Dominator X1',
    price: '₹7,999',
    tag: 'Best Seller',
    specs: 'Grade 1 English Willow • Tournament Ready',
  },
  {
    name: 'Thunder Pro',
    price: '₹5,999',
    tag: 'Tournament Edition',
    specs: 'Massive Sweet Spot • Lightweight Pickup',
  },
  {
    name: 'Nitro Elite',
    price: '₹9,499',
    tag: 'Limited Edition',
    specs: 'Thick Edges • Leather Ball Ready',
  },
]

export default function App() {
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full"></div>
      </div>

      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <h1 className="text-3xl font-black uppercase tracking-widest">
            Power<span className="text-blue-400">Willow</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300 font-semibold">
            <a href="#bats" className="hover:text-white">Bats</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>

          <button className="bg-gradient-to-r from-blue-500 to-green-400 px-6 py-3 rounded-full font-bold hover:scale-105 transition-all">
            Shop Now
          </button>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1974&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="inline-block px-5 py-2 rounded-full border border-blue-400/20 bg-white/10 backdrop-blur-xl text-blue-300 text-sm mb-8">
            Premium Indian Cricket Brand
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase leading-tight">
            Unleash the <span className="text-blue-400">Power</span> of Every Shot
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Premium cricket bats crafted for Indian players who play to dominate.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-lg font-bold hover:scale-105 transition-all duration-300">
              Shop Now
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-lg font-bold hover:bg-white/20 transition-all duration-300">
              Order on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <section id="bats" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">Featured Collection</p>
          <h2 className="text-5xl font-black mt-4">Elite Cricket Bats</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bats.map((bat, index) => (
            <div key={index} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-80 overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent">
                <div className="absolute top-4 left-4 bg-green-400 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                  {bat.tag}
                </div>

                <img
                  src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=1887&auto=format&fit=crop"
                  alt="Bat"
                  className="w-full h-full object-contain p-10 group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-bold">{bat.name}</h3>
                <p className="mt-3 text-gray-400">{bat.specs}</p>

                <div className="flex items-center justify-between mt-8">
                  <span className="text-3xl font-black text-blue-400">{bat.price}</span>
                  <button className="px-5 py-3 rounded-full bg-white text-black font-bold hover:bg-blue-400 hover:text-white transition-all">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="py-24 px-6 bg-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-green-400 uppercase tracking-[4px] font-semibold">Why PowerWillow</p>
          <h2 className="text-5xl font-black mt-4">Built for Indian Cricketers</h2>

          <div className="grid md:grid-cols-5 gap-6 mt-16">
            {[
              'Premium Willow Quality',
              'Explosive Stroke Power',
              'Perfect Lightweight Balance',
              'Made for Indian Pitches',
              'Trusted by Young Players',
            ].map((item, i) => (
              <div key={i} className="bg-black/40 border border-white/10 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-green-400 mx-auto flex items-center justify-center text-2xl">
                  🏏
                </div>
                <h3 className="mt-6 text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6 bg-black text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">Player Reviews</p>
          <h2 className="text-5xl font-black mt-4">Trusted by Passionate Cricketers</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {['Balance and power feel unreal.', 'Looks premium and hits rockets.', 'Best pickup under this budget.'].map((review, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-yellow-400 text-xl">★★★★★</div>
                <p className="mt-6 text-gray-300">{review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">FAQ</p>
          <h2 className="text-5xl font-black mt-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {[
            'What bat weights are available?',
            'Which willow quality do you use?',
            'Do you ship across India?',
            'Is COD available?',
          ].map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{faq}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500 text-sm">
        © 2026 PowerWillow. All rights reserved.
      </footer>
    </div>
  )
}
