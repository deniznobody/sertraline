'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Album {
  title: string;
  artist: string;
  image: string;
}

const albums: Album[] = [
    { title: 'Mari Christmas (EP)', artist: 'adorken', image: '/albums/album1.png' },
    { title: 'IN THE H3ART', artist: 'Andeo', image: '/albums/album2.png' },
    { title: 'STUPID GIRL', artist: 'skychild', image: '/albums/album3.png' },
    { title: 'goth angelz (EP)', artist: 'adorken', image: '/albums/album4.png' }
]

export default function ReleasesSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading placeholder
  }

  return (
    <section id="releases" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {albums.map((album, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <Image src={album.image || "/placeholder.svg"} alt={album.title} width={300} height={300} className="w-full object-cover h-64" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{album.title}</h3>
                <p className="text-gray-400 text-sm">{album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

