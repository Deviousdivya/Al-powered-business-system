import { BathtubProduct } from './types';

export const BATHTUB_CATALOG: BathtubProduct[] = [
  {
    id: 'luna-carrara',
    modelName: 'The Lunaria Monolith',
    series: 'Atelier Pietra Series',
    baseMaterial: 'Single-block Bianco Carrara Extra Marble (Quarried in Tuscany)',
    craftsmanshipTechnique: '5-Axis CNC rough carving followed by 180 hours of hand-chiseling, rasping, and micro-honing by Tuscan master stonemasons.',
    dimensions: '1850mm L × 900mm W × 620mm H',
    dryWeightKg: 780,
    waterCapacityLiters: 340,
    filledFloorLoadKgM2: 520,
    basePriceUSD: 38500,
    leadTimeWeeks: '14 - 18 weeks',
    customizationOptions: [
      'Vein-matched slab selection with high-res digital twins',
      'Integral overflow with carved stone escutcheon',
      'Subtle ergonomic lumbar contouring',
      'Custom exterior hammered or fluted texturing'
    ],
    architecturalConsiderations: 'Requires structural engineer review for residential floor deflection (L/720 standard). Freight delivery demands dedicated crane or reinforced freight elevator (minimum 1200kg capacity).'
  },
  {
    id: 'soleil-brass',
    modelName: 'Le Soleil Baignoire',
    series: 'Atelier Métal Antique',
    baseMaterial: '99.2% Pure Heavy-Gauge Moroccan Red Brass (3.5mm thick)',
    craftsmanshipTechnique: 'Cold-hammered over wooden forms by multi-generational metalsmiths in Fes; annealing cycles with wood fire; hand-rubbed wax finish.',
    dimensions: '1750mm L × 820mm W × 710mm H (Double Slipper)',
    dryWeightKg: 115,
    waterCapacityLiters: 290,
    filledFloorLoadKgM2: 240,
    basePriceUSD: 24900,
    leadTimeWeeks: '8 - 10 weeks',
    customizationOptions: [
      'Living antique bronze, brushed satin, or high-mirror mirror polish',
      'Exterior verdigris patina treatment',
      'Custom monogram crest hand-engraved onto rim',
      'Integral concealed air-jet hydrotherapy ring'
    ],
    architecturalConsiderations: 'Exceptional thermal conductivity; natural thermal insulation jacket recommended for prolonged soaking. Fits through standard 850mm interior doorways.'
  },
  {
    id: 'kyoto-hinoki',
    modelName: 'Sora Hinoki Ofuro',
    series: 'Kiso Forest Heritage Collection',
    baseMaterial: '300-Year-Old Sustainable Kiso Hinoki Cypress (Nagano Prefecture)',
    craftsmanshipTechnique: 'Traditional Ki-gumi joinery without metal screws; hand-planed with Japanese kanna planes; natural aromatic resin preservation.',
    dimensions: '1600mm L × 950mm W × 780mm H (Deep Soak Ergonomics)',
    dryWeightKg: 85,
    waterCapacityLiters: 360,
    filledFloorLoadKgM2: 260,
    basePriceUSD: 29500,
    leadTimeWeeks: '12 - 14 weeks',
    customizationOptions: [
      'Circular, oval, or square geometric proportions',
      'Custom integrated Hinoki headrest and matching step stool',
      'Thermostatic Japanese circulator & microbubble compatibility',
      'Custom charcoal-burnt Shou Sugi Ban exterior'
    ],
    architecturalConsiderations: 'Requires ambient humidity regulation (40-60%) to prevent drying and checking. Compatible with radiant heated floors provided a 15mm acoustic thermal gasket is installed.'
  },
  {
    id: 'volcan-noir',
    modelName: 'Montagne Volcanique Monolith',
    series: 'Haute Terre Collection',
    baseMaterial: 'Natural Basalt Lava Stone with volcanic silica quartz binding',
    craftsmanshipTechnique: 'Carved from volcanic ejecta monolith; flame-textured exterior with velvet-honed interior basin; ultra-dense heat retention matrix.',
    dimensions: '1900mm L × 920mm W × 600mm H',
    dryWeightKg: 690,
    waterCapacityLiters: 320,
    filledFloorLoadKgM2: 480,
    basePriceUSD: 34000,
    leadTimeWeeks: '12 - 16 weeks',
    customizationOptions: [
      'Raw broken chisel edge or seamless honed rim',
      'Integrated brass overflow channel',
      'Concealed RGB fiber-optic perimeter illumination pocket',
      'Custom matched freestanding stone vanity basins'
    ],
    architecturalConsiderations: 'Exceptional heat retention (loses < 1°C per 45 minutes). Requires subfloor joist sistering or concrete slab placement.'
  }
];

