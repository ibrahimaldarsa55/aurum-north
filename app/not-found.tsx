import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grain relative isolate flex min-h-[80vh] items-center overflow-hidden pt-32 pb-20">
      <div aria-hidden className="absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]" />
      <div className="container-x text-center">
        <p className="font-display text-8xl text-gold-gradient sm:text-9xl">404</p>
        <h1 className="mt-6 font-display text-4xl text-white sm:text-5xl">This page doesn&apos;t exist.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you were looking for may have moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
