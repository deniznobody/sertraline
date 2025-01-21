import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="py-20 md:py-40">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Sertraline
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Discover the Future of Sound
          </p>
          <div className="mt-10">
            <Button className="dark:bg-primary bg-background shadow-lg border-2 px-4 py-4" size="lg">
              <Link href="/artists">Explore Our Artists</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

