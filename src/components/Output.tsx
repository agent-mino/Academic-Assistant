'use client';

import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import remarkGfm from 'remark-gfm';

export function Output({ output }: { output: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="relative">
      <div className="prose prose-invert prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-code:text-red-300 prose-pre:bg-black/50 prose-pre:p-4 prose-pre:rounded-xl max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{output}</ReactMarkdown>
      </div>

      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-all text-gray-300 hover:text-white"
      >
        {copied ? 'Copied ✓' : 'Copy'}
      </button>
    </div>
  );
}