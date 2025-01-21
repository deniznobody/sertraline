import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const releases = [
  {
    name: "i miss u and im at this point in my life",
    image: "/albums/imu.png",
    genre: "Alternative",
    type: "EP",
    artist: "skychild",
    date: "Istanbul, TR"
  },
  {
    name: "eyes",
    image: "/albums/eyes.png",
    genre: "Alternative",
    type: "Single",
    artist: "skychild",
    date: "Istanbul, TR"
  },
  {
    name: "goth angelz",
    image: "/albums/goth_angelz.png",
    genre: "Alternative",
    type: "EP",
    artist: "skychild",
    date: "Istanbul, TR"
  },
  {
    name: "Mari Christmas",
    image: "/albums/mari.png",
    genre: "Hip-Hop",
    type: "EP",
    artist: "andeo",
    date: "Istanbul, TR"
  },
];

export default function ReleasesPage() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-10">
          Our Releases
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Check out the latest music releases from Sertraline artists.
        </p>

        {releases.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {releases.map((release, index) => (
              <Card key={index} className="border shadow-md hover:shadow-lg transition-shadow p-0 rounded-md">
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
        ) : (
          <p className="text-lg text-muted-foreground">No releases available at the moment. Please check back later.</p>
        )}
      </div>
    </section>
  );
}
