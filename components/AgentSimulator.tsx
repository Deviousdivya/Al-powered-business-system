'use client';

import React, { useState } from 'react';
import { SimulationResult } from '@/lib/types';
import { 
  Play, 
  RotateCcw, 
  Cpu, 
  ShieldAlert, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  Database, 
  UserCheck, 
  ArrowRight,
  ExternalLink,
  Loader2,
  Copy,
  Check
} from 'lucide-react';

const PRESET_INQUIRIES = [
  {
    label: 'Alpine Chalet (Gstaad) · Custom Marble & Floor Load',
    clientName: 'Marie-Claire Delacroix',
    clientType: 'Interior Architect' as const,
    location: 'Geneva / Gstaad, Switzerland',
    inquiry: 'Bonjour. We are designing a master bathroom in a Gstaad chalet. Looking at your Lunaria Carrara monolithic bath, but our client wants it 1950mm long instead of standard 1850mm with aged brass overflow. Can you confirm if standard floor joists support this and lead time for October delivery?'
  },
  {
    label: 'Superyacht Penthouse (Monaco) · Hammered Brass',
    clientName: 'Lord Julian Sterling',
    clientType: 'Yacht Outfitter' as const,
    location: 'Port Hercules, Monaco',
    inquiry: 'Good afternoon. Specifying for an 85m motor yacht refit. Need a double slipper freestanding bath in Moroccan hammered brass with living antique patina. Total dry weight must remain under 140kg for marine deck loading. Lead time to Port Hercules?'
  },
  {
    label: 'Kyoto Sanctuary · 300-Year Hinoki Cypress Ofuro',
    clientName: 'Kenzo Takahashi Architects',
    clientType: 'Interior Architect' as const,
    location: 'Kyoto, Japan',
    inquiry: 'Inquiry regarding the Sora Hinoki Ofuro for a traditional ryokan master suite. Can this be crafted with circular proportions (1600mm diameter) and integrated microbubble hydrotherapy? Also advise on ambient humidity maintenance protocol.'
  }
];

