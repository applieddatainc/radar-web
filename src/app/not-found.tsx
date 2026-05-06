import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-9xl font-black text-navy/10 leading-none">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-navy">Page Not Found</h2>
          <p className="text-navy/60 font-medium">
            The frequency you're looking for doesn't exist. Let's get you back on the right signal.
          </p>
        </div>
        
        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white rounded-xl font-black transition-all hover:scale-105 shadow-xl shadow-navy/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to RADAR
          </Link>
        </div>
      </div>
    </main>
  );
}
