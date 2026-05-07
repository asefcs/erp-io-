import { 
  BarChart3, 
  LayoutDashboard, 
  Package, 
  Users, 
  Wallet, 
  Settings, 
  TrendingUp, 
  Activity, 
  Briefcase,
  Truck,
  Boxes,
  Home,
  Clock,
  Plus,
  ShieldCheck,
  Search,
  Bell,
  ChevronRight,
  Filter,
  Check
} from "lucide-react";

export type Section = 
  | 'dashboard' 
  | 'inventory' 
  | 'finance' 
  | 'people' 
  | 'crm' 
  | 'projects' 
  | 'procurement'
  | 'manufacturing'
  | 'workflow'
  | 'ai-center'
  | 'settings' 
  | 'profile';

export const revenueData = [
  { name: 'Jan', revenue: 4500, expenses: 3200, ai: 4400 },
  { name: 'Feb', revenue: 5200, expenses: 3400, ai: 5100 },
  { name: 'Mar', revenue: 4800, expenses: 3100, ai: 4900 },
  { name: 'Apr', revenue: 6100, expenses: 4000, ai: 6000 },
  { name: 'May', revenue: 5900, expenses: 3900, ai: 6200 },
  { name: 'Jun', revenue: 7200, expenses: 4500, ai: 7100 },
];

export const crmData = [
  { stage: 'Prospecting', value: 120, color: 'var(--muted-foreground)' },
  { stage: 'Qualifying', value: 80, color: 'var(--accent)' },
  { stage: 'Proposal', value: 45, color: 'var(--ring)' },
  { stage: 'Negotiation', value: 25, color: 'var(--primary)' },
  { stage: 'Closed', value: 18, color: '#10b981' },
];

export const projectsData = [
  { name: 'Alpha Migration', progress: 85, status: 'On Track', health: 'Healthy' },
  { name: 'Cloud Expansion', progress: 40, status: 'At Risk', health: 'Warning' },
  { name: 'Supply Chain AI', progress: 95, status: 'Delayed', health: 'Critical' },
  { name: 'ERPIO v2.0', progress: 12, status: 'Design', health: 'Healthy' },
];

export const hrHeadcountData = [
  { dept: 'Engineering', count: 45 },
  { dept: 'Sales', count: 32 },
  { dept: 'Marketing', count: 18 },
  { dept: 'Operations', count: 24 },
  { dept: 'HR', count: 8 },
];

export const hrSatisfactionData = [
  { month: 'Jan', score: 4.2 },
  { month: 'Feb', score: 4.1 },
  { month: 'Mar', score: 4.4 },
  { month: 'Apr', score: 4.3 },
  { month: 'May', score: 4.6 },
];

export const COLORS = ['var(--primary)', 'var(--accent)', 'var(--ring)', 'var(--muted-foreground)'];
