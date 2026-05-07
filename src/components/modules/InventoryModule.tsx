import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer 
} from "recharts";
import { Plus, Boxes, Truck, Search, Filter, Activity, TrendingUp, MoreHorizontal } from "lucide-react";
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
import { hrHeadcountData } from "@/constants";

const inventoryItems = [
  { sku: "SKU-90210", name: "High-Core Processor V2", hub: "Amsterdam", stock: 1240, status: "Optimal" },
  { sku: "SKU-90211", name: "Neural Interface Board", hub: "Singapore", stock: 18, status: "Low Stock" },
  { sku: "SKU-90212", name: "Optic Fiber Bundle (1km)", hub: "Amsterdam", stock: 850, status: "Optimal" },
  { sku: "SKU-90213", name: "Cooling Node Alpha", hub: "New Jersey", stock: 210, status: "Optimal" },
  { sku: "SKU-90214", name: "Lithium Power Module", hub: "Singapore", stock: 42, status: "Low Stock" },
];

export const InventoryModule = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-serif italic text-primary">SCM & Warehousing</h2>
        <p className="text-muted-foreground text-sm">Real-time inventory levels across nested global hubs.</p>
      </div>
      <div className="flex gap-2">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          <Input placeholder="Search SKU, Batch, Hub..." className="pl-9 w-[280px] h-10 border-border/60" />
        </div>
        <Button size="icon" variant="outline" className="h-10 w-10"><Filter className="h-4 w-4" /></Button>
        <Button className="h-10 bg-primary hover:bg-primary/90 gap-2">
          <Plus className="h-4 w-4" />
          Restock
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: 'Total SKU Holdings', value: '42,504', icon: Boxes, sub: 'Across 12 hubs' },
        { label: 'In-Transit Weight', value: '1,240t', icon: Truck, sub: 'Sea/Air/Ground' },
        { label: 'Low Stock Alerts', value: '18', icon: Activity, sub: 'Action required' },
        { label: 'Turnover Ratio', value: '8.4x', icon: TrendingUp, sub: 'Target: 9.0x' },
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
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Global Hub Distribution</CardTitle>
          <CardDescription>Capacity utilization per major logistics fulfillment center</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { hub: 'Amsterdam Central', capacity: 92, status: 'Near Limit', trend: '+4% overflow' },
              { hub: 'Singapore East', capacity: 45, status: 'Optimal', trend: '-2% stable' },
              { hub: 'New Jersey North', capacity: 68, status: 'Active', trend: '+12% peak' },
              { hub: 'Dubai Terminal', capacity: 15, status: 'Underutilized', trend: 'Audit pending' },
            ].map((hub) => (
              <div key={hub.hub} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold">{hub.hub}</span>
                    <span className="ml-2 text-[10px] font-medium text-muted-foreground uppercase">{hub.trend}</span>
                  </div>
                  <Badge variant={hub.capacity > 80 ? 'destructive' : 'outline'} className="text-[9px] h-5">
                    {hub.status}
                  </Badge>
                </div>
                <Progress value={hub.capacity} className={`h-2 ${hub.capacity > 80 ? '[&>div]:bg-destructive' : ''}`} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Stock Action Table</CardTitle>
          <CardDescription>Priority reconciliation required</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
             <TableHeader>
               <TableRow>
                 <TableHead className="text-[10px] uppercase font-bold px-0">SKU</TableHead>
                 <TableHead className="text-[10px] uppercase font-bold text-right px-0">Stock</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
                {inventoryItems.slice(0, 4).map((item) => (
                  <TableRow key={item.sku} className="hover:bg-transparent border-none">
                    <TableCell className="px-0 py-2">
                      <div className="font-bold text-xs">{item.name}</div>
                      <div className="text-[9px] text-muted-foreground uppercase font-mono">{item.sku}</div>
                    </TableCell>
                    <TableCell className="text-right px-0 py-2">
                      <div className={`font-bold text-xs ${item.stock < 50 ? 'text-destructive' : ''}`}>{item.stock}</div>
                      <Badge variant={item.status === 'Low Stock' ? 'destructive' : 'outline'} className="h-4 text-[8px] px-1">{item.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
             </TableBody>
          </Table>
          <Button variant="ghost" className="w-full mt-4 text-[9px] font-bold uppercase tracking-widest text-primary h-8">
            View Full Inventory
          </Button>
        </CardContent>
      </Card>
    </div>

    <Card className="border-border/60">
      <CardHeader>
        <CardTitle>Active Shipments</CardTitle>
        <CardDescription>Real-time transit monitoring</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Manifest</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Carrier</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Est. Delay</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: "M-4421", dest: "Frankfurt Hub", carrier: "SkyBridge", status: "In Transit", delay: "None" },
              { id: "M-4422", dest: "Tokyo Bay", carrier: "Oceanic", status: "Delayed", delay: "+4.2h" },
              { id: "M-4423", dest: "London Port", carrier: "IronRoute", status: "In Transit", delay: "None" },
            ].map((shipment) => (
              <TableRow key={shipment.id}>
                <TableCell className="font-bold">{shipment.id}</TableCell>
                <TableCell>{shipment.dest}</TableCell>
                <TableCell>{shipment.carrier}</TableCell>
                <TableCell>
                  <Badge variant={shipment.status === 'Delayed' ? 'destructive' : 'outline'}>{shipment.status}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium text-muted-foreground italic text-xs">{shipment.delay}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Track GPS</DropdownMenuItem>
                      <DropdownMenuItem>Manifest Detail</DropdownMenuItem>
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
