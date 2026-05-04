import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl border-b border-white/10 transition-colors duration-500">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="bg-orange-500 p-2 rounded-xl">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
          Shakerzz
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#" className="hover:text-white transition-colors">Our Story</a>
        <a href="#" className="hover:text-white transition-colors">Process</a>
        <a href="#" className="hover:text-white transition-colors">Impact</a>
      </div>

      <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
        Order Now
      </button>
    </nav>
  );
}
