import * as React from "react"
import { 
  LayoutDashboard, 
  Package, 
  Wallet, 
  Users, 
  TrendingUp, 
  Settings,
  ShoppingCart,
  Factory,
  Zap,
  BrainCircuit,
  LayoutGrid,
  Search,
  Plus,
  HelpCircle,
  MoreHorizontal,
  ChevronRight,
  LogOut,
  User,
  Settings2,
  Sparkles
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useStore } from "@/store/useStore"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { activeSection, setActiveSection, user } = useStore()

  const data = {
    user: {
      name: user.name,
      email: user.department,
      avatar: user.avatar,
    },
    navMain: [
      {
        title: "Operations",
        items: [
          {
            title: "Dashboard",
            id: "dashboard",
            icon: LayoutDashboard,
          },
          {
            title: "Supply Chain",
            id: "inventory",
            icon: Package,
          },
          {
            title: "Procurement",
            id: "procurement",
            icon: ShoppingCart,
          },
          {
            title: "Manufacturing",
            id: "manufacturing",
            icon: Factory,
          },
        ],
      },
      {
        title: "Enterprise",
        items: [
          {
            title: "Finance",
            id: "finance",
            icon: Wallet,
          },
          {
            title: "People",
            id: "people",
            icon: Users,
          },
          {
            title: "CRM & Sales",
            id: "crm",
            icon: TrendingUp,
          },
          {
            title: "Projects",
            id: "projects",
            icon: LayoutGrid,
          },
        ],
      },
      {
        title: "Advanced",
        items: [
          {
            title: "Automations",
            id: "workflow",
            icon: Zap,
          },
          {
            title: "AI Insights",
            id: "ai-center",
            icon: BrainCircuit,
          },
        ],
      },
    ],
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="h-16 flex items-center px-4">
        <div className="flex items-center gap-2 font-serif italic text-xl font-bold tracking-tighter">
          <div className="h-8 w-8 bg-foreground rounded-lg flex items-center justify-center text-background">
             <LayoutGrid className="h-5 w-5" />
          </div>
          <span className="group-data-[collapsible=icon]:hidden">ERPIO</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="text-[10px] font-bold uppercase tracking-widest">{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton 
                      onClick={() => setActiveSection(item.id as any)}
                      isActive={activeSection === item.id}
                      tooltip={item.title}
                      className={activeSection === item.id ? "bg-accent text-accent-foreground font-bold" : ""}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setActiveSection('settings')}
              isActive={activeSection === 'settings'}
              tooltip="Settings"
            >
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs">
                    {data.user.avatar}
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-semibold">{data.user.name}</span>
                    <span className="truncate text-xs text-muted-foreground">{data.user.email}</span>
                  </div>
                  <ChevronRight className="ml-auto group-data-[collapsible=icon]:hidden h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" side="right" align="end" sideOffset={4}>
                <DropdownMenuItem className="gap-2" onClick={() => setActiveSection('profile')}>
                  <User className="h-4 w-4" />
                  Portfolio
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2" onClick={() => setActiveSection('settings')}>
                  <Settings2 className="h-4 w-4" />
                  Preferences
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 text-destructive">
                  <LogOut className="h-4 w-4" />
                  Power Down
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
