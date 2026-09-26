'use client';

import React, { useState } from 'react';
import { 
  Code2, 
  Copy, 
  Check, 
  Webhook, 
  Send, 
  Layers, 
  CreditCard, 
  BarChart3,
  ShieldCheck
} from 'lucide-react';

const API_PAYLOADS = [
  {
    id: 'whatsapp-webhook',
    title: '1. Inbound Meta WhatsApp Cloud Webhook',
    category: 'Ingress',
    icon: Webhook,
    description: 'Received at /api/webhooks/whatsapp. Includes Meta HMAC SHA-256 signature in X-Hub-Signature-256 for edge verification.',
    json: {
      "object": "whatsapp_business_account",
      "entry": [
        {
          "id": "104928172901824",
          "changes": [
            {
              "value": {
                "messaging_product": "whatsapp",
                "metadata": {
                  "display_phone_number": "+33140502010",
                  "phone_number_id": "109827361524312"
                },
                "contacts": [
                  {
                    "profile": {
                      "name": "Marie-Claire Delacroix"
                    },
                    "wa_id": "41791234567"
                  }
                ],
                "messages": [
                  {
                    "from": "41791234567",
                    "id": "wamid.HBgLNDEzOTAxMjM0NTY3FQIAERgSMzEw...",
                    "timestamp": "1774597485",
                    "text": {
                      "body": "Bonjour. We are designing a master bathroom in a Gstaad chalet. Looking at your Lunaria Carrara monolithic bath, but our client wants it 1950mm long instead of standard 1850mm with aged brass overflow. Can you confirm if standard floor joists support this and lead time for October delivery?"
                    },
                    "type": "text"
                  }
                ]
              },
              "field": "messages"
            }
          ]
        }
      ]
    }
  },
  {
    id: 'langgraph-state',
    title: '2. LangGraph State Machine Checkpoint',
    category: 'Orchestration',
    icon: Layers,
    description: 'Durable state persisted across multi-day artisan sign-off cycles in Redis/Temporal.',
    json: {
      "correlation_id": "INQ-2026-CH-94821",
      "session_timestamp": "2026-09-26T00:44:45Z",
      "client": {
        "uid": "usr_mc_delacroix_gva",
        "name": "Marie-Claire Delacroix",
        "firm": "Studio V Interior Design (Geneva)",
        "ad100_status": true,
        "language_preference": "fr-CH",
        "lead_tier": "PLATINUM_VIP",
        "lead_score": 96
      },
      "engineering_spec": {
        "base_model": "luna-carrara",
        "material": "Bianco Carrara Extra Tuscan Marble",
        "standard_length_mm": 1850,
        "requested_length_mm": 1950,
        "custom_delta_percent": 5.4,
        "calculated_dry_weight_kg": 822,
        "water_capacity_liters": 365,
        "bather_allowance_kg": 100,
        "footprint_area_m2": 1.755,
        "floor_load_kg_m2": 733.3,
        "structural_warning_triggered": true,
        "code_standards": ["EN 274-1", "SIA 260 Swiss Standard"]
      },
      "commercials": {
        "base_model_price_usd": 38500,
        "bespoke_tooling_surcharge_usd": 6000,
        "aged_brass_overflow_usd": 1500,
        "estimated_total_usd": 46000,
        "trade_discount_percent": 15,
        "net_quote_usd": 39100,
        "production_lead_time_weeks": 16
      },
      "hitl_governance": {
        "required": true,
        "reason": "Floor load 733 kg/m2 exceeds standard joist limit (400 kg/m2); custom stone block length > 1850mm.",
        "pending_signoffs": ["master_stonemason", "private_client_director"],
        "lock_outbound_dispatch": true
      }
    }
  },
  {
    id: 'hubspot-deal',
    title: '3. HubSpot CRM Deal & Pipeline Sync',
    category: 'CRM API',
    icon: Send,
    description: 'Dispatched via HubSpot REST API to create tracked deal stages with custom atelier properties.',
    json: {
      "properties": {
        "dealname": "Studio V (Geneva) - Gstaad Chalet Bespoke Lunaria",
        "pipeline": "atelier_private_commissions",
        "dealstage": "bespoke_engineering_hitl_pending",
        "amount": "46000.00",
        "currency": "USD",
        "closedate": "2026-10-31T00:00:00Z",
        "hubspot_owner_id": "owner_laurent_de_vigny",
        "atelier_client_type": "Interior Architect",
        "atelier_product_family": "Monolithic Stone Baths",
        "atelier_floor_load_kg_m2": "733",
        "atelier_structural_flag": "Steel Joist Sistering Mandatory",
        "atelier_vip_lead_score": "96",
        "quarry_reservation_block_id": "CARRARA-EX-BLK-4089"
      }
    }
  },
  {
    id: 'slack-hitl-card',
    title: '4. Slack Master Mason HITL Approval Card',
    category: 'Governance',
    icon: ShieldCheck,
    description: 'Formatted interactive Block Kit payload dispatched to #atelier-approvals on Slack and WhatsApp.',
    json: {
      "channel": "C092837461",
      "text": "⚠️ HITL REQUIRED: Studio V Bespoke Lunaria (733 kg/m²)",
      "blocks": [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "Atelier Governance Gate · Bespoke Sign-Off"
          }
        },
        {
          "type": "section",
          "fields": [
            { "type": "mrkdwn", "text": "*Client:* Studio V Interior Design (Geneva)" },
            { "type": "mrkdwn", "text": "*Project:* Gstaad Alpine Chalet" },
            { "type": "mrkdwn", "text": "*Model:* Lunaria Carrara Monolith (1950mm Bespoke)" },
            { "type": "mrkdwn", "text": "*Estimated Floor Load:* *733 kg/m²* (⚠️ Deflection Risk)" },
            { "type": "mrkdwn", "text": "*Quoted Value:* $46,000 USD" },
            { "type": "mrkdwn", "text": "*Proposed Lead Time:* 16 Weeks (October)" }
          ]
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": { "type": "plain_text", "text": "Approve Spec with Structural Advisory" },
              "style": "primary",
              "value": "approve_with_advisory_INQ-94821"
            },
            {
              "type": "button",
              "text": { "type": "plain_text", "text": "Modify Dimensions / Lead Time" },
              "value": "modify_INQ-94821"
            },
            {
              "type": "button",
              "text": { "type": "plain_text", "text": "Request Private Director Call" },
              "style": "danger",
              "value": "escalate_director_INQ-94821"
            }
          ]
        }
      ]
    }
  },
  {
    id: 'stripe-invoice',
    title: '5. Stripe Milestone Invoice Payload',
    category: 'Financial ERP',
    icon: CreditCard,
    description: 'Stripe Billing payload generating 50% quarry deposit milestone before block extraction.',
    json: {
      "customer": "cus_9823471029",
      "collection_method": "send_invoice",
      "days_until_due": 7,
      "metadata": {
        "commission_id": "INQ-2026-CH-94821",
        "milestone_stage": "Stage 1: 50% Quarry Block Extraction & Tooling Deposit",
        "quarry_quarry_name": "Cave di Fantiscritti, Carrara"
      },
      "custom_fields": [
        { "name": "Bespoke Model", "value": "Lunaria 1950mm Carrara" },
        { "name": "Total Commission Value", "value": "$46,000.00 USD" },
        { "name": "Milestone Deposit (50%)", "value": "$23,000.00 USD" }
      ]
    }
  },
  {
    id: 'executive-yield',
    title: '6. Executive Intelligence Monday Briefing',
    category: 'Analytics',
    icon: BarChart3,
    description: 'Synthesized by Executive Yield Agent (M-EXECUTIVE-06) for Monday 8:00 AM CEO briefing.',
    json: {
      "report_period": "Week 38, September 2026",
      "executive_summary": "Weekly conversion velocity increased 22% driven by alpine ski chalet commissions in Switzerland and Austria. Quarry stone yield in Carrara holding at 84%.",
      "metrics": {
        "inbound_inquiries_total": 42,
        "qualified_vip_pipeline_value_usd": 684000,
        "average_commission_deal_size_usd": 38200,
        "artisan_bench_capacity_utilized_percent": 91,
        "lead_time_forecast_weeks": 16.5,
        "top_material_demand": "Carrara Extra Marble (54%), Moroccan Brass (28%), Hinoki (18%)"
      },
      "strategic_alerts": [
        "Workshop backlog reaching 18 weeks threshold. Recommend pausing open catalog promos to protect delivery punctuality."
      ]
    }
  }
];

