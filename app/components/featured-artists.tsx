import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const artists = [
  { name: "Andeo", image: "/artists/andeo.png?height=400&width=400", date: "2006", location: "TR, Istanbul" },
  { name: "AD0RKEN", image: "/artists/adorken.png?height=400&width=400", date: "2006", location: "UK, Leeds" },
  { name: "mq", image: "/artists/mq.png?height=400&width=400", date: "2006", location: "US, Texas" },
]

export function FeaturedArtists() {
  return (
    <section className="py-20 flex flex-col items-center text-center">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
          Featured Artists
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <Card key={index} className="w-80 mx-auto">
                <CardContent className="p-4">
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover rounded-md"
                  />
                  <h3 className="mt-4 text-xl font-semibold">{artist.name}</h3>
                  <div className="flex flex-col">
                    <p>{artist.date}</p>
                    <p>{artist.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
