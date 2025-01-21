'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#7587d9]">
          Tophane Records
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-[#7587d9]">Home</Link></li>
            <li><Link href="#artists" className="hover:text-[#7587d9]">Artists</Link></li>
            <li><Link href="#releases" className="hover:text-[#7587d9]">Releases</Link></li>
            <li><Link href="#about" className="hover:text-[#7587d9]">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

