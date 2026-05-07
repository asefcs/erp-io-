import { Plus, Filter, MoreHorizontal, LayoutGrid, Calendar, Users2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { projectsData } from "@/constants";

export const ProjectsView = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-serif italic text-primary">Strategic Initiatives</h2>
        <p className="text-muted-foreground text-sm">Portfolio management and critical path execution tracker.</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="gap-2 rounded-xl h-10 px-4"><Filter className="h-4 w-4" /> Filter</Button>
        <Button className="gap-2 rounded-xl h-10 px-5 shadow-lg shadow-primary/20">
          <Plus className="h-4 w-4" />
          Assign Resource
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projectsData.map((project) => (
        <Card key={project.name} className="group hover:ring-1 hover:ring-primary/50 transition-all duration-300 border-border/60 overflow-hidden">
          <CardHeader className="pb-4 relative">
            <div className="flex items-center justify-between mb-2">
              <Badge variant={project.health === 'Healthy' ? 'outline' : 'destructive'} 
                     className={`text-[9px] h-5 font-bold tracking-widest uppercase ${project.health === 'Healthy' ? 'border-emerald-500/20 bg-emerald-500/5 text-emerald-600' : ''}`}>
                {project.health} • {project.status}
              </Badge>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-primary">{project.progress}%</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7"><MoreHorizontal className="h-4 w-4" /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Project Settings</DropdownMenuItem>
                    <DropdownMenuItem>Resource Allocation</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Archive Project</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors cursor-pointer">{project.name}</CardTitle>
            <CardDescription className="text-[10px] uppercase font-bold tracking-tighter opacity-60">System Node: Alpha-7</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-1.5">
              <Progress value={project.progress} className="h-1.5" />
              <div className="flex justify-between text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                <span>Phase 2: Development</span>
                <span>Milestone: Nov 24</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2.5">
                  {['AV', 'SC', 'MV', 'AM'].map((member, i) => (
                    <Avatar key={i} className="h-8 w-8 border-2 border-background shadow-sm hover:-translate-y-0.5 transition-transform cursor-pointer">
                      <AvatarFallback className="text-[9px] font-bold">{member}</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground shadow-sm">
                    +4
                  </div>
                </div>
                <div className="h-4 w-px bg-border mx-2" />
                <div className="flex items-center gap-4 text-muted-foreground">
                   <div className="flex items-center gap-1.5">
                      <Users2 className="h-3.5 w-3.5" />
                      <span className="text-[10px] font-bold">12 Team</span>
                   </div>
                   <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="text-[10px] font-bold">D-14</span>
                   </div>
                </div>
              </div>
              <Button size="sm" variant="ghost" className="rounded-xl h-8 text-[10px] font-bold uppercase tracking-widest text-primary px-4 bg-primary/5 hover:bg-primary/10">
                Drill Down
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);
