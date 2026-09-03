const capabilities = [
  'CVAT',
  'Bounding Boxes',
  'Polygons',
  'Segmentation',
  'Object Tracking',
  'Image Classification',
  'Video Annotation',
   'Text Annotation',
  'NLP Annotation',
  'LLM Evaluation',
  'RLHF',
  'AI Safety',
  'Human Preference Ranking',
  'Multimodal Annotation',
  'Data Quality Assurance',
];

export function AnnotationExpertise() {
  return (
    <section className="section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="reveal text-center">
          <div className="badge text-primary-soft border-primary/30 mb-4">
            Annotation Expertise
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
            AI Data Annotation Expertise & Tools
          </h2>
          <p className="text-text-muted leading-relaxed mb-8">
            Bros Annotation supports end-to-end AI data annotation and evaluation
            workflows, including CVAT-based image and video annotation, bounding
            boxes, polygons, segmentation, object tracking, NLP annotation, LLM
            evaluation, RLHF, AI safety, and human preference ranking.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-text bg-surface/50 border border-border backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Right: annotation interface mockup */}
        <div className="reveal reveal-delay-2">
          <AnnotationMockup />
        </div>
      </div>
    </section>
  );
}

function AnnotationMockup() {
  return (
    <div className="glass-card p-4 rounded-2xl">
      {/* Toolbar */}
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs font-mono text-text-dim">cvat — annotation_workspace.mp4</span>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative rounded-xl overflow-hidden bg-bg-soft aspect-video">
        {/* Background placeholder image-like gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #1a1f2e 0%, #0f1320 50%, #1a1f2e 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 40%, #3b82f6 0%, transparent 40%), radial-gradient(circle at 70% 60%, #8b5cf6 0%, transparent 40%)',
          }}
        />

        {/* Bounding boxes */}
        <div className="absolute top-[15%] left-[10%] w-[35%] h-[40%] border-2 border-primary-soft rounded">
          <div className="absolute -top-6 left-0 px-2 py-0.5 bg-primary-soft text-bg text-xs font-mono rounded-t">
            person 0.98
          </div>
        </div>
        <div className="absolute top-[55%] right-[8%] w-[28%] h-[30%] border-2 border-accent-soft rounded">
          <div className="absolute -top-6 left-0 px-2 py-0.5 bg-accent-soft text-bg text-xs font-mono rounded-t">
            vehicle 0.95
          </div>
        </div>
        <div className="absolute bottom-[8%] left-[30%] w-[20%] h-[18%] border-2 border-cyan rounded">
          <div className="absolute -top-6 left-0 px-2 py-0.5 bg-cyan text-bg text-xs font-mono rounded-t">
            object 0.91
          </div>
        </div>

        {/* Polygon hint */}
        <svg className="absolute top-[20%] right-[20%] w-[80px] h-[60px]">
          <polygon
            points="10,10 70,20 60,50 20,45"
            fill="rgba(34,211,238,0.1)"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeDasharray="3 3"
          />
        </svg>
      </div>

      {/* Bottom toolbar */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
        <div className="flex gap-2">
          {['box', 'polygon', 'track', 'tag'].map((tool) => (
            <div
              key={tool}
              className="px-2.5 py-1 rounded text-xs font-mono text-text-dim bg-surface-2 border border-border"
            >
              {tool}
            </div>
          ))}
        </div>
        <span className="text-xs font-mono text-text-dim">frame 247 / 1200</span>
      </div>
    </div>
  );
}
