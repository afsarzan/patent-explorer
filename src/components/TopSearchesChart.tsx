import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Treemap } from 'recharts';
import { Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const topSearchCategories = [
  { name: 'Artificial Intelligence', patents: 18420, growth: '+24%' },
  { name: 'Electric Vehicles', patents: 14350, growth: '+31%' },
  { name: 'Blockchain', patents: 11200, growth: '+18%' },
  { name: 'CRISPR / Gene Editing', patents: 9870, growth: '+22%' },
  { name: '5G / 6G Telecom', patents: 8900, growth: '+15%' },
  { name: 'Quantum Computing', patents: 7650, growth: '+42%' },
  { name: 'Autonomous Drones', patents: 6200, growth: '+28%' },
  { name: 'Renewable Energy', patents: 5800, growth: '+19%' },
];

const technologyDistribution = [
  { name: 'Software & AI', value: 35 },
  { name: 'Biotech & Pharma', value: 22 },
  { name: 'Electronics', value: 18 },
  { name: 'Clean Energy', value: 14 },
  { name: 'Materials Science', value: 11 },
];

const COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--accent))',
  'hsl(210, 70%, 55%)',
  'hsl(170, 60%, 45%)',
  'hsl(280, 50%, 55%)',
];

const topAssignees = [
  { name: 'Samsung', patents: 8760, country: '🇰🇷' },
  { name: 'IBM', patents: 7450, country: '🇺🇸' },
  { name: 'Apple', patents: 6320, country: '🇺🇸' },
  { name: 'Qualcomm', patents: 5890, country: '🇺🇸' },
  { name: 'Google', patents: 5420, country: '🇺🇸' },
  { name: 'Microsoft', patents: 5100, country: '🇺🇸' },
  { name: 'Huawei', patents: 4870, country: '🇨🇳' },
  { name: 'Intel', patents: 4200, country: '🇺🇸' },
  { name: 'Amazon', patents: 3950, country: '🇺🇸' },
  { name: 'Sony', patents: 3600, country: '🇯🇵' },
];

const yearlyTrends = [
  { year: '2019', filings: 352000 },
  { year: '2020', filings: 389000 },
  { year: '2021', filings: 425000 },
  { year: '2022', filings: 468000 },
  { year: '2023', filings: 512000 },
  { year: '2024', filings: 548000 },
  { year: '2025', filings: 580000 },
];

export const TopSearchesChart = () => {
  return (
    <div className="space-y-8 animate-slide-up">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
          <TrendingUp className="w-4 h-4" />
          USPTO Trends 2025
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Top Patent Filing Categories
        </h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
          Explore the most active areas of innovation based on recent USPTO patent filings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Top Search Categories</CardTitle>
            <CardDescription>Patent filings by technology area (2024–2025)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topSearchCategories} layout="vertical" margin={{ left: 20, right: 20, top: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                  <XAxis type="number" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                  <YAxis type="category" dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} width={130} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))',
                      fontSize: 13,
                    }}
                    formatter={(value: number) => [`${value.toLocaleString()} patents`, 'Filings']}
                  />
                  <Bar dataKey="patents" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Technology Distribution</CardTitle>
            <CardDescription>Share of patent filings by sector</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[320px] flex items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={technologyDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, value }) => `${name} (${value}%)`}
                  >
                    {technologyDistribution.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))',
                      fontSize: 13,
                    }}
                    formatter={(value: number) => [`${value}%`, 'Share']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Top Patent Assignees
            </CardTitle>
            <CardDescription>Companies with most USPTO filings (2024–2025)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topAssignees} layout="vertical" margin={{ left: 10, right: 20, top: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                  <XAxis type="number" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(1)}k`} />
                  <YAxis type="category" dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} width={90} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1.5px solid hsl(var(--border))',
                      borderRadius: '6px',
                      color: 'hsl(var(--foreground))',
                      fontSize: 12,
                    }}
                    formatter={(value: number) => [`${value.toLocaleString()} patents`, 'Filings']}
                  />
                  <Bar dataKey="patents" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Assignee Ranking Cards */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Assignee Leaderboard</CardTitle>
            <CardDescription>Top filers ranked by patent volume</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
              {topAssignees.map((assignee, index) => {
                const maxPatents = topAssignees[0].patents;
                const widthPercent = (assignee.patents / maxPatents) * 100;
                return (
                  <div key={assignee.name} className="relative">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground w-5 text-right">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-foreground">
                            {assignee.country} {assignee.name}
                          </span>
                          <span className="text-xs font-mono text-muted-foreground">
                            {assignee.patents.toLocaleString()}
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary/70 transition-all duration-500"
                            style={{ width: `${widthPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Yearly Trends - full width */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">USPTO Patent Filing Trends</CardTitle>
            <CardDescription>Total annual patent applications (2019–2025)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyTrends} margin={{ left: 10, right: 10, top: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))',
                      fontSize: 13,
                    }}
                    formatter={(value: number) => [`${value.toLocaleString()} filings`, 'Patents']}
                  />
                  <Bar dataKey="filings" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats Chips */}
      <div className="flex flex-wrap justify-center gap-3">
        {topSearchCategories.slice(0, 5).map((cat) => (
          <div key={cat.name} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/60 text-sm">
            <span className="text-foreground font-medium">{cat.name}</span>
            <span className="text-emerald-500 dark:text-emerald-400 font-mono text-xs">{cat.growth}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
