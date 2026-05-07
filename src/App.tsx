import { useStore } from "./store/useStore";
import { AppSidebar } from "./components/layout/AppSidebar";
import { Header } from "./components/layout/Header";
import { DashboardView } from "./components/modules/DashboardView";
import { InventoryModule } from "./components/modules/InventoryModule";
import { FinanceModule } from "./components/modules/FinanceModule";
import { HRModule } from "./components/modules/HRModule";
import { CRMModule } from "./components/modules/CRMModule";
import { ProjectsView } from "./components/modules/ProjectsView";
import { ProfileView } from "./components/modules/ProfileView";
import { ProcurementModule } from "./components/modules/ProcurementModule";
import { ManufacturingModule } from "./components/modules/ManufacturingModule";
import { WorkflowModule } from "./components/modules/WorkflowModule";
import { AIInsightsModule } from "./components/modules/AIInsightsModule";
import { cn } from "./lib/utils";
import { Section } from "./constants";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Settings } from "lucide-react";

export default function App() {
  const { activeSection, setActiveSection, isDarkMode, toggleDarkMode } = useStore();

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard': return <DashboardView />;
      case 'inventory': return <InventoryModule />;
      case 'procurement': return <ProcurementModule />;
      case 'manufacturing': return <ManufacturingModule />;
      case 'finance': return <FinanceModule />;
      case 'people': return <HRModule />;
      case 'crm': return <CRMModule />;
      case 'projects': return <ProjectsView />;
      case 'workflow': return <WorkflowModule />;
      case 'ai-center': return <AIInsightsModule />;
      case 'profile': return <ProfileView />;
      case 'settings': return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">
          <div className="text-center space-y-3">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 uppercase tracking-widest px-4 py-1 text-[10px] font-bold">System Configuration</Badge>
            <h2 className="text-5xl font-bold font-serif italic text-primary leading-tight">Architecture & Heuristics</h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed font-medium">Fine-tune the cognitive engine, visual density, and security protocols of your enterprise OS environment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <Card className="border-border/60 bg-card/50 backdrop-blur-sm group hover:border-primary/20 transition-all p-2">
               <CardContent className="pt-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Settings className="h-16 w-16 rotate-45" />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold leading-none">Photonic Lifecycle</h4>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter opacity-70">{isDarkMode ? 'Lunar Phase Active' : 'Solar Phase Active'}</p>
                    </div>
                    <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                  </div>
               </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/50 backdrop-blur-sm group hover:border-primary/20 transition-all p-2 opacity-60">
               <CardContent className="pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold leading-none">Neural Latency</h4>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter opacity-70">Adaptive Smoothing</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
               </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/50 backdrop-blur-sm group hover:border-primary/20 transition-all p-2 opacity-60">
               <CardContent className="pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold leading-none">Quantum Encryption</h4>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter opacity-70">Failsafe Enabled</p>
                    </div>
                    <Switch defaultChecked disabled />
                  </div>
               </CardContent>
            </Card>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="rounded-xl h-12 px-8 font-bold border-border/60 hover:bg-muted/50">Reset Defaults</Button>
            <Button className="rounded-xl h-12 px-10 font-bold bg-primary shadow-xl shadow-primary/20 border-none hover:opacity-90">Commit Infrastructure Sync</Button>
          </div>
        </div>
      );
      default: return <DashboardView />;
    }
  };

  const getSectionLabel = () => {
    const labels: Record<string, string> = {
      dashboard: 'Strategic Overview',
      inventory: 'Supply Chain Intelligence',
      procurement: 'Procurement & Sourcing',
      manufacturing: 'Industrial Performance',
      finance: 'Treasury & Revenue',
      people: 'Human Asset Management',
      crm: 'Customer Lifecycle',
      projects: 'Strategic Initiatives',
      workflow: 'Workflow Automation',
      'ai-center': 'AI Center of Excellence',
      settings: 'System Prefs',
      profile: 'Executive Portfolio'
    };
    return labels[activeSection] || 'Operation Center';
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background text-foreground transition-colors duration-500 font-sans selection:bg-primary/20 selection:text-primary">
        <AppSidebar />
        
        <SidebarInset className="flex flex-col transition-all duration-300 ease-in-out">
          <Header 
            activeSectionLabel={getSectionLabel()} 
            onProfileClick={() => setActiveSection('profile')}
          />
          
          <div className="flex-1 p-6 lg:p-10 overflow-y-auto overflow-x-hidden">
            <div className="max-w-[1500px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both">
              {renderContent()}
            </div>
          </div>
          
          <footer className="px-10 py-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
            <div className="flex items-center gap-6">
              <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em]">© 2026 ERPIO GLOBAL SYSTEMS • v4.2.1-STABLE</p>
              <div className="hidden md:block h-3 w-[1px] bg-border" />
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">Privacy Protocol</span>
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">Security Audit</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Neural Link Synchronized</p>
              </div>
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

