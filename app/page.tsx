import { Hero } from "./components/hero"
import { FeaturedArtists } from "./components/featured-artists"
import { CallToAction } from "./components/call-to-action"

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedArtists />
      <CallToAction />
    </div>
  )
}

