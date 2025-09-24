
"use client";

import { useState } from "react";
import { MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FeedbackForm } from "./feedback-form";
import { useToast } from "@/hooks/use-toast";

export function FeedbackButton() {
    const [open, setOpen] = useState(false);
    const { toast } = useToast();

    const handleFeedbackSubmit = () => {
        setOpen(false);
        toast({
          title: "Feedback Submitted",
          description: "Thank you for your valuable feedback!",
        });
      };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-8 left-8 z-50 rounded-full"
          aria-label="Provide feedback"
        >
          <MessageSquarePlus className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Share Your Feedback</SheetTitle>
          <SheetDescription>
            We'd love to hear what you think. Let us know how we can improve.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
            <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
