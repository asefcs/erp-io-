import { useState } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  Cell,
  LineChart,
  Line
} from "recharts";
import { Users, Clock, Activity, UserPlus, MoreHorizontal, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { hrHeadcountData, hrSatisfactionData } from "@/constants";
import { OnboardingWizard } from "@/components/shared/OnboardingWizard";

const teamMembers = [
  { name: "Elias Thorne", role: "Prinicipal Architect", dept: "Advanced Systems", status: "Active", avatar: "ET", email: "e.thorne@erpio.global" },
  { name: "Sarah Chen", role: "Sr. Logistics Lead", dept: "Global Supply", status: "Active", avatar: "SC", email: "s.chen@erpio.global" },
  { name: "Marcus Vane", role: "Treasury Analyst", dept: "Strategic Finance", status: "Away", avatar: "MV", email: "m.vane@erpio.global" },
  { name: "Aria Montgomery", role: "AI Ethics Officer", dept: "Product Ops", status: "Active", avatar: "AM", email: "a.mont@erpio.global" },
];

export const HRModule = () => {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <div className="space-y-6">
      <OnboardingWizard open={showWizard} onOpenChange={setShowWizard} />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-serif italic text-primary">Human Assets</h2>
          <p className="text-muted-foreground text-sm">Talent management, sentiment analysis, and performance tracking.</p>
        </div>
        <Button onClick={() => setShowWizard(true)} className="gap-2 bg-primary hover:bg-primary/90 rounded-xl h-10 px-6">
          <UserPlus className="h-4 w-4" />
          Hire New Talent
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Active Talent', value: '1,254', icon: Users, sub: '+12 this week' },
          { label: 'Avg. Tenure', value: '4.2yr', icon: Clock, sub: 'Global average' },
          { label: 'ENPS Score', value: '74', icon: Activity, sub: 'Top 5% industry' },
        ].map((kpi, i) => (
          <Card key={i} className="border-border/60">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{kpi.label}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground opacity-50" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold tracking-tighter">{kpi.value}</div>
              <p className="text-[10px] font-medium text-emerald-600 mt-1 uppercase leading-none">{kpi.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="font-serif italic text-xl">Internal Demographics</CardTitle>
            <CardDescription>Headcount distribution by functional department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hrHeadcountData}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity={1} />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.4} />
                  <XAxis 
                    dataKey="dept" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: 'var(--muted-foreground)', fontWeight: 600 }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: 'var(--muted-foreground)', fontWeight: 600 }} 
                  />
                  <RechartsTooltip 
                    cursor={{ fill: 'var(--muted)', opacity: 0.4 }}
                    contentStyle={{ 
                      borderRadius: '12px', 
                      border: '1px solid var(--border)',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      backgroundColor: 'var(--card)'
                    }} 
                  />
                  <Bar 
                    dataKey="count" 
                    fill="url(#barGradient)" 
                    radius={[6, 6, 0, 0]} 
                    barSize={32}
                  >
                    {hrHeadcountData.map((_entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill="var(--primary)" 
                        opacity={1 - index * 0.1}
                        className="transition-all hover:opacity-80"
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="font-serif italic text-xl">Cultural Health Index</CardTitle>
            <CardDescription>Aggregate employee satisfaction sentiment analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hrSatisfactionData} margin={{ left: -20, right: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.4} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: 'var(--muted-foreground)', fontWeight: 600 }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    domain={[3.5, 5]} 
                    tick={{ fontSize: 10, fill: 'var(--muted-foreground)', fontWeight: 600 }} 
                  />
                  <RechartsTooltip 
                    contentStyle={{ 
                      borderRadius: '12px', 
                      border: '1px solid var(--border)',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                      fontSize: '12px',
                      backgroundColor: 'var(--card)'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="var(--primary)" 
                    strokeWidth={4} 
                    dot={{ r: 4, fill: 'var(--background)', stroke: 'var(--primary)', strokeWidth: 2 }} 
                    activeDot={{ r: 7, strokeWidth: 0 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/60">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Leadership Roster</CardTitle>
            <CardDescription>Core talent across mission-critical departments</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="h-8">View Archive</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Functional Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.email}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 border border-border">
                        <AvatarFallback className="text-[10px] font-bold">{member.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-sm tracking-tight">{member.name}</div>
                        <div className="text-[10px] text-muted-foreground">{member.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs font-medium text-muted-foreground">{member.role}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-[10px] font-bold uppercase">{member.dept}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <div className={`h-1.5 w-1.5 rounded-full ${member.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-orange-500'}`} />
                       <span className="text-xs font-medium">{member.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Profile Detail</DropdownMenuItem>
                        <DropdownMenuItem>Review Performance</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Revoke Access</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
