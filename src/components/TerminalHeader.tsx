'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TerminalHeader() {
  const pathname = usePathname();
  const handleClose = () => {
    window.close();
    setTimeout(() => {
      alert('Please close this tab manually - your browser blocked the automatic close action');
    }, 100);
  };

  // Convert path to terminal-style directory
  const getTerminalPath = () => {
    if (pathname === '/') return '~';
    return `~/` + pathname.slice(1);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900 p-3 flex items-center gap-2">
          <div className="flex gap-2">
            <button
              onClick={handleClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
              aria-label="Close window"
            />
            <Link href="/" className="block">
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
            </Link>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          {/* Terminal Path Navigation */}
          <div className="flex-1 text-center text-sm text-zinc-400 font-mono">
            jonathon@website:{getTerminalPath()}
          </div>
          
          {/* Quick Navigation */}
          <div className="hidden sm:flex gap-4 text-sm text-zinc-400 font-mono">
            <Link href="/" className="hover:text-zinc-100 transition-colors">~</Link>
            <Link href="/projects" className="hover:text-zinc-100 transition-colors">projects</Link>
            <Link href="/blog" className="hover:text-zinc-100 transition-colors">blog</Link>
            <Link href="/experience" className="hover:text-zinc-100 transition-colors">experience</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 