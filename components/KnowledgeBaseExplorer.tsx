'use client';

import React, { useState } from 'react';
import { 
  BATHTUB_CATALOG, 
  KNOWLEDGE_BASE_SECTIONS 
} from '@/lib/knowledge-base-mock';
import { 
  Database, 
  Calculator, 
  Layers, 
  AlertTriangle, 
  CheckCircle, 
  FileText, 
  Scale, 
  Sparkles,
  Search
} from 'lucide-react';

export default function KnowledgeBaseExplorer() {
  const [selectedProduct, setSelectedProduct] = useState(BATHTUB_CATALOG[0]);
  const [customLengthMm, setCustomLengthMm] = useState<number>(1850);
  const [batherWeightKg, setBatherWeightKg] = useState<number>(85);
  const [searchQuery, setSearchQuery] = useState('');

  // Live structural floor load math
  const lengthFactor = customLengthMm / 1850;
  const scaledDryWeight = Math.round(selectedProduct.dryWeightKg * lengthFactor);
  const scaledWaterVolume = Math.round(selectedProduct.waterCapacityLiters * lengthFactor);
  const totalWetWeight = scaledDryWeight + scaledWaterVolume + batherWeightKg;
  
  // Approximate footprint area (L mm * 900mm)
  const footprintM2 = (customLengthMm / 1000) * 0.90;
  const floorLoadKgM2 = Math.round(totalWetWeight / footprintM2);
  const isFloorLoadCritical = floorLoadKgM2 > 400;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-stone-100">
      {/* Title */}
      <div className="mb-6">
        <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-widest">
          Deterministic Data &amp; Vector Indexing · RAG Engine
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-100 font-medium mt-1">
          Atelier Knowledge Base &amp; Structural Engineering Matrix
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-3xl">
          Explore the tiered knowledge repository that anchors our AI agents against hallucinations: from material densities and EN 274 plumbing codes, to live structural floor-joist calculation formulas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Product Specs & Structural Calculator (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Bathtub Selector Tabs */}
          <div className="bg-[#12161f] border border-[#242d3c] rounded-lg p-4">
            <div className="text-xs font-mono text-[#c5a059] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Select Atelier Master Model
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {BATHTUB_CATALOG.map(p => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedProduct(p);
                    setCustomLengthMm(parseInt(p.dimensions.split('mm')[0]) || 1850);
                  }}
                  className={`p-2.5 rounded text-left border transition-all text-xs ${
                    selectedProduct.id === p.id
                      ? 'bg-[#1b222f] border-[#c5a059] text-stone-100 shadow'
                      : 'bg-[#141922] border-[#222b39] text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className="font-serif font-semibold truncate">{p.modelName}</div>
                  <div className="text-[10px] text-[#c5a059] font-mono mt-0.5">${p.basePriceUSD.toLocaleString()}</div>
                </button>
              ))}
            </div>

            {/* Selected Product Card */}
            <div className="mt-4 pt-4 border-t border-[#202735] space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg text-stone-100 font-medium">{selectedProduct.modelName}</h3>
                  <div className="text-stone-400 text-[11px] font-mono">{selectedProduct.series}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm font-semibold text-[#c5a059]">${selectedProduct.basePriceUSD.toLocaleString()} USD</div>
                  <div className="text-[10px] text-stone-400 font-mono">Lead Time: {selectedProduct.leadTimeWeeks}</div>
                </div>
              </div>

              <div className="p-3 bg-[#0d1017] rounded border border-[#1f2633] space-y-2">
                <div>
                  <span className="font-mono text-stone-400 text-[10px] uppercase">Base Material &amp; Provenance:</span>
                  <p className="text-stone-200 mt-0.5">{selectedProduct.baseMaterial}</p>
                </div>
                <div>
                  <span className="font-mono text-stone-400 text-[10px] uppercase">Artisan Technique:</span>
                  <p className="text-stone-300 mt-0.5">{selectedProduct.craftsmanshipTechnique}</p>
                </div>
              </div>

              {/* Architectural Advisory */}
              <div className="p-3 bg-[#171a17] border border-[#c5a059]/40 rounded text-[11px] text-stone-300">
                <div className="font-semibold text-[#c5a059] font-serif mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Architectural Engineering Considerations
                </div>
                <p className="leading-relaxed">{selectedProduct.architecturalConsiderations}</p>
              </div>
            </div>
          </div>

          {/* Interactive Structural Live Load Calculator */}
          <div className="bg-[#12161f] border border-[#242d3c] rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#202735]">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#c5a059]" />
                <span className="font-serif text-sm font-semibold text-stone-200">
                  Real-Time Floor Joist Load &amp; Weight Simulator
                </span>
              </div>
              <span className="text-[10px] font-mono text-stone-400">Spec Agent Algorithm</span>
            </div>

            <p className="text-xs text-stone-400">
              The Bespoke Spec Agent runs this exact formula to protect architectural integrity. When floor loading exceeds 400 kg/m², an automated structural warning is raised.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-stone-300 font-mono text-[11px] mb-1">
                  Custom Length: <strong className="text-[#c5a059]">{customLengthMm} mm</strong>
                </label>
                <input
                  type="range"
                  min={1500}
                  max={2200}
                  step={25}
                  value={customLengthMm}
                  onChange={e => setCustomLengthMm(Number(e.target.value))}
                  className="w-full accent-[#c5a059]"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono mt-1">
                  <span>1500mm</span>
                  <span>1850mm (Std)</span>
                  <span>2200mm</span>
                </div>
              </div>

              <div>
                <label className="block text-stone-300 font-mono text-[11px] mb-1">
                  Bather Weight: <strong className="text-[#c5a059]">{batherWeightKg} kg</strong>
                </label>
                <input
                  type="range"
                  min={50}
                  max={160}
                  step={5}
                  value={batherWeightKg}
                  onChange={e => setBatherWeightKg(Number(e.target.value))}
                  className="w-full accent-[#c5a059]"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono mt-1">
                  <span>50kg</span>
                  <span>85kg</span>
                  <span>160kg</span>
                </div>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center text-xs">
              <div className="p-2 bg-[#0c1017] rounded border border-[#1f2735]">
                <div className="text-[10px] text-stone-400 font-mono">Dry Weight</div>
                <div className="font-semibold text-stone-200 mt-0.5">{scaledDryWeight} kg</div>
              </div>
              <div className="p-2 bg-[#0c1017] rounded border border-[#1f2735]">
                <div className="text-[10px] text-stone-400 font-mono">Water Capacity</div>
                <div className="font-semibold text-stone-200 mt-0.5">{scaledWaterVolume} L</div>
              </div>
              <div className="p-2 bg-[#0c1017] rounded border border-[#1f2735]">
                <div className="text-[10px] text-stone-400 font-mono">Total Wet Load</div>
                <div className="font-semibold text-stone-200 mt-0.5">{totalWetWeight} kg</div>
              </div>
              <div className={`p-2 rounded border ${isFloorLoadCritical ? 'bg-[#22181a] border-rose-500/50 text-rose-300' : 'bg-[#15201a] border-emerald-500/50 text-emerald-300'}`}>
                <div className="text-[10px] font-mono">Floor Live Load</div>
                <div className="font-semibold mt-0.5">{floorLoadKgM2} kg/m²</div>
              </div>
            </div>

            {/* Warning Banner */}
            {isFloorLoadCritical ? (
              <div className="p-3 bg-[#24171a] border border-rose-500/50 rounded flex items-start gap-2.5 text-xs text-rose-200">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Structural Advisory Triggered ({floorLoadKgM2} kg/m² &gt; 400 kg/m² Limit):</strong>
                  <p className="text-[11px] text-stone-300 mt-0.5">
                    Standard residential timber joists (350-450 kg/m²) will experience unacceptable deflection. Architectural subfloor steel sistering or concrete slab placement is mandatory.
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-2.5 bg-[#142018] border border-emerald-500/40 rounded flex items-center gap-2 text-xs text-emerald-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Floor load ({floorLoadKgM2} kg/m²) is within standard residential building code tolerances.</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Knowledge Base Collections & Vector Explorer (5 Cols) */}
        <div className="lg:col-span-5 bg-[#12161f] border border-[#242d3c] rounded-lg p-5 flex flex-col space-y-4">
          <div className="pb-3 border-b border-[#202735] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-[#c5a059]" />
              <span className="font-serif text-sm font-semibold text-stone-200">
                Qdrant Vector Collections
              </span>
            </div>
            <span className="text-[10px] font-mono bg-[#161c26] text-stone-400 px-2 py-0.5 rounded border border-[#252f3f]">
              text-embedding-004
            </span>
          </div>

          <p className="text-xs text-stone-400">
            Partitioned vector store indexes queried via Hybrid Reciprocal Rank Fusion (RRF) with Cohere Rerank 3.5.
          </p>

          <div className="space-y-3 flex-1">
            {KNOWLEDGE_BASE_SECTIONS.map(section => (
              <div
                key={section.id}
                className="p-3 bg-[#151a24] border border-[#242d3d] rounded text-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold text-stone-200">
                    {section.title}
                  </span>
                  <span className="text-[10px] font-mono text-[#c5a059] bg-[#0c1017] px-2 py-0.5 rounded border border-[#1f2835]">
                    {section.chunksCount} chunks
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 leading-normal">
                  {section.summary}
                </p>

                <div className="pt-1">
                  <div className="text-[10px] font-mono text-stone-500 uppercase mb-1">
                    Index: <span className="text-stone-300">{section.vectorStoreIndex}</span>
                  </div>
                  <div className="text-[10px] text-stone-400 space-y-0.5">
                    <span className="text-[#c5a059] font-mono block">Sample RAG Queries:</span>
                    {section.sampleQuestions.slice(0, 2).map((q, i) => (
                      <div key={i} className="text-stone-300 italic truncate">
                        &bull; &ldquo;{q}&rdquo;
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#0d1017] rounded border border-[#1f2835] text-[11px] text-stone-400 font-mono">
            <span className="text-emerald-400">Index Sync Worker:</span> Auto-invalidates upon ERP quarry lead-time updates within 90s.
          </div>
        </div>
      </div>
    </div>
  );
}
