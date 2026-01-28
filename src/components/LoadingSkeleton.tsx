import { Skeleton } from '@/components/ui/skeleton';

export function LoadingSkeleton() {
  return (
    <div className="w-full animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-5 w-32" />
        </div>
        <Skeleton className="h-10 w-40" />
      </div>

      <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="p-4 bg-muted/50 border-b border-border">
          <div className="flex gap-4">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-64" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-16" />
          </div>
        </div>
        
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="p-4 border-b border-border last:border-0"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex gap-4 items-start">
              <Skeleton className="h-5 w-24 shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <Skeleton className="h-5 w-32 shrink-0" />
              <Skeleton className="h-5 w-32 shrink-0" />
              <Skeleton className="h-5 w-24 shrink-0" />
              <Skeleton className="h-8 w-8 rounded shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
