import { useState, useCallback } from 'react';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { PatentTable } from '@/components/PatentTable';
import { EmptyState } from '@/components/EmptyState';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { StatsBar } from '@/components/StatsBar';
import { TopSearchesChart } from '@/components/TopSearchesChart';
import { searchPatents, Patent } from '@/lib/patentApi';

const Index = () => {
  const [patents, setPatents] = useState<Patent[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [searchTime, setSearchTime] = useState<number | undefined>();
  const [currentQuery, setCurrentQuery] = useState('');

  const handleSearch = useCallback(async (query: string) => {
    setIsLoading(true);
    setError(undefined);
    setCurrentQuery(query);
    const startTime = performance.now();

    try {
      const result = await searchPatents(query);
      const endTime = performance.now();
      setSearchTime((endTime - startTime) / 1000);

      if (result.error) {
        setError(result.error);
        setPatents([]);
        setTotal(0);
      } else {
        setPatents(result.patents);
        setTotal(result.total);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      setPatents([]);
      setTotal(0);
    } finally {
      setIsLoading(false);
      setHasSearched(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Patent Research Made{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Simple
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Search millions of patents from the USPTO database. Find innovations, prior art, and intellectual property insights instantly.
          </p>
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Charts Section - shown when no search has been performed */}
        {!hasSearched && !isLoading && (
          <div className="mb-12">
            <TopSearchesChart />
          </div>
        )}

        {/* Stats Bar */}
        {hasSearched && !isLoading && !error && patents.length > 0 && (
          <StatsBar total={total} searchTime={searchTime} query={currentQuery} />
        )}

        {/* Results Section */}
        <div className="mt-8">
          {isLoading ? (
            <LoadingSkeleton />
          ) : patents.length > 0 ? (
            <PatentTable patents={patents} total={total} />
          ) : (
            <EmptyState hasSearched={hasSearched} error={error} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Data provided by the{' '}
            <a 
              href="https://patentsview.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              USPTO PatentsView API
            </a>
            . For research and educational purposes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
