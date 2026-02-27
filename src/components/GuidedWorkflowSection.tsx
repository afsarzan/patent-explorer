import { useState } from 'react';
import { Lightbulb, Shield, Building2, Radar, ArrowRight, HelpCircle, X, Search, SlidersHorizontal, FileDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface WorkflowConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  icon: React.ReactNode;
  bullets: string[];
  gradient: string;
  iconBg: string;
}

const workflows: WorkflowConfig[] = [
  {
    id: 'novelty',
    title: 'Novelty / Prior-Art Search',
    subtitle: 'Check if your idea is already patented.',
    description: 'Describe your invention in plain English (1–2 sentences) and we\'ll find the closest existing patents across all technology domains.',
    ctaLabel: 'Start Novelty Search',
    icon: <Lightbulb className="w-6 h-6" />,
    bullets: ['Ranked list of closest prior art', 'Broad semantic search across all years'],
    gradient: 'from-amber-500/15 to-orange-500/10',
    iconBg: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  },
  {
    id: 'fto',
    title: 'Freedom-to-Operate Snapshot',
    subtitle: 'See if you can safely launch in your market.',
    description: 'Enter your product name, target countries, and planned launch year. We\'ll filter by jurisdiction, active status, and recent filings.',
    ctaLabel: 'Run FTO Check',
    icon: <Shield className="w-6 h-6" />,
    bullets: ['Active patents in your target market', 'Filtered by jurisdiction & legal status'],
    gradient: 'from-emerald-500/15 to-teal-500/10',
    iconBg: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  },
  {
    id: 'competitor',
    title: 'Competitor Portfolio Overview',
    subtitle: 'Analyze a company\'s patent activity.',
    description: 'Enter a company or assignee name and an optional technology keyword. We\'ll surface their filing volume, top categories, and trends.',
    ctaLabel: 'View Portfolio',
    icon: <Building2 className="w-6 h-6" />,
    bullets: ['Top owners and filing trends', 'Technology category breakdown'],
    gradient: 'from-blue-500/15 to-indigo-500/10',
    iconBg: 'bg-blue-500/15 text-blue-600 dark:text-blue-400',
  },
  {
    id: 'landscape',
    title: 'Technology Landscape Explorer',
    subtitle: 'Map the patent landscape for a technology.',
    description: 'Enter a technology or topic keyword (e.g., "solid-state battery", "LLM inference optimization") to explore charts and trend analytics.',
    ctaLabel: 'Explore Landscape',
    icon: <Radar className="w-6 h-6" />,
    bullets: ['Visual landscape maps & charts', 'Year-over-year filing trend analysis'],
    gradient: 'from-violet-500/15 to-purple-500/10',
    iconBg: 'bg-violet-500/15 text-violet-600 dark:text-violet-400',
  },
];

const helpSteps = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: 'Input',
    description: 'Describe your goal—an invention idea, a product, a competitor name, or a technology topic.',
  },
  {
    icon: <SlidersHorizontal className="w-8 h-8 text-primary" />,
    title: 'Search & Filter',
    description: 'We configure the right filters (date range, jurisdiction, assignee, status) and run the search for you.',
  },
  {
    icon: <FileDown className="w-8 h-8 text-primary" />,
    title: 'Review & Export',
    description: 'Browse ranked results, explore analytics charts, and export your findings.',
  },
];

interface GuidedWorkflowSectionProps {
  onSearch: (query: string) => void;
}

export function GuidedWorkflowSection({ onSearch }: GuidedWorkflowSectionProps) {
  const [helpOpen, setHelpOpen] = useState(false);

  const handleWorkflowClick = (workflow: WorkflowConfig) => {
    const queryMap: Record<string, string> = {
      novelty: 'artificial intelligence',
      fto: 'electric vehicle battery',
      competitor: 'Samsung',
      landscape: 'machine learning',
    };
    onSearch(queryMap[workflow.id] || workflow.title);
  };

  return (
    <section className="space-y-8 animate-slide-up">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Guided Search Workflows
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Choose a workflow that matches your goal and we'll configure the search for you.
        </p>
      </div>

      {/* Workflow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {workflows.map((wf) => (
          <Card
            key={wf.id}
            className="group relative border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Gradient accent top bar */}
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${wf.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

            <CardContent className="p-6 flex flex-col h-full">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${wf.iconBg}`}>
                {wf.icon}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base font-semibold text-foreground mb-1">{wf.title}</h3>
              <p className="text-sm text-muted-foreground font-medium mb-3">{wf.subtitle}</p>

              {/* Description */}
              <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4 flex-1">
                {wf.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-1.5 mb-5">
                {wf.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1 w-1 h-1 rounded-full bg-primary shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={() => handleWorkflowClick(wf)}
                className="w-full group/btn"
                variant="outline"
                size="sm"
              >
                {wf.ctaLabel}
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Help Link */}
      <div className="text-center">
        <button
          onClick={() => setHelpOpen(true)}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <HelpCircle className="w-4 h-4" />
          New to patent search? View example workflows
        </button>
      </div>

      {/* Help Modal */}
      <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>How a Patent Search Works</DialogTitle>
            <DialogDescription>
              Three simple steps from idea to insight.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-6 py-4">
            {helpSteps.map((step, i) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center relative">
                  {step.icon}
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
