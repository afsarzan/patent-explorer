import { FileSearch, Lightbulb } from 'lucide-react';

interface EmptyStateProps {
  hasSearched: boolean;
  error?: string;
}

export function EmptyState({ hasSearched, error }: EmptyStateProps) {
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
          <FileSearch className="h-10 w-10 text-destructive" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Search Error</h3>
        <p className="text-muted-foreground text-center max-w-md">
          {error}
        </p>
      </div>
    );
  }

  if (hasSearched) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
          <FileSearch className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No Patents Found</h3>
        <p className="text-muted-foreground text-center max-w-md">
          We couldn't find any patents matching your search. Try different keywords or a broader topic.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center mb-6 shadow-elevated">
        <Lightbulb className="h-10 w-10 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">Start Your Research</h3>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        Enter a topic, technology, or keyword to discover relevant patents from the USPTO database.
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {['artificial intelligence', 'blockchain', 'solar energy', 'medical devices', 'autonomous vehicles'].map((suggestion) => (
          <span
            key={suggestion}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
          >
            {suggestion}
          </span>
        ))}
      </div>
    </div>
  );
}
