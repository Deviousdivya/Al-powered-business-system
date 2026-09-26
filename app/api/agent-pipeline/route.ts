import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { BATHTUB_CATALOG } from '@/lib/knowledge-base-mock';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { inquiryText, clientName, clientType, location } = body;

    const effectiveName = clientName || 'Anonymous Architect';
    const effectiveInquiry = inquiryText || 'We are looking for a bespoke carved marble bathtub for an alpine chalet in Gstaad, 1950mm long, with brass overflow.';
    const effectiveType = clientType || 'Interior Architect';
    const effectiveLocation = location || 'Geneva / Gstaad';

    let geminiGeneratedAnalysis: string | null = null;

    if (process.env.GEMINI_API_KEY) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const prompt = `You are the master orchestration AI for 'Atelier Baignoire', a world-renowned French atelier crafting bespoke handmade luxury bathtubs ($25k-$60k each).
Client Name: ${effectiveName}
Client Type: ${effectiveType}
Location: ${effectiveLocation}
Inbound Inquiry: "${effectiveInquiry}"

Product Catalog Context:
${JSON.stringify(BATHTUB_CATALOG, null, 2)}

Provide a structured JSON output with:
1. "sentiment_and_tone": Brief assessment of luxury client tone and intent.
2. "structural_calculations": Estimated dry weight, filled water load, floor load per m2, and engineering warning flag if load > 450 kg/m2.
3. "lead_score": Integer 0-100 and rationale based on project scale and budget tier.
4. "human_approval_required": Boolean and reason (e.g. custom dimensions, quote > $15k, floor load > 400kg/m2).
5. "visual_diffusion_prompt": Ultra-detailed photorealistic prompt for Midjourney / FLUX.1 Pro showing the custom bath in an architect-designed luxury bathroom.
6. "vip_whatsapp_response": Impeccably polite, aristocratic, technically rigorous response in French/English suitable for an elite atelier concierge.

Respond ONLY with valid JSON.`;

        const response = await ai.models.generateContent({
          model: 'gemini-flash-latest',
          contents: prompt,
          config: {
            responseMimeType: 'application/json'
          }
        });

        if (response.text) {
          geminiGeneratedAnalysis = response.text;
        }
      } catch (err) {
        console.warn('Gemini API call failed or rate-limited; falling back to deterministic luxury agent engine.', err);
      }
    }

    // Parse or build high-fidelity domain response
    let parsedAI: Record<string, unknown> | null = null;
    if (geminiGeneratedAnalysis) {
      try {
        parsedAI = JSON.parse(geminiGeneratedAnalysis);
      } catch {
        parsedAI = null;
      }
    }

    // Deterministic domain calculations
    const isCustomLength = /19\d\d|20\d\d|custom|bespoke|longer|wider|oval/i.test(effectiveInquiry);
    const mentionsMarble = /marble|carrara|viola|stone|nero/i.test(effectiveInquiry);
    const mentionsBrass = /brass|copper|soleil|metal/i.test(effectiveInquiry);
    const mentionsHinoki = /hinoki|wood|japan|ofuro/i.test(effectiveInquiry);

    const estDryWeight = mentionsMarble ? (isCustomLength ? 820 : 780) : mentionsBrass ? 115 : mentionsHinoki ? 90 : 690;
    const estWaterLiters = isCustomLength ? 365 : 340;
    const totalFilledWeightKg = estDryWeight + estWaterLiters + 100; // 100kg bather
    const footprintM2 = isCustomLength ? 1.76 : 1.66;
    const calculatedFloorLoad = Math.round(totalFilledWeightKg / footprintM2);
    const requiresFloorReinforcement = calculatedFloorLoad > 400;

    const baseQuoteValue = mentionsMarble ? (isCustomLength ? 44500 : 38500) : mentionsBrass ? 26800 : mentionsHinoki ? 31000 : 36000;
    const leadScoreValue = effectiveType === 'Interior Architect' || effectiveType === 'Luxury Hotelier' ? 94 : 86;

    const responsePayload = {
      inquiry: effectiveInquiry,
      customerProfile: {
        name: effectiveName,
        channel: 'WhatsApp Cloud API',
        clientType: effectiveType,
        budgetIndication: `$${(baseQuoteValue).toLocaleString()} USD + White-Glove Rigging`,
        location: effectiveLocation
      },
      agentSteps: [
        {
          agentId: 'agent-concierge',
          agentName: 'Maison Concierge Agent (M-CONCIERGE-01)',
          reasoning: 'Analyzed inbound message syntax. Tone classified as High-Intent Architectural Trade. Extracted dimensional inquiry, material affinity, and project geography.',
          ragSourcesUsed: ['atelier_brand_voice_v3.pdf', 'multilingual_etiquette_rules.json'],
          actionTaken: 'Routed to Bespoke Architectural & Spec Agent; initiated session state UID-9482.',
          outputSnippet: `Language: English/French diplomatic tone | Intent: Custom Dimension + Structural Viability | Sentiment Score: 0.96`
        },
        {
          agentId: 'agent-spec',
          agentName: 'Bespoke Architectural & Spec Agent (M-ARCHITECT-02)',
          reasoning: `Queried Qdrant collection 'atelier_engineering_v1'. Calculated dry weight (${estDryWeight} kg) + water volume (${estWaterLiters} L) + bather load. Derived floor loading of ${calculatedFloorLoad} kg/m². Evaluated structural code EN 274 and joist deflection.`,
          ragSourcesUsed: ['lunaria_carrara_cad_v4.dwg', 'quarry_block_density_constants.json', 'structural_joist_deflection_matrix.pdf'],
          actionTaken: `Flagged structural advisory: ${requiresFloorReinforcement ? 'CRITICAL - Floor load exceeds 400 kg/m²; steel joist sistering required.' : 'COMPLIANT - Standard reinforced slab acceptable.'}`,
          outputSnippet: `Dimensions: ${isCustomLength ? '1950mm × 900mm (Custom +100mm)' : '1850mm × 900mm Standard'} | Floor Load: ${calculatedFloorLoad} kg/m² | Weight Wet: ${totalFilledWeightKg} kg`
        },
        {
          agentId: 'agent-lead',
          agentName: 'VIP Lead Qualification & CRM Agent (M-ORCHESTRATOR-03)',
          reasoning: 'Enriched domain via Clearbit. Cross-referenced architectural firm credentials. Assigned BANT score based on budget match ($40k+) and Q4 construction timeline.',
          ragSourcesUsed: ['hubspot_deal_stages_v2', 'asid_trade_directory_2026'],
          actionTaken: 'Provisioned Deal in HubSpot Enterprise; generated preliminary deposit milestone invoice ($50% quarry deposit).',
          outputSnippet: `Lead Score: ${leadScoreValue}/100 (Platinum VIP) | Deal Stage: Bespoke Specification Draft | Est. Value: $${baseQuoteValue.toLocaleString()}`
        },
        {
          agentId: 'agent-visual',
          agentName: 'Generative Visual Atelier Agent (M-VISUAL-04)',
          reasoning: 'Synthesized architectural moodboard parameters: alpine chalet sanctuary, honed Carrara marble, warm raked timber, soft diffused mountain light.',
          ragSourcesUsed: ['atelier_lookbook_lighting_presets.json'],
          actionTaken: 'Compiled photorealistic diffusion prompt for FLUX.1 Pro / Imagen 3 concept rendering.',
          outputSnippet: parsedAI?.visual_diffusion_prompt
            ? String(parsedAI.visual_diffusion_prompt)
            : `Editorial architectural photography by Vincent Van Duysen and Peter Zumthor. A bespoke monolithic ${mentionsMarble ? 'Bianco Carrara Extra marble' : 'cold-hammered brass'} freestanding bathtub, hand-carved with soft sculptural contours, positioned beside a floor-to-ceiling glass wall overlooking snowy alpine peaks in Gstaad. Warm concealed linear cove lighting, fluted larch wood walls, honed granite flooring, antique unlacquered brass floor-standing tapware with subtle water stream, steam caressing the surface, quiet luxury, 8k resolution, photorealistic, 35mm lens.`
        }
      ],
      leadScoring: {
        score: leadScoreValue,
        tier: leadScoreValue >= 90 ? 'Platinum Tier 1 (VIP)' : 'Gold Tier 2',
        rationale: `High commercial intent confirmed. Client represents ${effectiveType} with active project in ${effectiveLocation}. Estimated transaction value > $${(baseQuoteValue).toLocaleString()}.`,
        estimatedDealValue: `$${baseQuoteValue.toLocaleString()} USD`
      },
      humanInTheLoop: {
        triggered: true,
        reason: isCustomLength || requiresFloorReinforcement
          ? `Bespoke dimensional carving (+100mm) and high floor load (${calculatedFloorLoad} kg/m²) require Master Stonemason & Structural Engineer sign-off.`
          : 'High-ticket quote exceeding $15,000 threshold requires Private Client Director authorization.',
        approverRole: 'Master Stonemason & Director of Private Commissions',
        escalationChannel: 'Slack #vip-atelier-approvals & Director WhatsApp Dispatch'
      },
      whatsappDraft: parsedAI?.vip_whatsapp_response
        ? String(parsedAI.vip_whatsapp_response)
        : `Chère ${effectiveName},\n\nThank you for presenting your vision to Atelier Baignoire. The bespoke ${mentionsMarble ? 'Lunaria Monolith' : 'Atelier Bathtub'} sculpted to custom 1950mm proportions is an exquisite choice for your alpine sanctuary in ${effectiveLocation}.\n\nOur Master Stonemasons in Tuscany can accommodate this commission within our autumn quarry block schedule (14 to 16 weeks craft duration). Because this piece is hand-carved from a single contiguous block of stone, the filled water weight will reach approximately ${totalFilledWeightKg.toLocaleString()} kg (${calculatedFloorLoad} kg/m²).\n\nWe recommend reviewing the subfloor joist bearing with your structural engineer. I have attached the preliminary CAD engineering sheet and quarry vein preview.\n\nOur Private Client Director, Monsieur Laurent de Vigny, would be delighted to arrange a private stone block inspection or coordinate directly with your architectural team.\n\nAvec nos sentiments les plus distingués,\nAtelier Baignoire Concierge`,
      crmPayload: {
        crm_deal_id: 'DEAL-2026-AB-9821',
        deal_name: `${effectiveName} - ${effectiveLocation} Bespoke Bath`,
        deal_stage: 'spec_review_hitl_pending',
        pipeline: 'Atelier Private Commissions',
        amount_usd: baseQuoteValue,
        custom_fields: {
          product_series: mentionsMarble ? 'Lunaria Monolith' : mentionsBrass ? 'Le Soleil Brass' : 'Sora Hinoki',
          dimensions: isCustomLength ? '1950mm x 900mm x 620mm' : '1850mm x 900mm x 620mm',
          calculated_floor_load_kg_m2: calculatedFloorLoad,
          hitl_status: 'Awaiting_Master_Mason_Signature',
          vip_lead_score: leadScoreValue,
          client_jurisdiction: effectiveLocation
        }
      },
      visualPromptSpec: parsedAI?.visual_diffusion_prompt
        ? String(parsedAI.visual_diffusion_prompt)
        : `Photorealistic architectural interior of a private alpine master bath in Gstaad. In the center, a 1950mm custom carved Bianco Carrara marble monolithic bathtub with subtle grey veining and an unlacquered brushed brass overflow. Floor-to-ceiling glass reveals snow-covered pine trees and morning mist. Honed limestone flooring, warm cedar wall slats, diffused 2700k indirect warm lighting, architectural digest style, cinematic composition.`
    };

    return NextResponse.json(responsePayload);
  } catch (error) {
    console.error('Error in agent-pipeline:', error);
    return NextResponse.json(
      { error: 'Failed to process agent pipeline simulation' },
      { status: 500 }
    );
  }
}
