'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Artist {
  name: string;
  image: string;
  description: string;
}

const artists: Artist[] = [
    { name: 'adorken', image: '/artists/artist1.png', description: 'Electronic music producer known for atmospheric soundscapes.' },
    { name: 'Andeo', image: '/artists/artist2.png', description: 'Indie folk artist with a penchant for storytelling through music.' },
]

export default function ArtistsSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading placeholder
  }

  return (
    <section id="artists" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image src={artist.image || "/placeholder.svg"} alt={artist.name} width={400} height={200} className="w-full object-cover h-48" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                <p className="text-gray-400">{artist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

