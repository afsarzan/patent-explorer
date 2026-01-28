import { FileText, Github } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-soft">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground leading-tight">PatentScope</h1>
            <p className="text-xs text-muted-foreground">Patent Research Tool</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden sm:block">
            Powered by USPTO PatentsView API
          </span>
        </div>
      </div>
    </header>
  );
}
