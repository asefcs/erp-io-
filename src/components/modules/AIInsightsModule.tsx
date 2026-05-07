import { 
  BrainCircuit, 
  TrendingUp, 
  AlertCircle, 
  Lightbulb, 
  ArrowUpRight, 
  Search, 
  Activity, 
  Sparkles,
  Zap,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip 
} from "recharts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const forecastData = [
  { month: 'Oct', actual: 4200, pred: 4200 },
  { month: 'Nov', actual: 4500, pred: 4600 },
  { month: 'Dec', actual: 4800, pred: 5100 },
  { month: 'Jan', actual: null, pred: 5800 },
  { month: 'Feb', actual: null, pred: 6400 },
];

export const AIInsightsModule = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-2xl shadow-primary/30">
          <BrainCircuit className="h-8 w-8" />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-serif italic text-primary">AI Insight Center</h2>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Empowering 84% of operational decisions with predictive heuristics.
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="gap-2 rounded-xl">
          Sync Model
        </Button>
        <Button className="gap-2 bg-gradient-to-r from-primary to-indigo-600 hover:opacity-90 border-none shadow-xl shadow-primary/20 rounded-xl">
          <Zap className="h-4 w-4" />
          Run Global Forecast
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 border-border/60">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Revenue Forecast Matrix</CardTitle>
              <CardDescription>Actual vs AI-Predicted performance for Q4/Q1</CardDescription>
            </div>
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">Confidence: 94.2%</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] w-full text-foreground/50">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecastData}>
                <defs>
                  <linearGradient id="colorPred" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'currentColor' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'currentColor' }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid var(--border)', backgroundColor: 'var(--card)' }} />
                <Area type="monotone" dataKey="pred" name="AI Prediction" stroke="var(--primary)" strokeWidth={3} strokeDasharray="5 5" fill="url(#colorPred)" />
                <Area type="monotone" dataKey="actual" name="Actual Revenue" stroke="var(--primary)" strokeWidth={3} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="border-primary/20 bg-primary/5 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              Strategic Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="px-1">
            <Accordion type="single" collapsible className="w-full">
              {[
                { id: 'item-1', title: 'Inventory Re-hubbing', desc: 'Move 12% of Rotterdam stock to Dubai for upcoming EMEA peak.', impact: '+$140k' },
                { id: 'item-2', title: 'Vendor Shift', desc: 'Apex Tech shows consistent 4% delay. Swap to Quantum Primary.', impact: 'Cycle time -12h' },
                { id: 'item-3', title: 'Workforce Surge', desc: 'Predicting 22% load spike in Eng. Recommend open hiring surge.', impact: 'Risk Mitigation' },
              ].map((rec) => (
                <AccordionItem key={rec.id} value={rec.id} className="border-none px-4 rounded-xl hover:bg-background/80 transition-colors">
                  <AccordionTrigger className="hover:no-underline py-3">
                    <span className="text-xs font-bold text-left">{rec.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="text-[10px] text-muted-foreground leading-relaxed mb-2">{rec.desc}</p>
                    <div className="text-[9px] font-bold text-primary uppercase">{rec.impact} impact</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-sm">Anomaly Watch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
             <div className="flex items-center gap-3 p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                <div className="text-[10px] font-medium leading-tight">Strange spike in Project "Alpha" costs (+44% vs baseline). Audit required.</div>
             </div>
             <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <TrendingUp className="h-5 w-5 text-emerald-500 shrink-0" />
                <div className="text-[10px] font-medium leading-tight">Conversion rate in CRM exceeded forecasted ceiling by 12%. Analyze vectors.</div>
             </div>
             <Button variant="ghost" className="w-full text-[10px] font-bold uppercase tracking-widest text-primary h-8 mt-2">Detailed AI Audit View</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);
