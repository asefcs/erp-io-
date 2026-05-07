import { 
  GitBranch, 
  Workflow, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Zap, 
  User,
  Settings,
  MoreVertical
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const WorkflowModule = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-serif italic text-primary">Workflow Automation</h2>
        <p className="text-muted-foreground text-sm">Design, trigger, and monitor enterprise logic flows.</p>
      </div>
      <Button className="gap-2 bg-primary shadow-lg shadow-primary/20 rounded-xl h-10 px-5">
        <Zap className="h-4 w-4" />
        New Automation
      </Button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3 space-y-6">
        {[
          { name: 'PO Approval Chain', triggers: 'Procurement Request', status: 'Active', load: '14/hr', color: 'primary' },
          { name: 'Global Stock Rebalance', triggers: 'Inventory < 20%', status: 'Active', load: '2/day', color: 'emerald' },
          { name: 'Onboarding Sequence', triggers: 'New Talent Doc', status: 'Paused', load: '0/hr', color: 'orange' },
        ].map((flow) => (
          <Card key={flow.name} className="group hover:ring-1 hover:ring-primary/50 transition-all duration-300 shadow-sm overflow-hidden border-border/60">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-muted border border-border flex items-center justify-center text-primary group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-none mb-2">{flow.name}</h3>
                    <div className="flex items-center gap-2">
                       <div className="flex items-center gap-1">
                          <Zap className="h-3 w-3 text-primary shrink-0" />
                          <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{flow.triggers}</span>
                       </div>
                       <Separator orientation="vertical" className="h-3" />
                       <div className="flex items-center gap-1">
                          <Activity className="h-3 w-3 text-muted-foreground shrink-0" />
                          <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{flow.load}</span>
                       </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 mr-2">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest group-data-[state=checked]:text-primary">{flow.status}</span>
                    <Switch defaultChecked={flow.status === 'Active'} className="scale-75" />
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="h-3.5 w-3.5 fill-current" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><MoreVertical className="h-4 w-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2"><Settings className="h-3.5 w-3.5" /> Node Editor</DropdownMenuItem>
                        <DropdownMenuItem className="gap-2"><Activity className="h-3.5 w-3.5" /> Execution Logs</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive gap-2"><ArrowRight className="h-3.5 w-3.5" /> Force Terminate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        <Card className="border-border/60">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              Real-time Pulse
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {[
              { event: 'Validation Pass', flow: 'PO Approval', time: '2m ago', status: 'success' },
              { event: 'Stock Rebalanced', flow: 'Logistics-4', time: '14m ago', status: 'success' },
              { event: 'Cost Spike Detected', flow: 'AI Watcher', time: '1h ago', status: 'warning' },
            ].map((ev, i) => (
              <div key={i} className="flex gap-4 relative">
                <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${ev.status === 'success' ? 'bg-emerald-500' : 'bg-red-500'} shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse`} />
                <div className="space-y-0.5">
                   <div className="text-xs font-bold leading-none">{ev.event}</div>
                   <div className="text-[10px] text-muted-foreground uppercase font-medium">{ev.flow} • {ev.time}</div>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-[10px] font-bold uppercase tracking-widest text-primary h-8 mt-2">Open Monitoring Cluster</Button>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-dashed border-primary/20 shadow-none">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold tracking-tight">Need a new Flow?</h4>
              <p className="text-[10px] text-muted-foreground max-w-[140px] mx-auto leading-relaxed">Describe a bottleneck and let AI draft the logic nodes.</p>
            </div>
            <Button size="sm" className="w-full text-[10px] font-bold h-7 bg-primary rounded-lg hover:opacity-90">Engage AI Architect</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);
