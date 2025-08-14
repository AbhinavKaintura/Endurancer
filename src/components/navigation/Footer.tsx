import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Endurance
              </span>
            </Link>
            <p className="text-gray-300 max-w-md">
              Reclaim your focus and build mental endurance through the perfect fusion of ancient wisdom and modern neuroscience.
            </p>
          </div>

          {/* The Five Pillars */}
          <div>
            <h3 className="text-lg font-semibold mb-4">The Five Pillars</h3>
            <ul className="space-y-2">
              <li><Link href="/sanctuary" className="text-gray-300 hover:text-orange-400 transition-colors">The Sanctuary</Link></li>
              <li><Link href="/mentor" className="text-gray-300 hover:text-orange-400 transition-colors">The Mentor</Link></li>
              <li><Link href="/gymnasium" className="text-gray-300 hover:text-orange-400 transition-colors">The Gymnasium</Link></li>
              <li><Link href="/chronicle" className="text-gray-300 hover:text-orange-400 transition-colors">The Chronicle</Link></li>
              <li><Link href="/soundscape" className="text-gray-300 hover:text-orange-400 transition-colors">The Soundscape</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/philosophy" className="text-gray-300 hover:text-orange-400 transition-colors">Our Philosophy</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-orange-400 transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Endurance. All rights reserved. Developed by Endurance Tech Team.</p>
        </div>
      </div>
    </footer>
  )
}
