export default function PowerWillowLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-black">
          Power<span className="text-blue-400">Willow</span>
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          Premium cricket bats crafted for Indian players who play to dominate.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-blue-500 font-bold hover:scale-105 transition">
            Shop Now
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 bg-white/10 font-bold hover:bg-white/20 transition">
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}