export default function AgentSimulator() {
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [clientName, setClientName] = useState(PRESET_INQUIRIES[0].clientName);
  const [clientType, setClientType] = useState<string>(PRESET_INQUIRIES[0].clientType);
  const [location, setLocation] = useState(PRESET_INQUIRIES[0].location);
  const [inquiryText, setInquiryText] = useState(PRESET_INQUIRIES[0].inquiry);

  const [isLoading, setIsLoading] = useState(false);
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleApplyPreset = (index: number) => {
    setSelectedPreset(index);
    const p = PRESET_INQUIRIES[index];
    setClientName(p.clientName);
    setClientType(p.clientType);
    setLocation(p.location);
    setInquiryText(p.inquiry);
  };

  const handleRunSimulation = async () => {
    setIsLoading(true);
    setSimulationResult(null);

    try {
      const res = await fetch('/api/agent-pipeline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          clientType,
          location,
          inquiryText
        })
      });

      if (!res.ok) throw new Error('Simulation failed');
      const data = await res.json();
      setSimulationResult(data);
    } catch (err) {
      console.error('Error running agent simulation:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-stone-100">
      {/* Title */}
      <div className="mb-6">
        <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-widest">
          Live Agentic Execution Sandbox · Multi-Agent Council
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-100 font-medium mt-1">
          Interactive Multi-Agent Inquiry Simulation
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-3xl">
          Test how the Six-Agent Council choreographs an inbound inquiry in real time: from sub-second WhatsApp triage and structural floor-load RAG formulas, to CRM deal scoring, visual diffusion prompt synthesis, and Human-in-the-Loop approval gating.
        </p>
      </div>

      {/* Preset Selector */}
      <div className="mb-6 flex flex-wrap gap-2">
        {PRESET_INQUIRIES.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => handleApplyPreset(idx)}
            className={`px-3 py-1.5 rounded text-xs transition-all border ${
              selectedPreset === idx
                ? 'bg-[#1e2531] border-[#c5a059] text-[#c5a059] font-medium'
                : 'bg-[#131720] border-[#252e3b] text-stone-300 hover:border-stone-500'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input Configuration Panel (Left 4 Cols) */}
        <div className="lg:col-span-4 bg-[#12161f] border border-[#242d3c] rounded-lg p-5 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#202735]">
            <span className="font-serif text-sm font-semibold text-stone-200">
              Inbound Customer Payload
            </span>
            <span className="text-[10px] font-mono text-[#c5a059]">Meta WhatsApp API</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-stone-400 font-mono text-[11px] mb-1">
                Client / Architect Name
              </label>
              <input
                type="text"
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                className="w-full bg-[#0a0d13] border border-[#252f3f] rounded p-2 text-stone-100 font-sans focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-stone-400 font-mono text-[11px] mb-1">
                  Client Type
                </label>
                <select
                  value={clientType}
                  onChange={e => setClientType(e.target.value)}
                  className="w-full bg-[#0a0d13] border border-[#252f3f] rounded p-2 text-stone-100 font-sans focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="Interior Architect">Interior Architect</option>
                  <option value="Private VIP">Private VIP Homeowner</option>
                  <option value="Yacht Outfitter">Yacht Outfitter</option>
                  <option value="Luxury Hotelier">Luxury Hotelier</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-400 font-mono text-[11px] mb-1">
                  Project Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className="w-full bg-[#0a0d13] border border-[#252f3f] rounded p-2 text-stone-100 font-sans focus:outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-400 font-mono text-[11px] mb-1">
                Inbound Message Content (WhatsApp / Web Chat)
              </label>
              <textarea
                rows={5}
                value={inquiryText}
                onChange={e => setInquiryText(e.target.value)}
                className="w-full bg-[#0a0d13] border border-[#252f3f] rounded p-2 text-stone-100 font-sans focus:outline-none focus:border-[#c5a059] leading-relaxed text-xs"
              />
            </div>

            <button
              onClick={handleRunSimulation}
              disabled={isLoading || !inquiryText}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-[#c5a059] to-[#d4b06a] hover:from-[#b9934a] hover:to-[#c5a059] text-stone-950 font-serif font-medium tracking-wide rounded transition-all shadow flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Orchestrating Agent Council...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-stone-950" />
                  <span>Execute Multi-Agent Pipeline</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-3 border-t border-[#1f2633] text-[11px] text-stone-400 space-y-1">
            <div className="flex items-center justify-between">
              <span>Primary Engine:</span>
              <span className="font-mono text-stone-200">Gemini 3.1 Pro / Flash</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Vector Retrievable:</span>
              <span className="font-mono text-stone-200">Qdrant HNSW + BM25</span>
            </div>
          </div>
        </div>

        {/* Live Execution Results (Right 8 Cols) */}
        <div className="lg:col-span-8 bg-[#12161f] border border-[#242d3c] rounded-lg p-5">
          {isLoading ? (
            <div className="h-96 flex flex-col items-center justify-center text-center space-y-3">
              <Loader2 className="w-8 h-8 text-[#c5a059] animate-spin" />
              <div className="font-serif text-stone-200 text-lg">
                Coordinating Autonomous Agent Council...
              </div>
              <p className="text-xs text-stone-400 max-w-md font-mono">
                [Concierge] Classifying sentiment &rarr; [Spec Agent] Calculating wet load &amp; joist physics &rarr; [Lead Agent] Enriching CRM Deal &rarr; [HITL Gate] Checking threshold rules...
              </p>
            </div>
          ) : simulationResult ? (
            <div className="space-y-6">
              {/* Summary KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-[#161d28] border border-[#263346] rounded">
                  <div className="text-[10px] font-mono text-stone-400 uppercase">Lead Qualification</div>
                  <div className="text-base font-serif font-semibold text-emerald-400 mt-0.5">
                    {simulationResult.leadScoring.score} / 100
                  </div>
                  <div className="text-[11px] text-stone-300 mt-0.5">
                    {simulationResult.leadScoring.tier}
                  </div>
                </div>

                <div className="p-3 bg-[#161d28] border border-[#263346] rounded">
                  <div className="text-[10px] font-mono text-stone-400 uppercase">Estimated Commission Value</div>
                  <div className="text-base font-serif font-semibold text-[#c5a059] mt-0.5">
                    {simulationResult.leadScoring.estimatedDealValue}
                  </div>
                  <div className="text-[11px] text-stone-300 mt-0.5">
                    {simulationResult.customerProfile.budgetIndication}
                  </div>
                </div>

                <div className={`p-3 rounded border ${
                  simulationResult.humanInTheLoop.triggered
                    ? 'bg-[#221a1f] border-amber-500/50 text-amber-200'
                    : 'bg-[#161d28] border-emerald-500/40 text-emerald-200'
                }`}>
                  <div className="text-[10px] font-mono uppercase flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5" />
                    Human Review Status
                  </div>
                  <div className="text-base font-serif font-semibold mt-0.5">
                    {simulationResult.humanInTheLoop.triggered ? 'HITL LOCKED' : 'AUTONOMOUS PASS'}
                  </div>
                  <div className="text-[10px] truncate mt-0.5">
                    {simulationResult.humanInTheLoop.approverRole}
                  </div>
                </div>
              </div>

              {/* Agent Progression Trace */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#c5a059] mb-2 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" /> Agent Council Execution Trace
                </div>
                <div className="space-y-3">
                  {simulationResult.agentSteps.map((step, sIdx) => (
                    <div key={sIdx} className="p-3 bg-[#151a24] border border-[#252f3f] rounded text-xs space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-stone-200 font-mono">
                          {step.agentName}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">
                          Status: Verified
                        </span>
                      </div>
                      <p className="text-stone-300 text-[11px] leading-relaxed">
                        <strong className="text-stone-400">Reasoning:</strong> {step.reasoning}
                      </p>
                      <div className="flex flex-wrap items-center gap-1 text-[10px] text-stone-400 pt-1">
                        <span className="text-[#c5a059] font-mono">RAG Sources:</span>
                        {step.ragSourcesUsed.map((src, i) => (
                          <span key={i} className="bg-[#0b0e14] px-1.5 py-0.5 rounded border border-[#1f2837] text-stone-300 font-mono">
                            {src}
                          </span>
                        ))}
                      </div>
                      <div className="text-[11px] bg-[#0c1017] p-2 rounded border border-[#1f2837] font-mono text-stone-200">
                        {step.outputSnippet}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* HITL Escalation Alert Banner */}
              {simulationResult.humanInTheLoop.triggered && (
                <div className="p-3.5 bg-[#1f1915] border border-amber-500/60 rounded flex items-start gap-3 text-xs">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-amber-300 font-serif text-sm">
                      Human Sign-Off Required Prior to Dispatch
                    </div>
                    <p className="text-stone-300 mt-1">
                      {simulationResult.humanInTheLoop.reason}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[10px] font-mono text-amber-400 bg-[#2d2217] px-2 py-0.5 rounded border border-amber-500/30">
                        Routed to: {simulationResult.humanInTheLoop.approverRole}
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">
                        Channel: {simulationResult.humanInTheLoop.escalationChannel}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Drafted Concierge WhatsApp Response */}
              <div className="p-4 bg-[#141b22] border border-[#273546] rounded">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-stone-200 font-serif">
                      Drafted VIP Concierge WhatsApp Response (Awaiting Sign-Off)
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(simulationResult.whatsappDraft)}
                    className="text-[11px] text-stone-400 hover:text-stone-200 flex items-center gap-1 font-mono"
                  >
                    {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedDraft ? 'Copied' : 'Copy Draft'}</span>
                  </button>
                </div>
                <div className="p-3 bg-[#0c1117] rounded border border-[#1f2835] text-xs text-stone-200 font-sans whitespace-pre-line leading-relaxed">
                  {simulationResult.whatsappDraft}
                </div>
              </div>

              {/* CRM Deal & Diffusion Prompt Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#141822] border border-[#222c3c] rounded space-y-1.5">
                  <div className="font-mono text-[#c5a059] font-medium text-[11px]">
                    HubSpot CRM Deal Provisioning
                  </div>
                  <pre className="p-2 bg-[#0c1017] rounded border border-[#1e2736] font-mono text-[10px] text-stone-300 overflow-x-auto">
                    {JSON.stringify(simulationResult.crmPayload, null, 2)}
                  </pre>
                </div>

                <div className="p-3 bg-[#141822] border border-[#222c3c] rounded space-y-1.5">
                  <div className="font-mono text-purple-400 font-medium text-[11px]">
                    Synthesized Visual Diffusion Prompt
                  </div>
                  <p className="p-2 bg-[#0c1017] rounded border border-[#1e2736] font-sans text-[11px] text-stone-300 leading-normal italic">
                    &ldquo;{simulationResult.visualPromptSpec}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-96 flex flex-col items-center justify-center text-center space-y-3 text-stone-400">
              <Cpu className="w-10 h-10 text-stone-600" />
              <div className="font-serif text-stone-300 text-base">
                Ready to Process Architectural Inquiry
              </div>
              <p className="text-xs max-w-sm">
                Select a luxury inquiry preset on the left or customize your own, then click &ldquo;Execute Multi-Agent Pipeline&rdquo; to watch the real-time reasoning.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
