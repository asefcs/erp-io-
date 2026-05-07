import { useState } from "react";
import { 
  Users, 
  Check, 
  ChevronRight, 
  Mail, 
  User, 
  ShieldCheck, 
  Briefcase 
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OnboardingWizardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const OnboardingWizard = ({ open, onOpenChange }: OnboardingWizardProps) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else onOpenChange(false);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-serif italic text-2xl text-primary">Talent Onboarding</DialogTitle>
          <DialogDescription>
            Step {step} of {totalSteps}: {
              step === 1 ? 'Personal Details' : 
              step === 2 ? 'Security Access' : 
              'Contract Finalization'
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-6 space-y-6">
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Elias" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Thorne" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Corporate Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" className="pl-9" placeholder="e.thorne@erpio.global" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500 text-center">
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 inline-block mb-4">
                <ShieldCheck className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Biometric Clearance</h3>
              <p className="text-sm text-muted-foreground max-w-[300px] mx-auto">Please confirm identity through global auth system before provisioning hardware access.</p>
              <Button variant="outline" className="w-full mt-4 border-dashed border-primary">
                 Initialize Digital Passport Scan
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500">
              <div className="p-4 rounded-xl border border-border bg-muted/30 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-muted-foreground">Compensation</span>
                  <span className="font-bold font-mono">$185k / yr + Equity</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-muted-foreground">Restricted Stock</span>
                  <span className="font-bold font-mono">12,500 units / 4yr</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-muted-foreground">Functional Dept</span>
                  <Badge variant="outline">Advanced Systems</Badge>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <Check className="h-3 w-3 text-emerald-500" />
                Electronic signature will be legally binding under EU digital trade laws.
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/60">
          <Button 
            variant="ghost" 
            onClick={handleBack} 
            disabled={step === 1}
            className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
          >
            Previous
          </Button>
          <Button 
            onClick={handleNext} 
            className="text-xs font-bold uppercase tracking-widest gap-2 h-9"
          >
            {step === totalSteps ? 'Finalize Onboarding' : 'Next Step'}
            {step === totalSteps ? <Check className="h-3.5" /> : <ChevronRight className="h-3.5" /> }
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
