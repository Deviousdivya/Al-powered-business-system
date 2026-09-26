'use client';

import React from 'react';
import { 
  FileText, 
  Layers, 
  Cpu, 
  Database, 
  Code2, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Sparkles 
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'whitepaper' | 'architecture' | 'simulator' | 'knowledge' | 'apis';
  setActiveTab: (tab: 'whitepaper' | 'architecture' | 'simulator' | 'knowledge' | 'apis') => void;
  onPrint: () => void;
  onCopyMarkdown: () => void;
  onExportJson: () => void;
  copiedMarkdown: boolean;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  onPrint,
  onCopyMarkdown,
  onExportJson,
  copiedMarkdown
}: NavbarProps) {
  return (
    <header className="no-print sticky top-0 z-50 bg-[#0e1217]/95 backdrop-blur-md border-b border-[#2d333b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Crest */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded border border-[#c5a059]/40 bg-[#171b21] flex items-center justify-center text-[#c5a059] shadow-inner">
              <span className="font-serif text-lg tracking-wider font-semibold">AB</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-base tracking-wide font-medium text-stone-100">
                  ATELIER BAIGNOIRE
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#c5a059] font-mono">
                  PARIS · FIRENZE
                </span>
              </div>
              <p className="text-xs text-stone-400 font-sans hidden sm:block">
                AI Enterprise System Architecture & Multi-Agent Specification
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('whitepaper')}
              className={`px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors flex items-center gap-1.5 border-b-2 ${
                activeTab === 'whitepaper'
                  ? 'border-[#c5a059] text-[#c5a059] bg-[#1a1f26]'
                  : 'border-transparent text-stone-300 hover:text-white hover:bg-[#151920]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>5-Page Whitepaper</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors flex items-center gap-1.5 border-b-2 ${
                activeTab === 'architecture'
                  ? 'border-[#c5a059] text-[#c5a059] bg-[#1a1f26]'
                  : 'border-transparent text-stone-300 hover:text-white hover:bg-[#151920]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Topology Map</span>
            </button>

            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors flex items-center gap-1.5 border-b-2 ${
                activeTab === 'simulator'
                  ? 'border-[#c5a059] text-[#c5a059] bg-[#1a1f26]'
                  : 'border-transparent text-stone-300 hover:text-white hover:bg-[#151920]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Agent Simulator</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
            </button>

            <button
              onClick={() => setActiveTab('knowledge')}
              className={`px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors flex items-center gap-1.5 border-b-2 ${
                activeTab === 'knowledge'
                  ? 'border-[#c5a059] text-[#c5a059] bg-[#1a1f26]'
                  : 'border-transparent text-stone-300 hover:text-white hover:bg-[#151920]'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>RAG Knowledge Base</span>
            </button>

            <button
              onClick={() => setActiveTab('apis')}
              className={`px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors flex items-center gap-1.5 border-b-2 ${
                activeTab === 'apis'
                  ? 'border-[#c5a059] text-[#c5a059] bg-[#1a1f26]'
                  : 'border-transparent text-stone-300 hover:text-white hover:bg-[#151920]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>APIs & Payloads</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <button
              onClick={onCopyMarkdown}
              title="Copy Complete 5-Page Document as Markdown"
              className="px-2.5 py-1.5 text-xs text-stone-300 bg-[#1a2028] hover:bg-[#232b36] border border-[#343d4a] rounded transition-all flex items-center gap-1.5"
            >
              {copiedMarkdown ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-400" />
                  <span className="hidden sm:inline">Copy MD</span>
                </>
              )}
            </button>

            <button
              onClick={onExportJson}
              title="Export Full System Specification (JSON)"
              className="px-2.5 py-1.5 text-xs text-stone-300 bg-[#1a2028] hover:bg-[#232b36] border border-[#343d4a] rounded transition-all hidden sm:flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-stone-400" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={onPrint}
              className="px-3.5 py-1.5 text-xs font-medium bg-gradient-to-r from-[#c5a059] to-[#d4b06a] hover:from-[#b9934a] hover:to-[#c5a059] text-stone-950 font-serif tracking-wide rounded shadow-sm transition-all flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print 5-Page PDF</span>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation */}
        <div className="lg:hidden flex overflow-x-auto py-2 border-t border-[#232a34] gap-2 text-xs no-scrollbar">
          <button
            onClick={() => setActiveTab('whitepaper')}
            className={`px-3 py-1 whitespace-nowrap rounded ${
              activeTab === 'whitepaper' ? 'bg-[#c5a059] text-stone-950 font-medium' : 'text-stone-300 bg-[#171b21]'
            }`}
          >
            5-Page Whitepaper
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1 whitespace-nowrap rounded ${
              activeTab === 'architecture' ? 'bg-[#c5a059] text-stone-950 font-medium' : 'text-stone-300 bg-[#171b21]'
            }`}
          >
            Topology Map
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-1 whitespace-nowrap rounded ${
              activeTab === 'simulator' ? 'bg-[#c5a059] text-stone-950 font-medium' : 'text-stone-300 bg-[#171b21]'
            }`}
          >
            Live Simulator
          </button>
          <button
            onClick={() => setActiveTab('knowledge')}
            className={`px-3 py-1 whitespace-nowrap rounded ${
              activeTab === 'knowledge' ? 'bg-[#c5a059] text-stone-950 font-medium' : 'text-stone-300 bg-[#171b21]'
            }`}
          >
            RAG Specs
          </button>
          <button
            onClick={() => setActiveTab('apis')}
            className={`px-3 py-1 whitespace-nowrap rounded ${
              activeTab === 'apis' ? 'bg-[#c5a059] text-stone-950 font-medium' : 'text-stone-300 bg-[#171b21]'
            }`}
          >
            APIs & Webhooks
          </button>
        </div>
      </div>
    </header>
  );
}
