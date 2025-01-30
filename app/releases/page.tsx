import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const releases = [
  {
    name: "Mari Christmas",
    image: "/albums/mari.png",
    genre: "Hip-Hop",
    type: "EP",
    artist: "andeo",
    date: "1 January, 2025"
  },
  {
    name: "HAVASIZ DUMAN SAHASI",
    image: "/albums/havasiz.png",
    genre: "Hip-Hop",
    type: "EP",
    artist: "andeo",
    date: "22 December, 2024"
  },
];

export default function ReleasesPage() {
  return (
    <section className="py-16 bg-muted flex flex-col items-center text-center">
      <div className="container px-6 md:px-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-10">
          Our Releases
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Check out the latest music releases from Sertraline artists.
        </p>

        {releases.length > 0 ? (
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center w-full grid-auto-flow-dense">
              {releases.map((release, index) => (
                <Card key={index} className="border shadow-md hover:shadow-lg transition-shadow p-0 rounded-md w-80">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Image
                      src={release.image || '/placeholder.svg'}
                      alt={release.name}
                      width={400}
                      height={800}
                      className="w-72 h-64 object-cover rounded-md"
                    />
                    <h3 className="mt-4 text-xl font-semibold">
                      {release.name}
                    </h3>
                    <div className="mt-2 text-muted-foreground">
                      <p className="text-md">By: {release.artist}</p>
                      <p className="text-sm">Genre: {release.genre || 'Unknown'}</p>
                      <p className="text-sm">Release Date: {release.date || 'TBA'}</p>
                      <p className="text-sm">Type: {release.type || 'Single'}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-lg text-muted-foreground">No releases available at the moment. Please check back later.</p>
        )}
      </div>
    </section>
  );
}
