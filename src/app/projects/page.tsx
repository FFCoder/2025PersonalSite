'use client';

export default function Projects() {
  return (
    <div className="p-6 font-mono">
      {/* Professional Projects Section */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-zinc-100 mb-4 border-b border-zinc-800 pb-2">
          Professional Projects
        </h1>
        <div className="space-y-6">
          {/* DevOps Pipeline Project */}
          <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors">
            <h2 className="text-lg font-bold text-zinc-100">
              <span className="text-green-400">📦</span> CI/CD & DevOps Infrastructure
            </h2>
            <p className="mt-2 text-zinc-400 text-sm">
            Led key initiatives in modernizing deployment infrastructure by contributing to the implementation of a robust CI/CD pipeline. This strategic enhancement strengthened release quality assurance, resulting in improved defect detection during pre-release stages and streamlined deployment processes. The pipeline implementation established a more reliable and efficient software delivery workflow.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Docker</span>
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Bitbucket Pipelines</span>
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">CI/CD</span>
            </div>
          </div>

          {/* Testing Framework Project */}
          <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors">
            <h2 className="text-lg font-bold text-zinc-100">
              <span className="text-green-400">🧪</span> Testing Framework Implementation
            </h2>
            <p className="mt-2 text-zinc-400 text-sm">
            Spearheaded the organization&apos;s End-to-End (E2E) testing strategy, establishing comprehensive testing standards and best practices. Provided technical leadership and mentorship across multiple project teams, helping them overcome complex E2E testing challenges. This initiative significantly improved software quality assurance processes and testing consistency across the organization.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Playwright</span>
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Testing</span>
            </div>
          </div>

          {/* Backend Services Project */}
          <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors">
            <h2 className="text-lg font-bold text-zinc-100">
              <span className="text-green-400">🔧</span> EPIC (Education Paging & Intercom Communications)

            </h2>
            <p className="mt-2 text-zinc-400 text-sm">
            Core developer for EPIC, a sophisticated education technology solution that integrates advanced paging 
            and intercom capabilities with modern classroom audio systems. This mission-critical platform enhances 
            school safety protocols while delivering innovative communication technologies for educational environments. 
            The system serves as a cornerstone for school-wide communication infrastructure, combining safety features,
            innovative intercom and paging solutions with state-of-the-art classroom audio solutions.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Asterisk PBX</span>
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Node.js</span>
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">MongoDB</span>
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">WebSockets</span>
            </div>
          </div>

          <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors">
            <h2 className="text-lg font-bold text-zinc-100">
              <span className="text-green-400">💻</span> Server TUI

            </h2>
            <p className="mt-2 text-zinc-400 text-sm">
            Single-handedly architected and implemented a comprehensive Terminal User Interface (TUI) using Golang and the Bubble Tea framework. This versatile management interface operates across all server deployments, providing intuitive control over:
            </p>
            <ul className="list-disc list-inside mt-2">
            <li className="text-zinc-400">Network configuration and management</li>
            <li className="text-zinc-400">Application and service orchestration</li>
            <li className="text-zinc-400">Log file monitoring and management</li>
            <li className="text-zinc-400">Cloud connectivity and integration</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Golang</span>
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Bubble Tea</span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Projects Section */}
      <div>
        <h1 className="text-xl font-bold text-zinc-100 mb-4 border-b border-zinc-800 pb-2">
          Personal Projects
        </h1>
        <div className="space-y-6">
          {/* Example Personal Project - You can add your own */}
          <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors">
            <h2 className="text-lg font-bold text-zinc-100">
              <span className="text-purple-400">🚀</span> Portfolio Website
            </h2>
            <p className="mt-2 text-zinc-400 text-sm">
              A modern, terminal-themed portfolio website built with Next.js and TailwindCSS,
              featuring a unique command-line interface and responsive design.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Next.js</span>
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">React</span>
              <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">TailwindCSS</span>
            </div>
          </div>
          
          {/* Add more personal projects here */}
        </div>
      </div>
    </div>
  );
} 