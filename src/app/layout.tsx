import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yu Chen",
  description: "Personal Website of Yu Chen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <Providers>
          {/* ENHANCED LEAN BACKGROUND - VARIABLE DRIVEN */}
          <div className="fixed inset-0 pointer-events-none -z-1" aria-hidden="true">
            
            {/* Primary Organic Green Glow */}
            <div 
              className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] animate-cosmic-float
                        bg-[radial-gradient(circle_at_center,var(--color-organic-green)_0%,transparent_70%)]" 
              style={{ opacity: 'var(--glow-opacity-primary)' }}
            />

            {/* Secondary Subtle Blue Glow */}
            <div 
              className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] animate-cosmic-float
                        bg-[radial-gradient(circle_at_center,var(--color-organic-blue)_0%,transparent_70%)]
                        [animation-duration:30s] [animation-direction:reverse]" 
              style={{ opacity: 'var(--glow-opacity-secondary)' }}
            />

          </div>

          <Navbar />
          <main className="relative z-10 pt-20">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}