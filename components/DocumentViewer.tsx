'use client';

import React, { useState } from 'react';
import { 
  EXECUTIVE_WHITEPAPER_PAGES, 
  WhitepaperPage 
} from '@/lib/document-data';
import DocumentDiagrams from './DocumentDiagrams';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Printer, 
  ShieldAlert, 
  Sparkles, 
  Info,
  Maximize2
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface DocumentViewerProps {
  onPrint: () => void;
}

export default function DocumentViewer({ onPrint }: DocumentViewerProps) {
  const [viewMode, setViewMode] = useState<'continuous' | 'paginated'>('continuous');
  const [activePageIndex, setActivePageIndex] = useState<number>(0);

  const currentPage = EXECUTIVE_WHITEPAPER_PAGES[activePageIndex];

  return (
    <div className="w-full">
      {/* View Mode Bar (Screen only) */}
      <div className="no-print bg-[#131720] border-b border-[#232a35] px-4 py-2.5 flex flex-wrap items-center justify-between text-xs text-stone-300">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#c5a059]" />
          <span className="font-serif text-stone-200 uppercase tracking-wider text-xs">
            Document Presentation Format:
          </span>
          <div className="inline-flex rounded border border-[#2d3644] bg-[#0c1017] p-0.5 ml-2">
            <button
              onClick={() => setViewMode('continuous')}
              className={`px-3 py-1 rounded text-xs transition-colors ${
                viewMode === 'continuous'
                  ? 'bg-[#c5a059] text-stone-950 font-medium'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Continuous Bound Document (Pages 1–5)
            </button>
            <button
              onClick={() => setViewMode('paginated')}
              className={`px-3 py-1 rounded text-xs transition-colors ${
                viewMode === 'paginated'
                  ? 'bg-[#c5a059] text-stone-950 font-medium'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Page-by-Page View
            </button>
          </div>
        </div>

        {viewMode === 'paginated' && (
          <div className="flex items-center gap-3">
            <button
              disabled={activePageIndex === 0}
              onClick={() => setActivePageIndex(prev => Math.max(0, prev - 1))}
              className="p-1 rounded border border-[#2d3644] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1f2633]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-[#c5a059]">
              Page {activePageIndex + 1} of {EXECUTIVE_WHITEPAPER_PAGES.length}
            </span>
            <button
              disabled={activePageIndex === EXECUTIVE_WHITEPAPER_PAGES.length - 1}
              onClick={() => setActivePageIndex(prev => Math.min(EXECUTIVE_WHITEPAPER_PAGES.length - 1, prev + 1))}
              className="p-1 rounded border border-[#2d3644] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1f2633]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="hidden sm:flex items-center gap-2 text-stone-400 text-[11px]">
          <span>Format: Formal Architecture Specification</span>
          <span>·</span>
          <span>Security Level: Confidential</span>
        </div>
      </div>

      {/* Main Document Body */}
      <div className="max-w-4xl mx-auto my-6 px-4 sm:px-6 print:m-0 print:p-0 print:max-w-none">
        {viewMode === 'continuous' ? (
          // Continuous 5-Page Bound Whitepaper
          <div className="space-y-12 print:space-y-0">
            {EXECUTIVE_WHITEPAPER_PAGES.map((page, index) => (
              <article 
                key={page.pageNumber} 
                className={`bg-[#12161f] print:bg-white text-stone-200 print:text-stone-900 border border-[#232b38] print:border-none rounded-lg p-6 sm:p-10 shadow-lg print:shadow-none print:p-0 ${
                  index > 0 ? 'print:page-break' : ''
                }`}
              >
                {/* Formal Page Header */}
                <div className="border-b border-[#2d3748] print:border-stone-300 pb-4 mb-6 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] print:text-stone-600">
                        Atelier Baignoire Enterprise Blueprint · Page {page.pageNumber} of 5
                      </span>
                    </div>
                    <h1 className="font-serif text-2xl sm:text-3xl text-stone-100 print:text-stone-950 font-medium tracking-tight">
                      {page.title}
                    </h1>
                    <p className="text-xs sm:text-sm text-stone-400 print:text-stone-600 mt-1">
                      {page.subtitle}
                    </p>
                  </div>
                  <div className="text-right shrink-0 hidden sm:block">
                    <div className="font-mono text-xs text-[#c5a059] print:text-stone-700">SPEC-DOC-2026-v4</div>
                    <div className="text-[10px] text-stone-400 print:text-stone-500">Ref: AI-ATELIER-ARCH</div>
                  </div>
                </div>

                {/* Page Content Sections */}
                <div className="space-y-8">
                  {page.sections.map((section, sIdx) => (
                    <section key={sIdx} className="space-y-3">
                      <h2 className="font-serif text-lg text-[#e6cca0] print:text-stone-900 font-semibold tracking-wide border-b border-[#1f2633] print:border-stone-200 pb-1">
                        {section.heading}
                      </h2>
                      
                      {/* Markdown Body */}
                      <div className="text-stone-300 print:text-stone-800 text-sm leading-relaxed space-y-3 font-sans [&>p]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1 [&>blockquote]:border-l-2 [&>blockquote]:border-[#c5a059] [&>blockquote]:pl-3 [&>blockquote]:italic [&>table]:w-full [&>table]:text-xs [&>table]:my-3 [&>table]:border-collapse [&_th]:bg-[#18202c] print:[&_th]:bg-stone-100 [&_th]:p-2 [&_th]:text-left [&_th]:border [&_th]:border-[#2c3748] print:[&_th]:border-stone-300 [&_td]:p-2 [&_td]:border [&_td]:border-[#252f3e] print:[&_td]:border-stone-200">
                        <ReactMarkdown>{section.content}</ReactMarkdown>
                      </div>

                      {/* Interactive / Structural Diagram if defined */}
                      {section.diagramType && (
                        <DocumentDiagrams type={section.diagramType} />
                      )}

                      {/* Callout Box if defined */}
                      {section.calloutBox && (
                        <div className={`p-4 rounded-md border my-4 text-xs ${
                          section.calloutBox.type === 'luxury' 
                            ? 'bg-[#181a17] border-[#c5a059]/50 text-stone-200' 
                            : section.calloutBox.type === 'security'
                            ? 'bg-[#1a1517] border-rose-800/40 text-rose-200'
                            : 'bg-[#151c24] border-sky-800/40 text-stone-200'
                        }`}>
                          <div className="font-serif font-semibold mb-1 flex items-center gap-1.5 text-[#e6cca0]">
                            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                            {section.calloutBox.title}
                          </div>
                          <p className="text-stone-300 print:text-stone-700 leading-normal">
                            {section.calloutBox.text}
                          </p>
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                {/* Page Footer (Folio) */}
                <div className="mt-8 pt-4 border-t border-[#1f2837] print:border-stone-200 flex items-center justify-between text-[11px] text-stone-400 print:text-stone-500 font-mono">
                  <span>Atelier Baignoire · Confidentiel</span>
                  <span>Page {page.pageNumber} of 5</span>
                  <span>AI Systems Division</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          // Paginated View (1 Page at a time)
          <article className="bg-[#12161f] text-stone-200 border border-[#232b38] rounded-lg p-6 sm:p-10 shadow-lg">
            {/* Header */}
            <div className="border-b border-[#2d3748] pb-4 mb-6 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059]">
                  Atelier Baignoire Enterprise Blueprint · Page {currentPage.pageNumber} of 5
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl text-stone-100 font-medium tracking-tight mt-1">
                  {currentPage.title}
                </h1>
                <p className="text-xs sm:text-sm text-stone-400 mt-1">
                  {currentPage.subtitle}
                </p>
              </div>
              <div className="text-right shrink-0 hidden sm:block">
                <div className="font-mono text-xs text-[#c5a059]">SPEC-DOC-2026-v4</div>
                <div className="text-[10px] text-stone-400">Ref: AI-ATELIER-ARCH</div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {currentPage.sections.map((section, sIdx) => (
                <section key={sIdx} className="space-y-3">
                  <h2 className="font-serif text-lg text-[#e6cca0] font-semibold tracking-wide border-b border-[#1f2633] pb-1">
                    {section.heading}
                  </h2>
                  <div className="text-stone-300 text-sm leading-relaxed space-y-3 font-sans [&>p]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1 [&>blockquote]:border-l-2 [&>blockquote]:border-[#c5a059] [&>blockquote]:pl-3 [&>blockquote]:italic [&>table]:w-full [&>table]:text-xs [&>table]:my-3 [&>table]:border-collapse [&_th]:bg-[#18202c] [&_th]:p-2 [&_th]:text-left [&_th]:border [&_th]:border-[#2c3748] [&_td]:p-2 [&_td]:border [&_td]:border-[#252f3e]">
                    <ReactMarkdown>{section.content}</ReactMarkdown>
                  </div>

                  {section.diagramType && (
                    <DocumentDiagrams type={section.diagramType} />
                  )}

                  {section.calloutBox && (
                    <div className="p-4 rounded-md border my-4 text-xs bg-[#181a17] border-[#c5a059]/50 text-stone-200">
                      <div className="font-serif font-semibold mb-1 flex items-center gap-1.5 text-[#e6cca0]">
                        <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                        {section.calloutBox.title}
                      </div>
                      <p className="text-stone-300 leading-normal">
                        {section.calloutBox.text}
                      </p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Pagination Controls Footer */}
            <div className="mt-10 pt-4 border-t border-[#1f2837] flex items-center justify-between">
              <button
                disabled={activePageIndex === 0}
                onClick={() => setActivePageIndex(prev => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded text-xs border border-[#2d3748] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1a212c] flex items-center gap-1 text-stone-300"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Previous Page
              </button>

              <div className="text-xs font-mono text-[#c5a059]">
                Page {currentPage.pageNumber} of {EXECUTIVE_WHITEPAPER_PAGES.length}
              </div>

              <button
                disabled={activePageIndex === EXECUTIVE_WHITEPAPER_PAGES.length - 1}
                onClick={() => setActivePageIndex(prev => Math.min(EXECUTIVE_WHITEPAPER_PAGES.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded text-xs border border-[#2d3748] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1a212c] flex items-center gap-1 text-stone-300"
              >
                Next Page <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
