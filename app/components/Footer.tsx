import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Sertraline</h3>
            <p className="text-sm text-muted-foreground">Shaping the future of music</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/artists" className="text-muted-foreground hover:text-foreground transition-colors">
                  Artists
                </a>
              </li>
              <li>
                <a href="/releases" className="text-muted-foreground hover:text-foreground transition-colors">
                  Releases
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/sertralinerecords" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/sertralinerecords" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Sertraline. All rights reserved. made with ♥ by <a href="https://alo.ne/@sky" target="_blank" className="text-[#948cff] underline hover:cursor-pointer">deniz</a></p>
        </div>
      </div>
    </footer>
  )
}

