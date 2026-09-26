'use client';

import React, { useState } from 'react';
import { 
  SYSTEM_TOPOLOGY_NODES 
} from '@/lib/document-data';
import { SYSTEM_AGENTS } from '@/lib/knowledge-base-mock';
import { 
  Workflow, 
  Cpu, 
  Database, 
  ShieldCheck, 
  MessageSquare, 
  Server, 
  ExternalLink, 
  ChevronRight,
  Sparkles,
  Lock,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function ArchitectureCanvas() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-council');

  const nodes = [
    {
      id: 'node-ingress',
      title: 'Omnichannel Ingress & Edge',
      category: 'Ingress & Security',
      tech: 'Meta WhatsApp Cloud API · Cloudflare WAF · Next.js 15 Edge',
      status: 'Active',
      latency: '< 50ms',
      description: 'Terminates webhook payloads from WhatsApp, Instagram DM, website concierge, and trade portals. Validates HMAC SHA-256 signatures, applies rate limiting, strips malicious injection tokens, and pushes authenticated events to the stream.',
      inputs: ['Inbound WhatsApp Message', 'Website Chat Inquiries', 'Trade RFQ Customizer'],
      outputs: ['Sanitized Envelope Payload', 'Session Correlation UID', 'Edge Metric Logs'],
      codeSnippet: `POST /api/webhooks/whatsapp HTTP/1.1
X-Hub-Signature-256: sha256=d6b2c...
Content-Type: application/json

{
  "object": "whatsapp_business_account",
  "entry": [{
    "changes": [{
      "value": {
        "messages": [{
          "from": "+41791234567",
          "text": { "body": "Looking for custom 1950mm Carrara bath..." }
        }]
      }
    }]
  }]
}`
    },
    {
      id: 'node-eventbus',
      title: 'Durable Orchestrator & State Bus',
      category: 'Workflow Orchestration',
      tech: 'Temporal.io · Redis Streams · LangGraph State Machine',
      status: 'Active',
      latency: '< 15ms',
      description: 'Manages the stateful lifecycle of every luxury commission across hours or multi-day artisan review cycles. Provides exactly-once message semantics, idempotency deduplication, and safe pause-and-resume execution checkpoints for human approvals.',
      inputs: ['Sanitized Inbound Events', 'Agent State Transitions', 'Artisan Approval Webhooks'],
      outputs: ['State Graph Checkpoints', 'Dead Letter Queue Retries', 'Agent Step Invocations'],
      codeSnippet: `interface AtelierProjectState {
  inquiry_id: string;
  client_profile: ClientDossier;
  specifications: BathtubEngineeringSpec;
  commercials: QuoteMilestoneBreakdown;
  hitl_approvals: {
    stonemason_signed: boolean;
    director_signed: boolean;
  };
  current_stage: 'TRIAGE' | 'RAG_AUDIT' | 'HITL_GATE' | 'DISPATCH';
}`
    },
    {
      id: 'node-council',
      title: 'Autonomous Multi-Agent Council',
      category: 'Agentic Intelligence',
      tech: 'Google Gemini 3.1 Pro & Flash · FLUX.1 Pro · LangGraph DAG',
      status: 'Active',
      latency: '1.2s - 3.8s',
      description: 'Six specialized AI agents working collaboratively: Maison Concierge, Bespoke Spec & CAD, VIP Lead Scoring, Generative Visual Atelier, Editorial SEO, and Executive Yield Analyst. Each agent possesses bounded roles, dedicated toolsets, and strict guardrails.',
      inputs: ['Project State', 'RAG Retrieved Chunks', 'Trade Directory Context'],
      outputs: ['Drafted Communications', 'Calculated Floor Loads', 'Lead Scores', 'Diffusion Prompts'],
      codeSnippet: `// Multi-Agent Task Routing
const agentRouter = (state: AtelierProjectState) => {
  if (state.inquiry.requires_specs) return "M_ARCHITECT_AGENT";
  if (state.inquiry.requires_visuals) return "M_VISUAL_AGENT";
  if (state.inquiry.needs_scoring) return "M_LEAD_AGENT";
  return "M_CONCIERGE_AGENT";
};`
    },
    {
      id: 'node-rag',
      title: 'Dual-Tier Hybrid RAG Knowledge Engine',
      category: 'Knowledge & Vector Data',
      tech: 'Qdrant Vector DB · Google text-embedding-004 · BM25 Lexical · Cohere Rerank',
      status: 'Active',
      latency: '< 180ms',
      description: 'Combines dense semantic vector search (768-dim embeddings) with sparse BM25 lexical precision. Holds 340+ curated architectural cut-sheets, stone petrology tables, plumbing trap tolerances (EN 274), and quarry block reserve schedules.',
      inputs: ['Natural Language Spec Query', 'CAD Part Reference Codes'],
      outputs: ['Top-5 Reranked Engineering Chunks', 'Source Provenance Metadata', 'Deflection Limits'],
      codeSnippet: `// Hybrid RRF Query in Qdrant
const searchResults = await qdrant.query({
  collection: "atelier_engineering_v1",
  query: {
    hybrid: {
      dense: textEmbedding004(queryText),
      sparse: bm25Tokenize(queryText),
      fusion: "reciprocal_rank_fusion"
    }
  },
  filter: { must: [{ key: "material_class", match: { value: "stone_marble" } }] }
});`
    },
    {
      id: 'node-hitl',
      title: 'Human-in-the-Loop Gateway',
      category: 'Governance & Security',
      tech: 'NeMo Guardrails · Presidio PII Masking · Slack & WhatsApp HITL Bots',
      status: 'Enforced',
      latency: 'Human Dependent',
      description: 'Non-negotiable safety membrane. Autonomous message dispatch is paused if: quote value exceeds $15,000, calculated floor load exceeds 400 kg/m², custom carving length deviates > 100mm, or VIP celebrity tone is detected.',
      inputs: ['Agent Drafts', 'Calculated Risk Vector', 'Threshold Breaches'],
      outputs: ['Artisan Cryptographic Signature', 'Modified Pricing Overrides', 'Approved Dispatch'],
      codeSnippet: `if (floorLoadKgM2 > 400 || quoteTotalUSD > 15000) {
  await triggerHumanReview({
    approvers: ["master_stonemason", "private_client_director"],
    channel: "slack_vip_alerts",
    payload: { quoteId, floorLoadKgM2, customDimensions }
  });
  return state.pauseUntilApproved();
}`
    },
    {
      id: 'node-enterprise',
      title: 'Enterprise Action & Sync Mesh',
      category: 'Execution & Dispatch',
      tech: 'HubSpot Enterprise · Stripe Billing · Meta Graph API · Sanity CMS',
      status: 'Active',
      latency: '< 650ms',
      description: 'Executes verified real-world business actions: provisions deals and pipeline stages in HubSpot, creates 50% quarry deposit milestone invoices via Stripe, dispatches approved WhatsApp concierge messages, and syndicates architectural case studies.',
      inputs: ['Approved Concierge Responses', 'CRM Deal Payloads', 'Deposit Milestones'],
      outputs: ['Customer WhatsApp Dispatches', 'HubSpot Deal Records', 'Stripe Invoice URLs'],
      codeSnippet: `await hubspot.crm.deals.basicApi.create({
  properties: {
    dealname: "Studio V - Gstaad Chalet Bespoke Lunaria",
    pipeline: "atelier_private_commissions",
    amount: "44500",
    dealstage: "spec_review_hitl_pending",
    client_jurisdiction: "Switzerland"
  }
});`
    }
  ];

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[2];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-stone-100">
      {/* Title */}
      <div className="mb-6">
        <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-widest">
          Interactive Architecture Canvas · Topology Map
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-100 font-medium mt-1">
          Atelier Baignoire System Topology &amp; Component Mesh
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-3xl">
          Click any component node in the visual pipeline below to inspect its underlying technology stack, latency SLAs, input/output schemas, security controls, and code snippets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive Visual Graph (Left 7 Cols) */}
        <div className="lg:col-span-7 bg-[#12161f] border border-[#242d3c] rounded-lg p-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#202735] mb-4 text-xs">
            <span className="font-mono text-stone-400">System Flow: Ingress &rarr; State &rarr; Agents &rarr; RAG &rarr; HITL &rarr; Enterprise</span>
            <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> All Systems Operational
            </span>
          </div>

          {/* Nodes Stack */}
          <div className="space-y-3.5">
            {nodes.map((node, index) => {
              const isSelected = node.id === selectedNodeId;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-4 rounded-md border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#1b222d] border-[#c5a059] shadow-md ring-1 ring-[#c5a059]/40'
                      : 'bg-[#151a23] border-[#252f3f] hover:border-stone-500 hover:bg-[#181e28]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded flex items-center justify-center text-xs font-mono font-bold ${
                        isSelected ? 'bg-[#c5a059] text-stone-950' : 'bg-[#202735] text-stone-300'
                      }`}>
                        0{index + 1}
                      </div>
                      <div>
                        <div className="text-xs font-mono text-[#c5a059] uppercase tracking-wider">
                          {node.category}
                        </div>
                        <div className="text-sm font-semibold text-stone-100 font-serif">
                          {node.title}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono text-stone-400 hidden sm:inline">
                        {node.latency}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#c5a059] translate-x-1' : 'text-stone-500'}`} />
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-stone-400 line-clamp-1">
                    {node.tech}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Flow Hint */}
          <div className="mt-5 p-3 rounded bg-[#0d1017] border border-[#1f2633] text-[11px] text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#c5a059]" /> Zero-data training agreement with enterprise model vendors.
            </span>
            <span className="text-[#c5a059] font-mono">SOC 2 Type II Compliant</span>
          </div>
        </div>

        {/* Selected Component Inspector Drawer (Right 5 Cols) */}
        <div className="lg:col-span-5 bg-[#12161f] border border-[#242d3c] rounded-lg p-5 flex flex-col">
          <div className="pb-3 border-b border-[#202735] mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#c5a059]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-200">
                Component Inspector
              </span>
            </div>
            <span className="text-[10px] font-mono bg-[#1b222d] text-[#c5a059] border border-[#c5a059]/30 px-2 py-0.5 rounded">
              {selectedNode.category}
            </span>
          </div>

          <div className="flex-1 space-y-4 text-xs">
            <div>
              <h3 className="font-serif text-lg text-stone-100 font-medium">
                {selectedNode.title}
              </h3>
              <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                {selectedNode.description}
              </p>
            </div>

            <div className="p-3 bg-[#161c26] rounded border border-[#263140] space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-stone-400">Target Latency:</span>
                <span className="font-mono text-emerald-400 font-semibold">{selectedNode.latency}</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-stone-400">Core Technologies:</span>
                <span className="font-mono text-stone-200">{selectedNode.tech.split('·')[0]}</span>
              </div>
            </div>

            {/* In/Out */}
            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div className="p-2.5 bg-[#151b24] border border-[#252f3f] rounded">
                <div className="font-mono text-[#c5a059] font-medium mb-1">Inputs</div>
                <ul className="text-stone-300 space-y-1">
                  {selectedNode.inputs.map((inp, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-[#c5a059]">&rsaquo;</span> {inp}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-2.5 bg-[#151b24] border border-[#252f3f] rounded">
                <div className="font-mono text-sky-400 font-medium mb-1">Outputs</div>
                <ul className="text-stone-300 space-y-1">
                  {selectedNode.outputs.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-sky-400">&rsaquo;</span> {out}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Code / Payload Snippet */}
            <div>
              <div className="font-mono text-[11px] text-stone-400 mb-1.5 flex items-center justify-between">
                <span>Payload &amp; Code Implementation</span>
                <span className="text-[#c5a059]">TypeScript / JSON</span>
              </div>
              <pre className="p-3 bg-[#0a0d12] border border-[#1f2835] rounded font-mono text-[10px] text-stone-300 overflow-x-auto leading-relaxed">
                {selectedNode.codeSnippet}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
