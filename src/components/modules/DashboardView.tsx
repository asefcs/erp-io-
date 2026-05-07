import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Package, 
  Users, 
  BrainCircuit, 
  Briefcase, 
  ShieldCheck,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  Activity
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  BarChart,
  Bar
} from "recharts";
import { revenueData } from "@/constants";

const sparklineData = [
  { v: 40 }, { v: 45 }, { v: 42 }, { v: 48 }, { v: 55 }, { v: 52 }, { v: 60 }
];

const KPIComponent = ({ title, value, detail, trend, color, icon: Icon }: any) => (
  <Card className="border-border/60 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden group">
    <CardContent className="p-6 relative">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-${color}-500/10 transition-colors duration-700`} />
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2.5 rounded-xl bg-${color}-500/10 text-${color}-600`}>
          <Icon className="h-5 w-5" />
        </div>
        <Badge variant="outline" className={`border-${color}-500/20 bg-${color}-500/5 text-${color}-600 text-[10px] font-bold h-5`}>
          {trend}
        </Badge>
      </div>
      <div className="space-y-1">
        <CardDescription className="text-[10px] font-bold uppercase tracking-widest">{title}</CardDescription>
        <div className="text-2xl font-bold tracking-tighter">{value}</div>
        <p className="text-[10px] text-muted-foreground flex items-center gap-1">
          {detail}
          <ArrowUpRight className="h-3 w-3" />
        </p>
      </div>
      <div className="mt-4 h-8 w-full opacity-40 group-hover:opacity-100 transition-opacity duration-700">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sparklineData}>
             <Line type="monotone" dataKey="v" stroke={`var(--${color === 'primary' ? 'primary' : color + '-500'})`} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export const DashboardView = () => (
  <div className="space-y-10">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1 text-[10px] uppercase font-bold tracking-widest">Global Operations</Badge>
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
        </div>
        <h2 className="text-4xl font-bold tracking-tighter font-serif italic text-primary">Strategic Overview</h2>
        <p className="text-muted-foreground text-sm max-w-lg mt-1 font-medium">Synthesis of real-time multi-node logistics, treasury performance, and AI-driven predictive modeling.</p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" className="rounded-xl border-border/60 gap-2 h-11 px-5 shadow-sm">
          <Activity className="h-4 w-4" />
          Neural Logs
        </Button>
        <Button className="rounded-xl bg-primary shadow-xl shadow-primary/20 gap-2 h-11 px-6 border-none hover:opacity-90">
          <BrainCircuit className="h-4 w-4" />
          AI Forecast
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <KPIComponent 
        title="Consolidated Revenue" 
        value="$12.42M" 
        detail="+14.2% Growth" 
        trend="BULLISH" 
        color="primary" 
        icon={DollarSign} 
      />
      <KPIComponent 
        title="Supply Health" 
        value="94.2%" 
        detail="Stock Optimized" 
        trend="STABLE" 
        color="emerald" 
        icon={Package} 
      />
      <KPIComponent 
        title="Asset Utilization" 
        value="88.1%" 
        detail="3.4% Latency" 
        trend="IMPROVING" 
        color="indigo" 
        icon={Users} 
      />
      <KPIComponent 
        title="AI Risk Index" 
        value="0.14" 
        detail="Low Exposure" 
        trend="SECURE" 
        color="orange" 
        icon={ShieldCheck} 
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card className="lg:col-span-2 border-border/60">
        <CardHeader className="flex flex-row items-center justify-between pb-8">
          <div>
            <CardTitle>Treasury Performance Matrix</CardTitle>
            <CardDescription>Consolidated revenue vs expense curves across global entities</CardDescription>
          </div>
          <div className="flex items-center gap-2">
             <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/5 border border-primary/20">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-[10px] font-bold uppercase">Actual</span>
             </div>
             <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/5 border border-primary/20 opacity-50">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="text-[10px] font-bold uppercase">Pred.</span>
             </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[380px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.4} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} 
                  tickFormatter={(v) => `$${v}`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)', 
                    borderColor: 'var(--border)', 
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
                <Area type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={3} fill="url(#colorRev)" />
                <Area type="monotone" dataKey="ai" stroke="var(--indigo-500)" strokeWidth={2} strokeDasharray="4 4" fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <Card className="border-border/60 bg-gradient-to-b from-primary/5 to-transparent shadow-none border-dashed">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Strategic Insight</span>
            </div>
            <CardTitle>AI Core Analysis</CardTitle>
            <CardDescription className="text-xs">Next 24-hour predictive vectors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { label: 'Demand Surge', desc: 'EMEA Logistics node 4 predicted +22% load surge.', action: 'Deploy Aux Node' },
              { label: 'Currency Delta', desc: 'USD/EUR parity fluctuating. Treasury swap recommended.', action: 'Swap Assets' },
              { label: 'Supply Lag', desc: 'Vendor Apex Tech is showing anomalous latency spikes.', action: 'Audit Pipeline' },
            ].map((insight) => (
              <div key={insight.label} className="space-y-2 group cursor-pointer">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>{insight.label}</span>
                  <ChevronRight className="h-3 w-3 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{insight.desc}</p>
                <Button variant="ghost" className="h-7 text-[9px] font-bold uppercase tracking-widest text-primary p-0 hover:bg-transparent">
                  {insight.action}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Regional Yields</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="h-[180px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: 'NA', v: 420 },
                    { name: 'EU', v: 380 },
                    { name: 'AS', v: 210 },
                    { name: 'ME', v: 140 },
                  ]}>
                    <Bar dataKey="v" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  </BarChart>
                </ResponsiveContainer>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);
