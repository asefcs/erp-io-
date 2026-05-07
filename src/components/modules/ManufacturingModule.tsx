import { 
  Zap, 
  Play, 
  Pause, 
  Settings2, 
  Cpu, 
  Activity, 
  BarChart3, 
  AlertTriangle 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from "recharts";

const performanceData = [
  { t: '10:00', load: 42, temp: 38 },
  { t: '10:30', load: 55, temp: 42 },
  { t: '11:00', load: 78, temp: 51 },
  { t: '11:30', load: 62, temp: 48 },
  { t: '12:00', load: 45, temp: 40 },
];

export const ManufacturingModule = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-serif italic text-primary">Manufacturing OS</h2>
        <p className="text-muted-foreground text-sm">Industrial IoT monitoring, production lines, and quality control.</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="gap-2">
          <Settings2 className="h-4 w-4" />
          Cali. Batch
        </Button>
        <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/20 text-white border-none">
          <Play className="h-4 w-4" />
          Resume Production
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 border-border/60">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Line Performance Analytics</CardTitle>
              <CardDescription>Real-time load and thermals for Assembly-X Hub</CardDescription>
            </div>
            <Badge variant="outline" className="h-5 text-[9px] animate-pulse border-emerald-500 text-emerald-600">LIVE SENSORS</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.4} />
                <XAxis dataKey="t" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ borderRadius: '8px' }} />
                <Line type="monotone" dataKey="load" stroke="var(--primary)" strokeWidth={3} dot={{ r: 4, fill: 'var(--background)' }} />
                <Line type="stepAfter" dataKey="temp" stroke="var(--destructive)" strokeWidth={2} strokeDasharray="4 4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="border-border/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              Active Work Orders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            {[
              { id: 'WO-1290', part: 'Hydraulic Piston v2', progress: 85, status: 'Final Stage' },
              { id: 'WO-1294', part: 'Shielding Array-4', progress: 32, status: 'Materials' },
              { id: 'WO-1295', part: 'Neural Link Module', progress: 12, status: 'Queued' },
            ].map((wo) => (
              <div key={wo.id} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>{wo.id} • {wo.part}</span>
                  <span className="text-muted-foreground">{wo.progress}%</span>
                </div>
                <Progress value={wo.progress} className="h-1.5" />
                <div className="text-[9px] text-muted-foreground uppercase">{wo.status}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 space-y-3">
          <div className="flex items-center gap-2 text-orange-600">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Predictive Alert</span>
          </div>
          <p className="text-xs font-medium">Bearing #12 in Line-B showing abnormal vibration (0.42mm/s delta). Failure likely in 14-18 cycles.</p>
          <Button variant="outline" size="sm" className="w-full text-[9px] h-7 border-orange-500/30 text-orange-700 hover:bg-orange-500/10">Schedule Maintenance</Button>
        </div>
      </div>
    </div>
  </div>
);
