'use client';

export default function Projects() {
  return (
    <div className="p-6 font-mono">
      {/* Project List */}
      <div className="space-y-6">
        {/* DevOps Pipeline Project */}
        <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors">
          <h2 className="text-lg font-bold text-zinc-100">
            <span className="text-green-400">📦</span> CI/CD Pipeline Implementation
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            Established and optimized a DevOps pipeline using Docker and Bitbucket Pipelines, 
            reducing deployment times and streamlining workflows.
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
            Initiated and established team standards for unit and E2E testing, implementing 
            Playwright and Cypress to improve code reliability across projects.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Playwright</span>
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Cypress</span>
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Testing</span>
          </div>
        </div>

        {/* Backend Services Project */}
        <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors">
          <h2 className="text-lg font-bold text-zinc-100">
            <span className="text-green-400">🔧</span> Classroom Audio Solutions
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            Developed and maintained backend services for classroom audio systems, 
            implementing robust APIs and real-time communication features.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Golang</span>
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Node.js</span>
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">WebSockets</span>
          </div>
        </div>
      </div>
    </div>
  );
} 