export const KNOWLEDGE_BASE_SECTIONS = [
  {
    id: 'kb-materials',
    title: '1. Materials Science & Geological Provenance',
    summary: 'Technical specifications, thermal coefficients, porosity indices, and ethical sourcing certifications.',
    chunksCount: 142,
    vectorStoreIndex: 'atelier_materials_v2',
    sampleQuestions: [
      'What is the thermal drop rate of the Lunaria marble vs the Soleil brass?',
      'Can Bianco Carrara tubs be installed on heated radiant floors?',
      'What natural oils or sealants protect untreated polished brass from water spotting?'
    ]
  },
  {
    id: 'kb-architectural',
    title: '2. Structural Engineering & MEP Guidelines',
    summary: 'Floor dead/live load calculations, plumbing waste standards (EN 274 / ASME A112.18.2), hoisting and rigging envelopes.',
    chunksCount: 88,
    vectorStoreIndex: 'atelier_engineering_v1',
    sampleQuestions: [
      'What structural point load must an architect engineer for a 780kg dry weight marble tub filled with 340L of water and a 90kg bather?',
      'What crane rigging spreader bar dimensions are needed for high-rise penthouse balcony delivery?',
      'Can the waste outlet be relocated 120mm off-center to accommodate existing floor beams?'
    ]
  },
  {
    id: 'kb-pricing-rules',
    title: '3. Pricing Matrices & Artisan Lead Times',
    summary: 'Base costs, bespoke tooling surcharges, freight tariffs (CIF/DAP Incoterms), and quarry scheduling availability.',
    chunksCount: 64,
    vectorStoreIndex: 'atelier_commercial_v3',
    sampleQuestions: [
      'What is the markup and lead time impact for custom vein-matched bookmatching?',
      'What trade discount applies to registered members of the American Society of Interior Designers (ASID) or BIID?',
      'What deposit milestone structure is required for orders exceeding $30,000?'
    ]
  },
  {
    id: 'kb-care-warranty',
    title: '4. White-Glove Care & 25-Year Master Warranty',
    summary: 'Cleaning chemistry protocols (pH neutral restrictions), scratch restoration kits, and lifetime structural guarantees.',
    chunksCount: 52,
    vectorStoreIndex: 'atelier_service_v1',
    sampleQuestions: [
      'What cleaning agents are strictly forbidden on honed volcanic stone?',
      'How does the maison handle accidental acid etching on Carrara marble?',
      'What are the terms of the 25-year structural artisan warranty?'
    ]
  }
];

