'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <div className="border border-zinc-800 rounded-lg overflow-hidden">
          {/* Main content area */}
          <div className="p-6 font-mono">
            <div className="mb-8">
              <span className="text-green-400">$</span>
              <span className="text-blue-500"> whoami</span>
              <h1 className="mt-2 text-2xl font-bold text-zinc-100">
                Jonathon Chambers
              </h1>
              <h2 className="mt-1 text-xl text-zinc-400">
                Full-Stack Software Developer
              </h2>
              <p className="mt-2 text-zinc-400 leading-relaxed">
                Specialized in Golang and Node.js, with a passion for establishing team standards 
                and optimizing development pipelines. Full-Stack Developer focusing on 
                code quality, testing, and reliable backend solutions.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <span className="text-green-400">$</span>
              <span className="text-blue-500"> tech --list</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Golang', 'Node.js', 'Docker', 'AWS', 'MongoDB', 'Redis', 'CI/CD', 'Python'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <Link 
                href="/projects" 
                className="block p-4 border border-zinc-800 rounded-lg hover:bg-zinc-900 transition-colors"
              >
                <span className="text-green-400">~/</span>
                <span className="text-blue-500">projects</span>
                <p className="mt-1 text-sm text-zinc-400">
                  Backend services, DevOps improvements, and testing implementations →
                </p>
              </Link>

              <Link 
                href="/experience" 
                className="block p-4 border border-zinc-800 rounded-lg hover:bg-zinc-900 transition-colors"
              >
                <span className="text-green-400">~/</span>
                <span className="text-blue-500">experience</span>
                <p className="mt-1 text-sm text-zinc-400">
                  Audio Enhancement, Griffin-Spalding County Schools →
                </p>
              </Link>

              {/* <Link 
                href="/blog" 
                className="block p-4 border border-zinc-800 rounded-lg hover:bg-zinc-900 transition-colors"
              >
                <span className="text-green-400">~/</span>
                <span className="text-blue-500">blog</span>
                <p className="mt-1 text-sm text-zinc-400">
                  Thoughts on backend development, testing, and DevOps →
                </p>
              </Link> */}
            </div>

            {/* Current Role Banner */}
            <div className="mt-8 border border-zinc-800 rounded-lg p-4 bg-zinc-900/50">
              <p className="text-sm text-zinc-400">
                <span className="text-green-400">Currently:</span> Software Developer at{" "}
                <a 
                  href="https://audioenhancement.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-zinc-100 transition-colors"
                >
                  Audio Enhancement <span className="inline-block ml-0.5">↗</span>
                </a>
              </p>
            </div>

            {/* Social links */}
            <div className="mt-8 flex justify-center gap-6 text-zinc-400">
              <a 
                href="https://github.com/FFCoder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-zinc-100 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/jonathon-chambers-65935674" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-zinc-100 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="/resume" 
                className="hover:text-zinc-100 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
