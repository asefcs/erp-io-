import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  Cell 
} from "recharts";
import { Plus, Search, Filter, MoreHorizontal, UserCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
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
import { crmData } from "@/constants";

export const CRMModule = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-serif italic text-primary">Sales & CRM Engine</h2>
        <p className="text-muted-foreground text-sm">Unified customer lifecycle and revenue pipeline.</p>
      </div>
      <div className="flex gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search accounts..." className="pl-9 w-[240px]" />
        </div>
        <Button className="gap-2 shadow-lg shadow-primary/20 rounded-xl">
          <Plus className="h-4 w-4" />
          New Opportunity
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <Card className="lg:col-span-3 border-border/60">
        <CardHeader>
          <CardTitle>Sales Pipeline Funnel</CardTitle>
          <CardDescription>Value distribution across sales stages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={crmData} margin={{ left: 40 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="stage" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 600, fill: 'var(--muted-foreground)' }} />
                <RechartsTooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: '1px solid var(--border)', backgroundColor: 'var(--card)' }} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {crmData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2 border-border/60">
        <CardHeader>
          <CardTitle>High-Value Targets</CardTitle>
          <CardDescription>Accounts requiring immediate engagement</CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <Table>
            <TableBody>
              {[
                { name: 'Global Logistics Corp', deal: '$1.2M', health: 88, status: 'Proposal' },
                { name: 'Apex Tech Solutions', deal: '$840k', health: 42, status: 'Stalled' },
                { name: 'Lumina Group', deal: '$550k', health: 95, status: 'Closing' },
                { name: 'Terraform Ent', deal: '$210k', health: 70, status: 'Qualified' },
              ].map((account) => (
                <TableRow key={account.name} className="border-none hover:bg-muted/50 px-6 cursor-pointer group">
                  <TableCell className="pl-6">
                    <div className="font-bold text-sm">{account.name}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                       <Badge variant="outline" className="text-[9px] h-4 px-1">{account.status}</Badge>
                       <span className="text-[10px] font-mono text-muted-foreground">{account.deal}</span>
                    </div>
                  </TableCell>
                  <TableCell className="pr-6">
                    <div className="flex flex-col items-end gap-1.5">
                      <div className={`text-[10px] font-bold ${account.health < 50 ? 'text-destructive' : 'text-emerald-600'}`}>
                        {account.health}%
                      </div>
                      <Progress value={account.health} className={`h-1 w-16 ${account.health < 50 ? '[&>div]:bg-destructive' : '[&>div]:bg-emerald-500'}`} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="px-6 mt-4">
             <Button variant="outline" className="w-full text-[10px] font-bold uppercase tracking-widest h-8 border-dashed">
                Open CRM Full View
             </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    <Card className="border-border/60">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Active Leads & Contacts</CardTitle>
          <CardDescription>Consolidated customer interaction history</CardDescription>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" size="sm" className="h-8"><Filter className="h-3 w-3 mr-2" /> Filter</Button>
           <Button variant="outline" size="sm" className="h-8"><ExternalLink className="h-3 w-3 mr-2" /> Export</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Account Name</TableHead>
              <TableHead>Primary Contact</TableHead>
              <TableHead>Pipeline Value</TableHead>
              <TableHead>Last Interaction</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { name: "Apex Logistics", contact: "Johnathan Smith", value: "$450k", last: "2h ago", status: "Hot" },
              { name: "Stellar Cloud", contact: "Sarah Vane", value: "$1.4M", last: "Yesterday", status: "Warm" },
              { name: "Green Energy Co", contact: "Mike Thorne", value: "$80k", last: "3 days ago", status: "Cold" },
            ].map((lead) => (
              <TableRow key={lead.name}>
                <TableCell className="font-bold">{lead.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <UserCircle className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{lead.contact}</span>
                  </div>
                </TableCell>
                <TableCell className="font-mono">{lead.value}</TableCell>
                <TableCell className="text-xs text-muted-foreground">{lead.last}</TableCell>
                <TableCell>
                  <Badge variant={lead.status === 'Hot' ? 'default' : lead.status === 'Warm' ? 'secondary' : 'outline'}>
                    {lead.status}
                  </Badge>
                </TableCell>
                <TableCell>
                   <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);
