export interface AgentDefinition {
  id: string;
  name: string;
  codename: string;
  model: string;
  role: string;
  primaryResponsibilities: string[];
  keyTools: string[];
  guardrails: string[];
  humanReviewTrigger: string;
}

export interface SystemComponent {
  id: string;
  category: 'Ingress' | 'Orchestration' | 'Agent Core' | 'Data & RAG' | 'Enterprise Integrations' | 'Governance & HITL';
  title: string;
  technology: string;
  description: string;
  latency: string;
  securityControls: string[];
  inputs: string[];
  outputs: string[];
}

export interface WorkflowStep {
  stepNumber: number;
  stageName: string;
  actor: string;
  action: string;
  inputData: string;
  outputArtifact: string;
  latencyTarget: string;
  humanApprovalRequired: boolean;
  humanApprovalDetails?: string;
  fallbackStrategy: string;
}

export interface BathtubProduct {
  id: string;
  modelName: string;
  series: string;
  baseMaterial: string;
  craftsmanshipTechnique: string;
  dimensions: string;
  dryWeightKg: number;
  waterCapacityLiters: number;
  filledFloorLoadKgM2: number;
  basePriceUSD: number;
  leadTimeWeeks: string;
  customizationOptions: string[];
  architecturalConsiderations: string;
}

export interface SimulationResult {
  inquiry: string;
  customerProfile: {
    name: string;
    channel: string;
    clientType: 'Private VIP' | 'Interior Architect' | 'Yacht Outfitter' | 'Luxury Hotelier';
    budgetIndication: string;
    location: string;
  };
  agentSteps: {
    agentId: string;
    agentName: string;
    reasoning: string;
    ragSourcesUsed: string[];
    actionTaken: string;
    outputSnippet: string;
  }[];
  leadScoring: {
    score: number; // 0 - 100
    tier: 'Platinum Tier 1 (VIP)' | 'Gold Tier 2' | 'Standard Tier 3' | 'Disqualified';
    rationale: string;
    estimatedDealValue: string;
  };
  humanInTheLoop: {
    triggered: boolean;
    reason: string;
    approverRole: string;
    escalationChannel: string;
  };
  whatsappDraft: string;
  crmPayload: Record<string, unknown>;
  visualPromptSpec: string;
}