export default function ApiPayloadViewer() {
  const [selectedPayloadId, setSelectedPayloadId] = useState(API_PAYLOADS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedPayload = API_PAYLOADS.find(p => p.id === selectedPayloadId) || API_PAYLOADS[0];

  const handleCopy = (jsonObj: object, id: string) => {
    navigator.clipboard.writeText(JSON.stringify(jsonObj, null, 2));
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-stone-100">
      {/* Title */}
      <div className="mb-6">
        <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-widest">
          Enterprise Integration Mesh · Webhooks &amp; Schemas
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-100 font-medium mt-1">
          Production APIs, Webhooks &amp; Event Payloads
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-3xl">
          Inspect the exact JSON envelopes and schemas that connect Meta WhatsApp Cloud, Temporal LangGraph state persistence, HubSpot CRM pipeline stages, and Slack Human-in-the-Loop decision cards.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Navigation (4 Cols) */}
        <div className="lg:col-span-4 bg-[#12161f] border border-[#242d3c] rounded-lg p-4 space-y-2">
          <div className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2 pb-2 border-b border-[#202735]">
            Integration Payloads &amp; Schemas
          </div>

          {API_PAYLOADS.map(payload => {
            const isSelected = payload.id === selectedPayloadId;
            const Icon = payload.icon;
            return (
              <button
                key={payload.id}
                onClick={() => setSelectedPayloadId(payload.id)}
                className={`w-full text-left p-3 rounded text-xs transition-all border flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#1a212e] border-[#c5a059] text-stone-100 shadow'
                    : 'bg-[#141922] border-[#222b39] text-stone-400 hover:text-stone-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#c5a059]' : 'text-stone-500'}`} />
                  <div>
                    <div className="font-semibold">{payload.title}</div>
                    <div className="text-[10px] font-mono text-stone-400">{payload.category}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Code Display (8 Cols) */}
        <div className="lg:col-span-8 bg-[#12161f] border border-[#242d3c] rounded-lg p-5 flex flex-col">
          <div className="flex items-start justify-between pb-3 border-b border-[#202735] mb-4">
            <div>
              <div className="text-[10px] font-mono text-[#c5a059] uppercase">
                {selectedPayload.category} Specification
              </div>
              <h3 className="font-serif text-lg text-stone-100 font-medium">
                {selectedPayload.title}
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                {selectedPayload.description}
              </p>
            </div>

            <button
              onClick={() => handleCopy(selectedPayload.json, selectedPayload.id)}
              className="px-3 py-1.5 rounded text-xs bg-[#1a2028] hover:bg-[#232b36] border border-[#343d4a] text-stone-300 transition-all flex items-center gap-1.5 font-mono shrink-0"
            >
              {copiedId === selectedPayload.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-400" />
                  <span>Copy JSON</span>
                </>
              )}
            </button>
          </div>

          <div className="flex-1 bg-[#090c10] border border-[#1e2634] rounded p-4 font-mono text-xs text-stone-200 overflow-x-auto leading-relaxed">
            <pre>{JSON.stringify(selectedPayload.json, null, 2)}</pre>
          </div>

          <div className="mt-3 pt-3 border-t border-[#1e2634] flex items-center justify-between text-[11px] text-stone-400 font-mono">
            <span>Validation: JSON Schema Draft-07 Compliant</span>
            <span className="text-[#c5a059]">TLS 1.3 Strict Mutual Verification</span>
          </div>
        </div>
      </div>
    </div>
  );
}
