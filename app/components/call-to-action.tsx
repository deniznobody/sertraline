import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-20 bg-muted">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
          Ready to Join the Sertraline Family?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-[600px] mx-auto">
          Submit your demo and let's create something extraordinary together.
        </p>
        <Button asChild variant="default" size="lg" className="dark:bg-primary bg-background px-4 py-4 shadow-lg border">
          <a href="mailto:demo@sertraline.com">Submit Your Demo</a>
        </Button>
      </div>
    </section>
  );
}
