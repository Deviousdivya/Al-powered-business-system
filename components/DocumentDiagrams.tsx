'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Database, 
  MessageSquare, 
  UserCheck, 
  ArrowRight, 
  Server, 
  Workflow, 
  Sparkles,
  AlertTriangle,
  FileCheck
} from 'lucide-react';

interface DiagramProps {
  type: 'architecture-topology' | 'agent-orchestration' | 'workflow-sequence' | 'rag-pipeline' | 'hitl-matrix';
}

export default function DocumentDiagrams({ type }: DiagramProps) {
  if (type === 'architecture-topology') {
    return (
      <div className="my-6 p-5 bg-[#0f141c] text-stone-100 rounded-lg border border-[#263140] shadow-sm font-sans">
        <div className="flex items-center justify-between pb-3 border-b border-[#232c39] mb-4">
          <div className="flex items-center gap-2">
            <Workflow className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">
              FIGURE 1.1: Atelier Baignoire Master AI System Architecture Topology
            </span>
          </div>
          <span className="text-[11px] text-stone-400 font-mono">ED-DAM v3.2 · Event-Driven Architecture</span>
        </div>

        {/* Responsive Grid Topology */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
          {/* Layer 1: Ingress */}
          <div className="p-3 bg-[#161c26] border border-[#2a3648] rounded">
            <div className="text-[11px] font-mono text-[#c5a059] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" /> 1. Inbound Ingress
            </div>
            <div className="font-semibold text-stone-200 mb-1">Omnichannel Gateway</div>
            <p className="text-[11px] text-stone-400 mb-2">Meta WhatsApp Cloud API, Instagram DM, Web Chat, Customizer Form.</p>
            <div className="text-[10px] font-mono text-stone-300 bg-[#0c1017] p-1.5 rounded border border-[#1f2835]">
              HMAC SHA-256 Auth · Cloudflare WAF · &lt;50ms Latency
            </div>
          </div>

          {/* Layer 2: State Machine */}
          <div className="p-3 bg-[#161c26] border border-[#2a3648] rounded">
            <div className="text-[11px] font-mono text-[#c5a059] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5" /> 2. Orchestration
            </div>
            <div className="font-semibold text-stone-200 mb-1">Temporal & LangGraph</div>
            <p className="text-[11px] text-stone-400 mb-2">Durable state machine, idempotency caching, pause/resume checkpointing.</p>
            <div className="text-[10px] font-mono text-stone-300 bg-[#0c1017] p-1.5 rounded border border-[#1f2835]">
              Redis Stream Queue · State: AtelierProjectState
            </div>
          </div>

          {/* Layer 3: Agent Council */}
          <div className="p-3 bg-[#161c26] border border-[#c5a059]/40 rounded relative">
            <div className="absolute -top-2 right-2 bg-[#c5a059] text-stone-950 font-bold px-1.5 py-0.2 text-[9px] uppercase tracking-wider rounded">
              Core
            </div>
            <div className="text-[11px] font-mono text-[#c5a059] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> 3. 6-Agent Council
            </div>
            <div className="font-semibold text-stone-200 mb-1">Gemini 3.1 Pro / Flash</div>
            <ul className="text-[10px] text-stone-300 space-y-0.5 mb-2 font-mono">
              <li>• Concierge (Triage)</li>
              <li>• Spec & CAD (Load/MEP)</li>
              <li>• VIP Lead (MEDDPICC)</li>
              <li>• Visual (FLUX.1 Render)</li>
              <li>• Editorial & SEO</li>
              <li>• Executive Yield</li>
            </ul>
          </div>

          {/* Layer 4: Knowledge / RAG */}
          <div className="p-3 bg-[#161c26] border border-[#2a3648] rounded">
            <div className="text-[11px] font-mono text-[#c5a059] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" /> 4. Hybrid RAG
            </div>
            <div className="font-semibold text-stone-200 mb-1">Qdrant + BM25 Lexical</div>
            <p className="text-[11px] text-stone-400 mb-2">Text-embedding-004 + Cohere Rerank 3.5. CAD formulas & stone petrology.</p>
            <div className="text-[10px] font-mono text-stone-300 bg-[#0c1017] p-1.5 rounded border border-[#1f2835]">
              Reciprocal Rank Fusion · Density & Floor Joist Tables
            </div>
          </div>

          {/* Layer 5: HITL & Enterprise */}
          <div className="p-3 bg-[#161c26] border border-[#2a3648] rounded">
            <div className="text-[11px] font-mono text-[#c5a059] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5" /> 5. HITL & Actions
            </div>
            <div className="font-semibold text-stone-200 mb-1">Safety Membrane</div>
            <p className="text-[11px] text-stone-400 mb-2">Quotes &gt; $15k &amp; loads &gt; 400kg/m² route to Master Stonemason.</p>
            <div className="text-[10px] font-mono text-stone-300 bg-[#0c1017] p-1.5 rounded border border-[#1f2835]">
              HubSpot Deals · Stripe Invoices · WhatsApp Dispatch
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-[#1e2633] flex flex-wrap items-center justify-between text-[11px] text-stone-400">
          <div>
            <span className="text-stone-300 font-medium">Flow Security:</span> TLS 1.3 · AES-256 CMEK · NeMo Guardrails · Zero Training Agreement
          </div>
          <div className="text-[#c5a059] font-mono">
            Average Ingress-to-Draft Latency: 1.84 seconds
          </div>
        </div>
      </div>
    );
  }

  if (type === 'agent-orchestration') {
    return (
      <div className="my-6 p-5 bg-[#0f141c] text-stone-100 rounded-lg border border-[#263140] shadow-sm font-sans">
        <div className="flex items-center justify-between pb-3 border-b border-[#232c39] mb-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">
              FIGURE 2.1: Multi-Agent Council & Inter-Agent Delegation Matrix
            </span>
          </div>
          <span className="text-[11px] text-stone-400 font-mono">LangGraph State Machine</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
          <div className="p-3 bg-[#151b24] border-l-2 border-l-[#c5a059] border-y border-r border-[#263140] rounded-r">
            <div className="font-mono text-[#c5a059] text-[11px] font-semibold">M-CONCIERGE-01 (Triage)</div>
            <div className="text-stone-300 font-medium my-0.5">Maison Concierge Agent</div>
            <div className="text-[10px] text-stone-400">Model: Gemini 3.1 Pro (routed via Gemini 3.1 Flash Lite)</div>
            <div className="text-[11px] text-stone-300 mt-2">
              Analyzes emotional nuance, luxury intent, and initiates project state.
            </div>
          </div>

          <div className="p-3 bg-[#151b24] border-l-2 border-l-sky-400 border-y border-r border-[#263140] rounded-r">
            <div className="font-mono text-sky-400 text-[11px] font-semibold">M-ARCHITECT-02 (Engineering)</div>
            <div className="text-stone-300 font-medium my-0.5">Bespoke Spec &amp; CAD Agent</div>
            <div className="text-[10px] text-stone-400">Model: Gemini 3.1 Pro Preview</div>
            <div className="text-[11px] text-stone-300 mt-2">
              Retrieves stone densities, calculates live/dead loads, audits crane hoisting envelopes.
            </div>
          </div>

          <div className="p-3 bg-[#151b24] border-l-2 border-l-emerald-400 border-y border-r border-[#263140] rounded-r">
            <div className="font-mono text-emerald-400 text-[11px] font-semibold">M-ORCHESTRATOR-03 (Revenue)</div>
            <div className="text-stone-300 font-medium my-0.5">VIP Lead &amp; CRM Agent</div>
            <div className="text-[10px] text-stone-400">Model: Gemini 3.1 Flash</div>
            <div className="text-[11px] text-stone-300 mt-2">
              Enriches architectural firm dossier, scores BANT 0-100, assigns HubSpot deal stage.
            </div>
          </div>

          <div className="p-3 bg-[#151b24] border-l-2 border-l-purple-400 border-y border-r border-[#263140] rounded-r">
            <div className="font-mono text-purple-400 text-[11px] font-semibold">M-VISUAL-04 (Creative)</div>
            <div className="text-stone-300 font-medium my-0.5">Generative Visual Atelier</div>
            <div className="text-[10px] text-stone-400">Model: FLUX.1 Pro / Imagen 3</div>
            <div className="text-[11px] text-stone-300 mt-2">
              Compiles photographic diffusion prompts capturing marble veining &amp; ambient daylighting.
            </div>
          </div>

          <div className="p-3 bg-[#151b24] border-l-2 border-l-amber-400 border-y border-r border-[#263140] rounded-r">
            <div className="font-mono text-amber-400 text-[11px] font-semibold">M-EDITORIAL-05 (Prestige)</div>
            <div className="text-stone-300 font-medium my-0.5">Editorial SEO &amp; Social</div>
            <div className="text-[10px] text-stone-400">Model: Gemini 3.1 Pro Preview</div>
            <div className="text-[11px] text-stone-300 mt-2">
              Turns finished commissions into architectural case studies and luxury SEO clusters.
            </div>
          </div>

          <div className="p-3 bg-[#151b24] border-l-2 border-l-rose-400 border-y border-r border-[#263140] rounded-r">
            <div className="font-mono text-rose-400 text-[11px] font-semibold">M-EXECUTIVE-06 (Yield)</div>
            <div className="text-stone-300 font-medium my-0.5">Executive Intelligence Agent</div>
            <div className="text-[10px] text-stone-400">Model: Gemini 3.1 Pro Preview</div>
            <div className="text-[11px] text-stone-300 mt-2">
              Monitors quarry block yield, artisan bench hours, backlog velocity, and gross margins.
            </div>
          </div>
        </div>

        <div className="p-3 bg-[#131720] border border-[#232b36] rounded text-[11px] font-mono text-stone-300">
          <span className="text-[#c5a059] font-bold">STATE SCHEMA TRANSITION:</span> Inbound &rarr; [Triage: M-CONCIERGE] &rarr; [Spec Engine: M-ARCHITECT + RAG] &rarr; [CRM Scoring: M-ORCHESTRATOR] &rarr; {`{ Condition: FloorLoad > 400 || Price > $15k }`} &rarr; <span className="text-amber-300 font-bold">AWAITING_ARTISAN_SIGN_OFF</span> &rarr; Outbound WhatsApp &amp; Invoicing.
        </div>
      </div>
    );
  }

  if (type === 'workflow-sequence') {
    return (
      <div className="my-6 p-5 bg-[#0f141c] text-stone-100 rounded-lg border border-[#263140] shadow-sm font-sans">
        <div className="flex items-center justify-between pb-3 border-b border-[#232c39] mb-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">
              FIGURE 3.1: Chronological End-to-End Sequence Diagram (Customer Inquiry to Follow-Up)
            </span>
          </div>
          <span className="text-[11px] text-stone-400 font-mono">Real-time Trace · 7 Key Stages</span>
        </div>

        <div className="space-y-3 text-xs">
          <div className="flex items-start gap-3 p-2.5 bg-[#141a24] rounded border border-[#232c3a]">
            <div className="w-7 h-7 rounded-full bg-[#c5a059] text-stone-950 font-bold flex items-center justify-center text-xs shrink-0">
              1
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-stone-200">Inbound Customer Inquiry</span>
                <span className="text-[10px] font-mono text-[#c5a059]">T = 0ms · WhatsApp Cloud API</span>
              </div>
              <p className="text-stone-400 text-[11px] mt-0.5">
                Interior architect sends inquiry regarding a custom 1950mm Carrara marble bath for an alpine chalet. Signature verified via HMAC SHA-256.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 bg-[#141a24] rounded border border-[#232c3a]">
            <div className="w-7 h-7 rounded-full bg-sky-500 text-stone-950 font-bold flex items-center justify-center text-xs shrink-0">
              2
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-stone-200">Concierge Triage &amp; Intent Parsing</span>
                <span className="text-[10px] font-mono text-sky-400">T + 420ms · Gemini 3.1 Flash Lite</span>
              </div>
              <p className="text-stone-400 text-[11px] mt-0.5">
                Language detected (French/English). Intent classified as <code className="text-stone-200 bg-[#0c1017] px-1 py-0.5 rounded">custom_dimension_and_load_viability</code>. Session initialized in Redis.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 bg-[#141a24] rounded border border-[#232c3a]">
            <div className="w-7 h-7 rounded-full bg-emerald-500 text-stone-950 font-bold flex items-center justify-center text-xs shrink-0">
              3
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-stone-200">Dual-Tier RAG &amp; Structural Calculations</span>
                <span className="text-[10px] font-mono text-emerald-400">T + 1,200ms · Qdrant + Spec Agent</span>
              </div>
              <p className="text-stone-400 text-[11px] mt-0.5">
                Retrieves Carrara density (2,690 kg/m³). Computes custom filled wet weight (1,287 kg) and floor load (<strong className="text-amber-300">733 kg/m²</strong>). Triggers structural warning advisory.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 bg-[#141a24] rounded border border-[#232c3a]">
            <div className="w-7 h-7 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center text-xs shrink-0">
              4
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-stone-200">VIP Lead Enrichment &amp; CRM Deal Creation</span>
                <span className="text-[10px] font-mono text-purple-400">T + 2,100ms · HubSpot API + Clearbit</span>
              </div>
              <p className="text-stone-400 text-[11px] mt-0.5">
                Lead scored 96/100 (Platinum VIP). Deal created in HubSpot pipeline: <span className="text-stone-200 italic">&ldquo;Studio V Gstaad Chalet - $44,500 Est.&rdquo;</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 bg-[#1c181f] rounded border border-amber-500/40">
            <div className="w-7 h-7 rounded-full bg-amber-400 text-stone-950 font-bold flex items-center justify-center text-xs shrink-0">
              5
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-amber-300">HITL Gate: Master Mason Sign-Off</span>
                <span className="text-[10px] font-mono text-amber-400">T + 2,500ms · Slack Alert #atelier-approvals</span>
              </div>
              <p className="text-stone-300 text-[11px] mt-0.5">
                Automated dispatch paused due to custom dimension and structural load &gt; 400 kg/m². Master Mason reviews CAD preview and approves with engineering rider.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 bg-[#141a24] rounded border border-[#232c3a]">
            <div className="w-7 h-7 rounded-full bg-[#c5a059] text-stone-950 font-bold flex items-center justify-center text-xs shrink-0">
              6
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-stone-200">Approved Concierge WhatsApp Dispatch</span>
                <span className="text-[10px] font-mono text-[#c5a059]">Post-Sign-Off · WhatsApp Cloud API</span>
              </div>
              <p className="text-stone-400 text-[11px] mt-0.5">
                Client receives exquisite tailored response with production timeline (16 weeks), engineering warning, and PDF CAD cut-sheet.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 bg-[#141a24] rounded border border-[#232c3a]">
            <div className="w-7 h-7 rounded-full bg-stone-700 text-stone-200 font-bold flex items-center justify-center text-xs shrink-0">
              7
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-stone-200">Autonomous Value-Add Follow-Up Sequence</span>
                <span className="text-[10px] font-mono text-stone-400">Day 3 &amp; Day 7 · Temporal Scheduled Workflow</span>
              </div>
              <p className="text-stone-400 text-[11px] mt-0.5">
                If unread after 72 hours, CRM agent evaluates engagement and sends a polite quarry block preview update without being intrusive.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'rag-pipeline') {
    return (
      <div className="my-6 p-5 bg-[#0f141c] text-stone-100 rounded-lg border border-[#263140] shadow-sm font-sans">
        <div className="flex items-center justify-between pb-3 border-b border-[#232c39] mb-4">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">
              FIGURE 4.1: Dual-Tier RAG Architecture &amp; Hybrid Vector Indexing
            </span>
          </div>
          <span className="text-[11px] text-stone-400 font-mono">Dense + Sparse Hybrid RRF</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs mb-3">
          <div className="p-3 bg-[#151c27] rounded border border-[#263548]">
            <div className="text-[10px] font-mono text-[#c5a059] uppercase tracking-wider mb-1">Step 1: Ingestion</div>
            <div className="font-medium text-stone-200 mb-1">CAD &amp; Material PDFs</div>
            <p className="text-[11px] text-stone-400">
              Multimodal parsing preserves tables, formulas, and 2D CAD sectional elevations without splitting.
            </p>
          </div>

          <div className="p-3 bg-[#151c27] rounded border border-[#263548]">
            <div className="text-[10px] font-mono text-sky-400 uppercase tracking-wider mb-1">Step 2: Embeddings</div>
            <div className="font-medium text-stone-200 mb-1">text-embedding-004</div>
            <p className="text-[11px] text-stone-400">
              Generates 768-dimensional dense vectors paired with BM25 sparse lexical tokens for exact model codes.
            </p>
          </div>

          <div className="p-3 bg-[#151c27] rounded border border-[#263548]">
            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1">Step 3: Retrieval</div>
            <div className="font-medium text-stone-200 mb-1">Qdrant Hybrid Engine</div>
            <p className="text-[11px] text-stone-400">
              Reciprocal Rank Fusion merges conceptual semantic matches with strict alphanumeric part lookups.
            </p>
          </div>

          <div className="p-3 bg-[#151c27] rounded border border-[#263548]">
            <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider mb-1">Step 4: Reranking</div>
            <div className="font-medium text-stone-200 mb-1">Cohere Rerank 3.5</div>
            <p className="text-[11px] text-stone-400">
              Cross-encoder reranks top 25 chunks down to 5 high-precision facts passed to the Spec Agent.
            </p>
          </div>
        </div>

        <div className="bg-[#0b0e14] p-3 rounded border border-[#1f2835] text-[11px] font-mono text-stone-400">
          <span className="text-emerald-400">Index Partitioning:</span> Tier 1 (Engineering &amp; Physics: 142 chunks) · Tier 2 (Quarry &amp; Pricing: 64 chunks) · Tier 3 (Client Trade History: 280 records).
        </div>
      </div>
    );
  }

  if (type === 'hitl-matrix') {
    return (
      <div className="my-6 p-5 bg-[#0f141c] text-stone-100 rounded-lg border border-[#263140] shadow-sm font-sans">
        <div className="flex items-center justify-between pb-3 border-b border-[#232c39] mb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">
              FIGURE 5.1: Multi-Tier Guardrail Gateway &amp; HITL Approval Gates
            </span>
          </div>
          <span className="text-[11px] text-stone-400 font-mono">Zero-Hallucination Policy</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-[#161b24] border border-[#263140] rounded">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] mb-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Stage 1: Input Guardrails
            </div>
            <ul className="text-[11px] text-stone-300 space-y-1">
              <li>• NeMo Guardrails injection filter</li>
              <li>• Presidio PII tokenization (GDPR)</li>
              <li>• Malicious prompt deflection</li>
            </ul>
          </div>

          <div className="p-3 bg-[#161b24] border border-[#263140] rounded">
            <div className="flex items-center gap-1.5 text-sky-400 font-mono text-[11px] mb-1 font-semibold">
              <Cpu className="w-3.5 h-3.5" /> Stage 2: Dual LLM Audit
            </div>
            <ul className="text-[11px] text-stone-300 space-y-1">
              <li>• Primary Agent generation</li>
              <li>• Critic LLM cross-checks RAG facts</li>
              <li>• Deterministic code execution for math</li>
            </ul>
          </div>

          <div className="p-3 bg-[#161b24] border border-[#263140] rounded">
            <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[11px] mb-1 font-semibold">
              <AlertTriangle className="w-3.5 h-3.5" /> Stage 3: HITL Thresholds
            </div>
            <ul className="text-[11px] text-stone-300 space-y-1">
              <li>• Hard stop if Quote &gt; $15,000</li>
              <li>• Hard stop if Floor Load &gt; 400 kg/m²</li>
              <li>• Master Mason sign-off mandatory</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
