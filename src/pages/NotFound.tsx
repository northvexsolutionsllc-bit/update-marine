import { Link } from "react-router-dom";
import SiteHeader from "@/components/feature/SiteHeader";
import SiteFooter from "@/components/feature/SiteFooter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-50">
      <SiteHeader />
      <main className="relative flex min-h-[80vh] items-center overflow-hidden pt-28">
        <div className="marine-caustic pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-accent-300/25 blur-3xl" />
        <div className="mx-auto w-full max-w-container px-4 py-16 text-center md:px-6">
          <span className="m-eyebrow block text-secondary-600">
            Off The Deep End
          </span>
          <h1 className="mt-4 font-heading text-6xl text-primary-950 md:text-8xl">404</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-foreground-600 md:text-base">
            This page is not part of the project. Let's get you back to dry land.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="whitespace-nowrap rounded-md bg-primary-900 px-6 py-3 font-label text-[13px] font-medium text-background-50 transition-colors hover:bg-primary-800"
            >
              Back to Home
            </Link>
            <Link
              to="/services"
              className="whitespace-nowrap rounded-md border border-primary-300 px-6 py-3 font-label text-[13px] font-medium text-primary-900 transition-colors hover:bg-primary-50"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}