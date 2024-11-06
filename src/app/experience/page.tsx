'use client';

export default function Experience() {
  return (
    <div className="p-6 font-mono">
      <div className="mb-8">
        <span className="text-green-400">$</span>
        <span className="text-blue-500"> cat experience.md</span>
      </div>

      {/* Current Role */}
      <div className="mb-12">
        <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-400">→</span>
            <h2 className="text-lg font-bold text-zinc-100">Software Developer</h2>
            <span className="text-zinc-400">@</span>
            <span className="text-blue-500">Audio Enhancement</span>
          </div>
          <div className="text-sm text-zinc-400 mb-4">Feb 2022 - Present</div>
          <ul className="space-y-2 text-zinc-400 text-sm list-inside">
            <li>• Developed and maintained backend services in Golang and JavaScript, contributing to classroom audio solutions</li>
            <li>• Initiated team standards for unit and E2E tests, significantly improving code quality</li>
            <li>• Established and optimized devops pipeline with Docker and Bitbucket Pipelines</li>
            <li>• Spearheaded best practices for code commenting and documentation</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Golang</span>
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">JavaScript</span>
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Docker</span>
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">CI/CD</span>
          </div>
        </div>
      </div>

      {/* Previous Roles */}
      <div className="space-y-8">
        <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-400">→</span>
            <h2 className="text-lg font-bold text-zinc-100">Field Engineer</h2>
            <span className="text-zinc-400">@</span>
            <span className="text-blue-500">Audio Enhancement</span>
          </div>
          <div className="text-sm text-zinc-400 mb-4">Aug 2021 - Feb 2022</div>
          <ul className="space-y-2 text-zinc-400 text-sm list-inside">
            <li>• Led system installations and final checks for classroom audio systems</li>
            <li>• Provided technical guidance and customer support during installations</li>
            <li>• Gained hands-on experience with system configuration and troubleshooting</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Technical Support</span>
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">System Installation</span>
          </div>
        </div>

        <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-400">→</span>
            <h2 className="text-lg font-bold text-zinc-100">IT Technician and Systems Administrator</h2>
            <span className="text-zinc-400">@</span>
            <span className="text-blue-500">Griffin Spalding County Schools</span>
          </div>
          <div className="text-sm text-zinc-400 mb-4">Oct 2019 - Aug 2021</div>
          <ul className="space-y-2 text-zinc-400 text-sm list-inside">
            <li>• Managed Linux servers and performed regular maintenance</li>
            <li>• Supported teachers and staff with technical issues</li>
            <li>• Maintained IT infrastructure and network systems</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Linux</span>
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">System Administration</span>
            <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">IT Support</span>
          </div>
        </div>
      </div>

      {/* Education & Certification */}
      <div className="mt-12">
        <div className="mb-4">
          <span className="text-green-400">$</span>
          <span className="text-blue-500"> cat certifications.md</span>
        </div>
        <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-400">📜</span>
            <h2 className="text-lg font-bold text-zinc-100">AWS Certified Developer</h2>
          </div>
          <div className="mt-4 text-sm text-zinc-400">
            Relevant Coursework: Computer Science, Networking, Software Engineering
          </div>
        </div>
      </div>
    </div>
  );
} 