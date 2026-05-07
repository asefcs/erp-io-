import { 
  Search, 
  Bell, 
  User, 
  ChevronDown, 
  Command, 
  BrainCircuit,
  MessageSquare,
  Sparkles,
  SearchIcon,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useStore } from "@/store/useStore";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface HeaderProps {
  activeSectionLabel: string;
  onProfileClick: () => void;
}

export const Header = ({ activeSectionLabel }: HeaderProps) => {
  const { user, setActiveSection } = useStore();

  return (
    <header className="h-16 border-b border-border/40 bg-background/50 backdrop-blur-md sticky top-0 z-40 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div>
          <h1 className="text-sm font-bold tracking-tight uppercase text-muted-foreground/60">{activeSectionLabel}</h1>
        </div>
        
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-muted/30 rounded-xl border border-border/40 w-80 group transition-all focus-within:ring-1 focus-within:ring-primary/40 focus-within:bg-background">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search enterprise OS..." 
            className="h-5 border-none bg-transparent p-0 text-sm focus-visible:ring-0 placeholder:text-muted-foreground/50" 
          />
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-border bg-muted text-[10px] font-mono text-muted-foreground">
            <Command className="h-2.5 w-2.5" /> K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-muted-foreground hover:text-primary relative transition-all active:scale-90">
            <Bell className="h-4 w-4" />
            <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
          </Button>
          
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-muted-foreground hover:text-primary transition-all active:scale-90">
            <Activity className="h-4 w-4" />
          </Button>

          <Button 
            className="h-9 gap-2 px-4 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 text-primary shadow-none transition-all hover:scale-105 active:scale-95"
            onClick={() => setActiveSection('ai-center')}
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Ask AI</span>
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="pl-1 pr-2 py-1 h-10 rounded-xl hover:bg-muted/50 gap-3 group">
              <Avatar className="h-8 w-8 border border-border group-hover:scale-105 transition-transform">
                <AvatarFallback className="bg-primary text-primary-foreground text-[10px] font-bold">{user.avatar}</AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col items-start">
                <span className="text-xs font-bold leading-none">{user.name}</span>
                <span className="text-[9px] text-muted-foreground uppercase mt-0.5 font-medium">{user.department}</span>
              </div>
              <ChevronDown className="h-3 w-3 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-xl border-border/60">
            <DropdownMenuLabel className="text-xs font-bold uppercase text-muted-foreground">My Identity</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 cursor-pointer" onClick={() => setActiveSection('profile')}>
              <User className="h-4 w-4" /> <span className="text-xs font-medium">Profile Portfolio</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 cursor-pointer" onClick={() => setActiveSection('settings')}>
              <Command className="h-4 w-4" /> <span className="text-xs font-medium">Preferences</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 cursor-pointer text-destructive focus:text-destructive">
               <span className="text-xs font-bold uppercase">Power Down</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
