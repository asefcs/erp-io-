import { 
  ShieldCheck, 
  Settings, 
  Bell, 
  Activity, 
  ChevronRight, 
  Clock,
  Mail,
  MapPin,
  ExternalLink,
  ShieldAlert
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileView = () => (
  <div className="max-w-4xl mx-auto space-y-10 py-6">
    <div className="flex flex-col md:flex-row items-center gap-8 py-4">
      <div className="relative group">
        <Avatar className="h-32 w-32 rounded-3xl border-4 border-background shadow-2xl relative z-10">
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" />
          <AvatarFallback className="text-4xl font-serif bg-primary text-primary-foreground">AV</AvatarFallback>
        </Avatar>
        <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
      </div>
      <div className="flex-1 text-center md:text-left space-y-3">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Arthur Vance</h1>
          <Badge variant="outline" className="h-6 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[9px] font-bold px-3">L7 Executive</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground font-medium flex items-center justify-center md:justify-start gap-2">
            Chief Operational Architect • Global Strategy Hub
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><Mail className="h-3 w-3" /> a.vance@erpio.global</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Zurich Cluster</span>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-tighter">Verified Lead</span>
          </div>
          <Separator orientation="vertical" className="h-3 bg-border/60" />
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-bold uppercase tracking-tighter">Since 2018</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl"><Bell className="h-4 w-4" /></Button>
        <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl"><Settings className="h-4 w-4" /></Button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="border-border/60 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
            <ShieldAlert className="h-4 w-4" />
            Security Clearance
          </CardTitle>
          <CardDescription className="text-[10px] uppercase font-medium">Internal access protocols</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { area: 'Financial Ledgers', level: 'Full Access', protocol: 'Vault-9' },
            { area: 'Personnel Archives', level: 'Read/Write', protocol: 'Bio-Sync' },
            { area: 'Strategic SCM', level: 'Admin', protocol: 'Quantum-7' },
          ].map((clearance) => (
            <div key={clearance.area} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/40 group hover:border-primary/20 transition-all">
              <div>
                <div className="text-sm font-bold group-hover:text-primary transition-colors">{clearance.area}</div>
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter opacity-70">{clearance.protocol} • Protocol Active</div>
              </div>
              <Badge variant="outline" className="h-6 text-[9px] font-bold border-primary/20 bg-primary/5 text-primary">{clearance.level}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border/60 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Cognitive History
          </CardTitle>
          <CardDescription className="text-[10px] uppercase font-medium">Real-time engagement telemetry</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {[
            { log: 'Inventory Audit - APAC Hub', time: '14m ago', impact: 'Moderate' },
            { log: 'Equity Reallocation Flow', time: '2h ago', impact: 'High' },
            { log: 'System Credentials Refresh', time: 'Yesterday', impact: 'System' },
          ].map((activity, i) => (
            <div key={i} className="flex items-start gap-4 group cursor-pointer">
              <div className="h-2 w-2 rounded-full bg-primary ring-4 ring-primary/10 mt-1.5" />
              <div className="flex-1 space-y-0.5">
                <div className="text-xs font-bold group-hover:text-primary transition-colors flex items-center justify-between">
                  {activity.log}
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter opacity-70">{activity.time} • Impact: {activity.impact}</div>
              </div>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-[10px] font-bold uppercase tracking-widest text-primary h-8 mt-2 rounded-xl">View Detailed Interaction Trace</Button>
        </CardContent>
      </Card>
    </div>
  </div>
);
