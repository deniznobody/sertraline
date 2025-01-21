import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const artists = [
  {
    name: "skychild",
    image: "/artists/skychild.png",
    genre: "Shoegaze / Cloud Rap / Hip-Hop",
    bio: "skychild, 18 year old from Istanbul, Turkey, is a multi-talented music producer, songwriter, developer, and label owner.",
    location: "Istanbul, TR"
  },
  {
    name: "andeo",
    image: "/artists/andeo.png",
    genre: "Hip-Hop",
    bio: "18 year old Hiphop producer from Turkey",
    location: "Istanbul, TR"
  },
  {
    name: "ad0rken",
    image: "/artists/adorken.png",
    genre: "Electronic",
    bio: "AD0RKEN (also known as BOY FANTASY, 1fairy) is a scenecore/pop/witch house artist.",
    location: "UK, Leads"
  },
  {
    name: "mq",
    image: "/artists/mq.png",
    genre: "Punk",
    bio: "mq is an emo rapper from Texas, born on November 25, 2006, known for his heartfelt lyrics and moody beats.",
    location: "Texas, US"
  }
];

export default function ArtistsPage() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-10">
          Our Artists
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Meet the talented artists who are shaping the sound of tomorrow with Sertraline Records.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <Card key={index} className="border shadow-md hover:shadow-lg transition-shadow p-0">
              <CardHeader className="text-center p-0">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={300}
                  height={300}
                  className="mb-2 mt-8 mx-auto rounded-md h-64 w-64"
                />
                <CardTitle className="text-2xl font-semibold mt-4">{artist.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{artist.genre}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground p-0 mt-4 mb-4">
                <p className="mb-2">{artist.bio}</p>
                <p>{artist.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