export const SYSTEM_AGENTS = [
  {
    id: 'agent-concierge',
    name: 'Maison Concierge Agent',
    codename: 'M-CONCIERGE-01',
    model: 'Gemini 3.1 Pro Preview (with Gemini 3.1 Flash Lite for routing)',
    role: 'First-touch luxury brand representative across WhatsApp Cloud API, Instagram DM, and bespoke web chat.',
    primaryResponsibilities: [
      'Inbound sentiment & intent classification within 450ms',
      'Tone-matched communication in French, English, Arabic, and Mandarin',
      'Eliciting project scope: residential penthouse, superyacht, luxury boutique hotel',
      'Immediate qualification triage and routing to specialist agents'
    ],
    keyTools: ['WhatsApp Cloud Webhook Bridge', 'Omnichannel Ingress Parser', 'Brand Voice Prompt Filter'],
    guardrails: [
      'Strict prohibition against quoting hard discounts or unapproved delivery dates',
      'Never reveal raw wholesale artisan workshop labor margins',
      'Polite deflection of non-luxury enquiries (e.g. mass-market fiberglass tubs) with graceful referrals'
    ],
    humanReviewTrigger: 'VIP celebrity clients, contentious tone, or requests for bespoke non-standard materials outside catalog.'
  },
  {
    id: 'agent-spec',
    name: 'Bespoke Architectural & Spec Agent',
    codename: 'M-ARCHITECT-02',
    model: 'Gemini 3.1 Pro Preview',
    role: 'Technical co-pilot for interior designers, architects, and private clients.',
    primaryResponsibilities: [
      'Extracting dimensional constraints, floor loading limitations, and MEP plumbing specs',
      'Querying Vector DB (Qdrant) for material compatibility, weight formulas, and crane rigging envelopes',
      'Calculating combined floor load: (Dry Weight + Water Volume in Liters + 100kg bather) / Footprint m²',
      'Drafting technical architectural cut sheets and DWG/BIM metadata payloads'
    ],
    keyTools: ['Structural Load Calculator Tool', 'Qdrant RAG Retriever', 'BIM/CAD Spec Formatter'],
    guardrails: [
      'Mandatory warning flag if calculated floor load exceeds 400 kg/m² for wooden joists',
      'Refuse to approve un-trapped plumbing connections or unverified floor loads without structural sign-off'
    ],
    humanReviewTrigger: 'Any custom dimensional modification > 15% from master mold, or floor load > 500 kg/m².'
  },
  {
    id: 'agent-lead',
    name: 'VIP Lead Qualification & CRM Agent',
    codename: 'M-ORCHESTRATOR-03',
    model: 'Gemini 3.1 Flash',
    role: 'Autonomous revenue intelligence, BANT/MEDDPICC scoring, and CRM synchronizer.',
    primaryResponsibilities: [
      'Enriching lead dossiers via Clearbit/Apollo API (Architect firm size, project budget, geolocation)',
      'Scoring lead quality from 0 to 100 based on budget, project timeline, and decision-maker status',
      'Generating and synchronizing deals in HubSpot / Salesforce with automated stage tracking',
      'Generating custom task notifications in Slack/Teams for Private Client Directors'
    ],
    keyTools: ['HubSpot CRM API', 'Lead Enrichment Webhook', 'Slack VIP Alert Webhook'],
    guardrails: [
      'Strict PII masking and tokenization before external CRM sync',
      'GDPR/CCPA compliant data minimization (retention capped at 90 days for non-converted leads)'
    ],
    humanReviewTrigger: 'Leads scoring > 85 (Platinum VIP) or projects with batch orders > 3 tubs.'
  },
  {
    id: 'agent-visual',
    name: 'Generative Visual Atelier Agent',
    codename: 'M-VISUAL-04',
    model: 'FLUX.1 Pro / Imagen 3 + Gemini 3.1 Flash Prompt Optimizer',
    role: 'Transforms architectural descriptions and client moodboards into high-fidelity photorealistic bathroom visualizations.',
    primaryResponsibilities: [
      'Deconstructing client interior aesthetic (e.g., Japandi, Brutalist, French Haussmannian, Minimalist Alpine)',
      'Engineering ultra-precise architectural diffusion prompts specifying marble veining, brass reflectivity, natural daylighting, and micro-textures',
      'Generating 4K renders of the bespoke bathtub situated in the client’s envisioned space within 12 seconds',
      'Compiling visual presentation lookbooks sent via WhatsApp or high-resolution PDF download link'
    ],
    keyTools: ['FLUX.1 Diffusion Engine', 'Imagen 3 API', 'Image CDN Asset Host', 'PDF Lookbook Compiler'],
    guardrails: [
      'Ensure bathtub geometry accurately reflects achievable physical craftsmanship (no impossible floating overhangs)',
      'Watermark all AI renders with "Atelier Concept Visualization • Handcrafted to Order"'
    ],
    humanReviewTrigger: 'Commercial catalogue use or client disputes regarding rendered color vs quarry stone sample.'
  },
  {
    id: 'agent-editorial',
    name: 'Editorial SEO & Social Media Agent',
    codename: 'M-EDITORIAL-05',
    model: 'Gemini 3.1 Pro Preview',
    role: 'Cultivates the maison’s organic prestige, Pinterest visual authority, Instagram storytelling, and luxury SEO domination.',
    primaryResponsibilities: [
      'Transforming completed bespoke commissions into architectural case studies and design journal articles',
      'Extracting high-intent luxury search keywords ("carved marble soaking tub cost", "hand hammered brass bath interior designer")',
      'Automating Pinterest rich pin syndication and Instagram luxury carousel copy with hashtag intelligence',
      'Monitoring brand sentiment and press mentions across architectural digests (AD, Elle Decor, Wallpaper*)'
    ],
    keyTools: ['Meta Graph API (Instagram)', 'Pinterest Business API', 'CMS Direct Publishing (Sanity/WordPress)', 'SEO Rank Tracker API'],
    guardrails: [
      'No cringe promotional marketing slogans; maintain understated, quiet luxury editorial tone',
      'Strict client privacy compliance (never tag private client estates without explicit written release)'
    ],
    humanReviewTrigger: 'All public social media posts and editorial journal releases require approval from the Brand Communications Director.'
  },
  {
    id: 'agent-executive',
    name: 'Executive Intelligence & Yield Agent',
    codename: 'M-EXECUTIVE-06',
    model: 'Gemini 3.1 Pro Preview',
    role: 'Autonomous business analyst delivering weekly executive briefing memos, lead velocity diagnostics, and workshop capacity planning.',
    primaryResponsibilities: [
      'Aggregating weekly funnel metrics: Inbound inquiries, lead conversion velocity, average deal size ($32.4k)',
      'Analyzing quarry stone yield and artisan workshop backlog (preventing over-promising lead times)',
      'Identifying emerging regional demand clusters (e.g. surge in chalet projects in Saint-Moritz and Aspen)',
      'Drafting executive board synthesis memos and automated Monday 8:00 AM dispatch'
    ],
    keyTools: ['Stripe/QuickBooks ERP API', 'HubSpot Analytics Engine', 'Workshop Queue Database', 'Executive PDF Digest Generator'],
    guardrails: [
      'Read-only financial access; cannot modify ledger entries or pricing tables directly',
      'Flag operational anomalies when artisan backlog exceeds 20 weeks'
    ],
    humanReviewTrigger: 'Any forecasted drop in gross margin below 58% or capacity breach triggers CEO emergency alert.'
  }
];
