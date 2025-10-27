"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handleCalendlyClick = () => {
    window.open("https://calendly.com/fahadali5", "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-2">
            Let's Connect
          </DialogTitle>
          <p className="text-center text-muted-foreground mb-6">
            Schedule a meeting with me
          </p>
        </DialogHeader>

        <div className="p-6">
          {/* Calendly Booking Option */}
          <div className="mb-6">
            <div className="mb-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Book a Meeting
              </h3>
              <p className="text-sm text-muted-foreground">
                Choose a time that works best for you
              </p>
            </div>
            
            <div className="space-y-3">
              <Button
                onClick={handleCalendlyClick}
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 h-14 text-lg"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Open My Calendar
              </Button>
              <Button
                onClick={onClose}
                variant="outline"
                className="w-full"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
