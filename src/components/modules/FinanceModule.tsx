import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer 
} from "recharts";
import { Plus, Filter, Wallet, MoreVertical, Download, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { revenueData } from "@/constants";

export const FinanceModule = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-serif italic text-primary">Financial Hub</h2>
        <p className="text-muted-foreground text-sm">Ledgers, treasury, and automated tax compliance.</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
        <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
          <Plus className="h-4 w-4" />
          New Transaction
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Cash Flow Trends</CardTitle>
            <CardDescription>Monthly inflow vs outflow with burn rate delta</CardDescription>
          </div>
          <Button variant="ghost" size="icon"><Download className="h-4 w-4 text-muted-foreground" /></Button>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="inflow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.4} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
                <RechartsTooltip contentStyle={{ borderRadius: '8px', backgroundColor: 'var(--card)', borderColor: 'var(--border)' }} />
                <Area type="monotone" dataKey="revenue" name="Inflow" stroke="#10b981" fillOpacity={1} fill="url(#inflow)" strokeWidth={3} />
                <Area type="monotone" dataKey="expenses" name="Outflow" stroke="#ef4444" fill="transparent" strokeWidth={2} strokeDasharray="4 4" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="bg-primary text-primary-foreground border-none shadow-xl shadow-primary/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl block" />
          <CardHeader className="pb-2">
            <CardTitle className="text-primary-foreground/70 text-[10px] font-bold uppercase tracking-widest relative z-10">Available Treasury</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-4xl font-bold tracking-tighter">$14,245,600</div>
            <div className="flex items-center gap-2 mt-4">
              <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground text-[9px] h-5">Verified 4m ago</Badge>
              <span className="text-primary-foreground/60 text-[10px] font-medium">+4.2% MoM</span>
            </div>
            <div className="mt-8 flex gap-2">
              <Button size="sm" className="bg-white/10 hover:bg-white/20 border-none flex-1 text-xs font-bold">Transfer</Button>
              <Button size="icon" className="bg-white/10 hover:bg-white/20 border-none"><Wallet className="h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Quick Settlement</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
             <Table>
                <TableBody>
                  {[
                    { id: 'TXN-902', name: 'Cloud Server Fees', amount: '-$12,400', status: 'Approved' },
                    { id: 'TXN-881', name: 'Global Cust Account', amount: '+$45,000', status: 'Pending' },
                  ].map((txn) => (
                    <TableRow key={txn.id} className="hover:bg-transparent px-6 border-none">
                      <TableCell className="pl-6">
                        <div className="text-xs font-bold">{txn.name}</div>
                        <div className="text-[9px] text-muted-foreground uppercase">{txn.id}</div>
                      </TableCell>
                      <TableCell className="text-right pr-6">
                        <div className={`text-xs font-mono font-bold ${txn.amount.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                          {txn.amount}
                        </div>
                        <Badge variant={txn.status === 'Approved' ? 'outline' : 'secondary'} className="h-3.5 text-[8px] px-1">{txn.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
             </Table>
          </CardContent>
        </Card>
      </div>
    </div>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Treasury Operations Ledger</CardTitle>
          <CardDescription>Primary account movements across nodes</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="gap-2 text-xs font-bold uppercase tracking-widest h-8 px-4">
          <ExternalLink className="h-3 w-3" />
          Export Report
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Entity / Vendor</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: "FIN-7721", entity: "Amazon Web Services", date: "24 May 2026", cat: "Infrastructure", amount: "-$12,402.11" },
              { id: "FIN-7722", entity: "Apex Logistics", date: "23 May 2026", cat: "Operations", amount: "-$4,500.00" },
              { id: "FIN-7723", entity: "Euro Global Port", date: "22 May 2026", cat: "Customs", amount: "-$8,120.00" },
              { id: "FIN-7724", entity: "Stellar Tech", date: "21 May 2026", cat: "Procurement", amount: "-$15,000.00" },
            ].map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-mono text-xs">{row.id}</TableCell>
                <TableCell className="font-bold">{row.entity}</TableCell>
                <TableCell className="text-xs text-muted-foreground">{row.date}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-tight">{row.cat}</Badge>
                </TableCell>
                <TableCell className="text-right font-mono font-bold text-red-500">{row.amount}</TableCell>
                <TableCell>
                   <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical className="h-4 w-4" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);
