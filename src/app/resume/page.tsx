'use client';

export default function Resume() {
  const resumeUrl = "https://docs.google.com/document/d/e/2PACX-1vQt7y--VwMA6sl7PxjD_F_VhaRcsFITvWqUVWRLKZIN28UY2bX95cejiK2gpShFEZsSQ8jqozCzoqAr/pub";
  const fullResumeUrl = "https://docs.google.com/document/d/1baDrkQ42id9wPcdLDGGJGtemQMf_F3nrbxWAIYAinIc/edit?usp=sharing";
  
  return (
    <div className="p-6 font-mono h-full">
      <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-2">
        <h1 className="text-xl font-bold text-zinc-100">
          Resume
        </h1>
        <a 
          href={fullResumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1"
        >
          View Full Resume
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </a>
      </div>
      <div className="w-full h-[calc(100vh-8rem)] bg-zinc-900/50 rounded-lg border border-zinc-800">
        <iframe 
          src={resumeUrl + "?embedded=true"}
          className="w-full h-full rounded-lg"
          title="Resume"
        />
      </div>
    </div>
  );
} 