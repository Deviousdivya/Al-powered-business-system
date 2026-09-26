'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import DocumentViewer from '@/components/DocumentViewer';
import ArchitectureCanvas from '@/components/ArchitectureCanvas';
import AgentSimulator from '@/components/AgentSimulator';
import KnowledgeBaseExplorer from '@/components/KnowledgeBaseExplorer';
import ApiPayloadViewer from '@/components/ApiPayloadViewer';
import { EXECUTIVE_WHITEPAPER_PAGES } from '@/lib/document-data';
import { BATHTUB_CATALOG, SYSTEM_AGENTS } from '@/lib/knowledge-base-mock';
import { 
  FileText, 
  Layers, 
  Cpu, 
  Database, 
  Code2, 
  Printer, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  ExternalLink,
  Crown
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'whitepaper' | 'architecture' | 'simulator' | 'knowledge' | 'apis'>('whitepaper');
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const handlePrint = () => {
    // If not in whitepaper view, switch to whitepaper view first then print
    if (activeTab !== 'whitepaper') {
      setActiveTab('whitepaper');
      setTimeout(() => {
        window.print();
      }, 300);
    } else {
      window.print();
    }
  };

  const handleCopyMarkdown = () => {
    let fullMarkdown = `# ATELIER BAIGNOIRE · AI OPERATING SYSTEM SPECIFICATION
## Comprehensive 5-Page Enterprise Architecture Blueprint for Handmade Luxury Bathtubs
*Document Reference: SPEC-DOC-2026-v4 | Classification: Confidential Commercial Specification*\n\n`;

    EXECUTIVE_WHITEPAPER_PAGES.forEach(page => {
      fullMarkdown += `\n---\n# PAGE ${page.pageNumber}: ${page.title.toUpperCase()}\n*${page.subtitle}*\n\n`;
      page.sections.forEach(sec => {
        fullMarkdown += `\n## ${sec.heading}\n\n${sec.content}\n`;
        if (sec.calloutBox) {
          fullMarkdown += `\n> **${sec.calloutBox.title}**\n> ${sec.calloutBox.text}\n`;
        }
      });
    });

    navigator.clipboard.writeText(fullMarkdown);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2500);
  };

  const handleExportJson = () => {
    const fullSpecification = {
      metadata: {
        system_name: "Atelier Baignoire AI Operating System",
        version: "3.2.0-enterprise",
        document_code: "SPEC-DOC-2026-v4",
        generated_date: "2026-09-26",
        classification: "Confidential - Architecture Blueprint"
      },
      whitepaper_pages: EXECUTIVE_WHITEPAPER_PAGES,
      agent_council: SYSTEM_AGENTS,
      master_catalog: BATHTUB_CATALOG,
      security_matrix: {
        zero_data_training_agreement: true,
        human_in_the_loop_threshold_usd: 15000,
        floor_load_limit_kg_m2: 400,
        encryption: "TLS 1.3 / AES-256 CMEK"
      }
    };

    const blob = new Blob([JSON.stringify(fullSpecification, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `atelier_baignoire_ai_system_blueprint_2026.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#090c10] text-stone-100 flex flex-col font-sans selection:bg-[#c5a059]/30 selection:text-[#f8f6f0]">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPrint={handlePrint}
        onCopyMarkdown={handleCopyMarkdown}
        onExportJson={handleExportJson}
        copiedMarkdown={copiedMarkdown}
      />

      {/* Screen Hero Banner (Hidden in Print Mode) */}
      <div className="no-print bg-gradient-to-b from-[#131821] via-[#0d1117] to-[#090c10] border-b border-[#202835] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#c5a059] bg-[#1a1f26] border border-[#c5a059]/30 px-2.5 py-0.5 rounded">
                <Crown className="w-3 h-3 text-[#c5a059]" /> Bespoke Haute Craftsmanship AI
              </span>
              <span className="text-[11px] font-mono text-stone-400">
                5-Page Deliverable · Multi-Agent Mesh · Hybrid RAG
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-stone-100 font-medium tracking-tight">
              AI-Powered Business System for Handmade Luxury Bathtubs
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              An enterprise-grade operating system interconnecting WhatsApp concierge triage, CAD structural floor-joist RAG calculations, HubSpot CRM automation, FLUX.1 generative bathroom concepts, and human master stonemason governance.
            </p>
          </div>

          {/* Quick Metrics Badge Card */}
          <div className="p-3.5 bg-[#141a24] border border-[#263140] rounded-lg text-xs space-y-2 shrink-0 md:w-80 shadow-md">
            <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider flex items-center justify-between">
              <span>Atelier System Vitals</span>
              <span className="text-emerald-400 font-mono">SOC 2 / Zero-Hallucination</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-[#0b0e14] p-2 rounded border border-[#1d2633]">
                <div className="text-[10px] text-stone-400">Agent Fleet</div>
                <div className="font-mono text-sm font-semibold text-[#c5a059]">6 Specialized</div>
              </div>
              <div className="bg-[#0b0e14] p-2 rounded border border-[#1d2633]">
                <div className="text-[10px] text-stone-400">Triage Latency</div>
                <div className="font-mono text-sm font-semibold text-emerald-400">&lt; 450 ms</div>
              </div>
            </div>
            <div className="text-[10px] text-stone-400 pt-1 border-t border-[#1e2735] flex items-center justify-between">
              <span>HITL Financial Gate:</span>
              <strong className="text-stone-200 font-mono">$15,000 USD Threshold</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {activeTab === 'whitepaper' && (
          <DocumentViewer onPrint={handlePrint} />
        )}

        {activeTab === 'architecture' && (
          <ArchitectureCanvas />
        )}

        {activeTab === 'simulator' && (
          <AgentSimulator />
        )}

        {activeTab === 'knowledge' && (
          <KnowledgeBaseExplorer />
        )}

        {activeTab === 'apis' && (
          <ApiPayloadViewer />
        )}
      </main>

      {/* Footer */}
      <footer className="no-print mt-auto border-t border-[#1e2634] bg-[#0b0e14] py-6 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded border border-[#c5a059]/40 bg-[#161a22] flex items-center justify-center text-[#c5a059] text-[10px] font-serif font-bold">
              AB
            </div>
            <span className="font-serif text-stone-300">
              Atelier Baignoire · Paris · Firenze · Kyoto
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-stone-500">
            <span>Model: Gemini 3.1 Pro / Flash</span>
            <span>·</span>
            <span>RAG: Qdrant Dense+Sparse RRF</span>
            <span>·</span>
            <span>Ref: SPEC-DOC-2026-v4</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
