import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Plus, 
  ArrowRight, 
  FileText, 
  Clock, 
  CheckCircle2 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

export const ProcurementModule = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-serif italic text-primary">Strategic Procurement</h2>
        <p className="text-muted-foreground text-sm">Vendor relations, purchase requisitions, and multi-currency sourcing.</p>
      </div>
      <div className="flex gap-2">
        <Button className="gap-2 bg-primary shadow-lg shadow-primary/20">
          <Plus className="h-4 w-4" />
          Create Requisition
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: 'Open Requisitions', value: '42', icon: FileText, trend: '+4 today' },
        { label: 'Avg. PO Cycle', value: '3.2 Days', icon: Clock, trend: '-15% YoY' },
        { label: 'Vendor Savings', value: '$84.2k', icon: CheckCircle2, trend: 'Optimized' },
        { label: 'Total Commitments', value: '$2.8M', icon: ShoppingCart, trend: '92% budget' },
      ].map((stat, i) => (
        <Card key={i} className="border-border/60">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/5 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <CardDescription className="text-[10px] font-bold uppercase tracking-widest">{stat.label}</CardDescription>
                <div className="text-xl font-bold tracking-tight">{stat.value}</div>
                <div className="text-[9px] font-medium text-emerald-600 uppercase mt-0.5">{stat.trend}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <Card className="border-border/60">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Active Purchase Orders</CardTitle>
          <CardDescription>Real-time status of external procurement cycles</CardDescription>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input placeholder="Search POs..." className="h-9 w-64 pl-8 text-xs" />
          </div>
          <Button variant="outline" size="sm" className="h-9 gap-2">
            <Filter className="h-3.5 w-3.5" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-border/40">
              <TableHead className="text-[10px] font-bold uppercase tracking-widest">Order ID</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest">Vendor</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest">Amount</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest">Status</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-right">ETA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: 'PO-8821', vendor: 'Global Logistics Hub', amount: '$42,500', status: 'In Transit', eta: 'Oct 29' },
              { id: 'PO-8819', vendor: 'Techtronik Labs', amount: '$12,400', status: 'Pending Approval', eta: 'Nov 02' },
              { id: 'PO-8798', vendor: 'Quantum Sourcing', amount: '$118,000', status: 'Delivered', eta: 'Oct 22' },
              { id: 'PO-8795', vendor: 'EuroSteel Corp', amount: '$8,200', status: 'Delayed', eta: 'Oct 24' },
            ].map((po) => (
              <TableRow key={po.id} className="group cursor-pointer hover:bg-muted/30">
                <TableCell className="font-mono text-xs font-bold">{po.id}</TableCell>
                <TableCell className="text-sm font-medium">{po.vendor}</TableCell>
                <TableCell className="font-mono text-xs font-bold">{po.amount}</TableCell>
                <TableCell>
                  <Badge variant={po.status === 'Delayed' ? 'destructive' : po.status === 'Delivered' ? 'outline' : 'secondary'} className="text-[9px] h-5">
                    {po.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-xs text-muted-foreground">{po.eta}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex justify-center">
          <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest gap-2">
            View Expanded Ledger
            <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);
