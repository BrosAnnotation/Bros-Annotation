import { Users, Target, TrendingUp, UserRound } from 'lucide-react';

const cards = [
  {
    icon: Users,
    title: 'Human-Centered',
    desc: 'Human expertise at the core of every annotation and evaluation workflow.',
  },
  {
    icon: Target,
    title: 'Quality First',
    desc: 'Structured guidelines and quality checks help maintain consistent results.',
  },
  {
    icon: TrendingUp,
    title: 'Built to Scale',
    desc: 'Flexible workflows designed to support growing AI data requirements.',
  },
  {
    icon: UserRound,
    title: 'Devansh Sharma',
    desc: 'Founder of Bros Annotation, focused on building reliable AI data annotation and evaluation solutions.',
  },
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <div className="max-w-3xl mx-auto mb-14 text-center reveal">
          <div className="badge text-accent-soft border-accent/30 mb-4">
            About Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
            About Bros Annotation: AI Data & Human Feedback
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Bros Annotation bridges the gap between AI models and human
            intelligence. We provide structured, high-quality human feedback and
            data services that help companies train, evaluate, and improve
            modern AI systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`glass-card p-7 reveal reveal-delay-${i + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
                <card.icon className="text-primary-soft" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
