'use client';

import { useState, useMemo } from "react";

// Sample blog posts - these would later be moved to a CMS or markdown files
const blogPosts = [
  {
    id: 1,
    title: "Implementing E2E Testing with Playwright",
    date: "2024-03-15",
    preview: "A deep dive into how we implemented end-to-end testing using Playwright, improving our code reliability and catching bugs before they reach production.",
    tags: ["Testing", "Playwright", "DevOps"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Optimizing Docker Builds in CI/CD Pipelines",
    date: "2024-03-01",
    preview: "Learn how we reduced our Docker build times by 60% by implementing layer caching and multi-stage builds in our CI/CD pipeline.",
    tags: ["Docker", "CI/CD", "Performance"],
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Building Scalable Backend Services with Golang",
    date: "2024-02-15",
    preview: "Exploring best practices for building maintainable and scalable backend services using Go, based on real-world experience.",
    tags: ["Golang", "Backend", "Architecture"],
    readTime: "8 min read"
  }
];

// Get unique years and months from posts
const getDateGroups = (posts: typeof blogPosts) => {
  const groups = posts.reduce((acc, post) => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.getMonth();
    
    if (!acc[year]) {
      acc[year] = new Set();
    }
    acc[year].add(month);
    
    return acc;
  }, {} as Record<number, Set<number>>);

  return Object.entries(groups)
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
    .map(([year, months]) => ({
      year: Number(year),
      months: Array.from(months).sort((a, b) => b - a)
    }));
};

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set(blogPosts.flatMap(post => post.tags));
    return Array.from(tags).sort();
  }, []);

  // Filter posts based on search term, date, and tags
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const date = new Date(post.date);
      const matchesYear = !selectedYear || date.getFullYear() === selectedYear;
      const matchesMonth = !selectedMonth || date.getMonth() === selectedMonth;
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesSearch && matchesYear && matchesMonth && matchesTag;
    });
  }, [searchTerm, selectedYear, selectedMonth, selectedTag]);

  const dateGroups = useMemo(() => getDateGroups(blogPosts), []);

  return (
    <div className="p-6 font-mono">
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        {/* Search Command */}
        <div>
          <span className="text-green-400">$</span>
          <span className="text-blue-500"> grep -i</span>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-2 bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500 w-full sm:w-64"
          />
        </div>

        {/* Archive Navigation */}
        <div className="flex flex-wrap gap-4">
          <div>
            <span className="text-green-400">$</span>
            <span className="text-blue-500"> ls archives/</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {dateGroups.map(({ year, months }) => (
                <div key={year} className="space-y-1">
                  <button
                    onClick={() => {
                      setSelectedYear(selectedYear === year ? null : year);
                      setSelectedMonth(null);
                    }}
                    className={`px-2 py-1 text-sm rounded ${
                      selectedYear === year 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-zinc-900 border border-zinc-800 hover:border-blue-500'
                    }`}
                  >
                    {year}
                  </button>
                  {selectedYear === year && (
                    <div className="flex gap-1 ml-4">
                      {months.map(month => (
                        <button
                          key={month}
                          onClick={() => setSelectedMonth(selectedMonth === month ? null : month)}
                          className={`px-2 py-1 text-sm rounded ${
                            selectedMonth === month 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-zinc-900 border border-zinc-800 hover:border-blue-500'
                          }`}
                        >
                          {new Date(year, month).toLocaleString('default', { month: 'short' })}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div>
            <span className="text-green-400">$</span>
            <span className="text-blue-500"> ls tags/</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-2 py-1 text-sm rounded ${
                    selectedTag === tag 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-zinc-900 border border-zinc-800 hover:border-blue-500'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(searchTerm || selectedYear || selectedTag) && (
          <div className="text-sm text-zinc-400">
            <span className="text-green-400">$</span> Active filters:
            {searchTerm && <span className="ml-2">search=&quot;{searchTerm}&quot;</span>}
            {selectedYear && (
              <span className="ml-2">
                date={selectedYear}
                {selectedMonth !== null && `-${selectedMonth + 1}`}
              </span>
            )}
            {selectedTag && <span className="ml-2">tag=&quot;{selectedTag}&quot;</span>}
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedYear(null);
                setSelectedMonth(null);
                setSelectedTag(null);
              }}
              className="ml-2 text-blue-500 hover:text-blue-400"
            >
              clear
            </button>
          </div>
        )}
      </div>

      {/* Blog Posts List */}
      <div className="space-y-8">
        {filteredPosts.length === 0 ? (
          <div className="text-zinc-400 text-center py-8">
            No posts found matching your criteria
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-lg font-bold text-zinc-100 mb-2">
                <a href={`/blog/${post.id}`} className="hover:text-blue-400 transition-colors">
                  {post.title}
                </a>
              </h2>
              
              <p className="text-zinc-400 text-sm mb-3">
                {post.preview}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <button 
                    key={tag} 
                    onClick={() => setSelectedTag(tag)}
                    className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded hover:border-blue-500"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
} 