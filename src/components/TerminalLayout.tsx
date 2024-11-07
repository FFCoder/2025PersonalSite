'use client';

import Link from "next/link";

export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="border border-zinc-800 rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-zinc-900 p-3 border-b border-zinc-800 flex items-center gap-2">
            <div className="flex gap-2">
              <button
                onClick={() => window.close()}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
                aria-label="Close window"
              />
              <Link href="/" className="block">
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
              </Link>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            {/* Quick Navigation */}
            <div className="flex-1 flex justify-center gap-6 text-sm text-zinc-400 font-mono">
              <Link href="/" className="hover:text-zinc-100 transition-colors">~</Link>
              <Link href="/projects" className="hover:text-zinc-100 transition-colors">projects</Link>
              {/* <Link href="/blog" className="hover:text-zinc-100 transition-colors">blog</Link> */}
              <Link href="/experience" className="hover:text-zinc-100 transition-colors">experience</Link>
            </div>
          </div>

          {/* Content Area */}
          {children}
        </div>
      </div>
    </div>
  );
} 