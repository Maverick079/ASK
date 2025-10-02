
"use client";

import { useEffect, useState } from "react";
import { MessageSquarePlus, UserCircle, Trash2 } from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Feedback {
  name: string;
  feedback: string;
  date: string;
}

export function FeedbackButton() {
    const [open, setOpen] = useState(false);
    const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
    const { toast } = useToast();

    const fetchFeedback = () => {
      try {
        const storedFeedback = JSON.parse(localStorage.getItem("feedback") || "[]");
        setFeedbackList(storedFeedback.sort((a: Feedback, b: Feedback) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      } catch (error) {
        console.error("Could not retrieve feedback from localStorage", error);
        setFeedbackList([]);
      }
    };

    useEffect(() => {
        if (open) {
            fetchFeedback();
        }
    }, [open]);

    const handleFeedbackSubmit = () => {
        fetchFeedback(); // Re-fetch feedback to show the new one
        toast({
          title: "Feedback Submitted",
          description: "Thank you for your valuable feedback!",
        });
    };

    const clearAllFeedback = () => {
      try {
        localStorage.removeItem("feedback");
        setFeedbackList([]);
        toast({
          title: "Feedback Cleared",
          description: "All feedback has been removed.",
        });
      } catch (error) {
        console.error("Could not clear feedback from localStorage", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not clear feedback.",
        });
      }
    };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-8 left-8 z-50 rounded-full shadow-lg"
          aria-label="Provide feedback"
        >
          <MessageSquarePlus className="h-5 w-5 mr-2" />
          Feedback
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Share Your Feedback</SheetTitle>
          <SheetDescription>
            We'd love to hear what you think. Let us know how we can improve.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
            <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
        </div>
        <Separator className="my-4" />
        <div className="flex-grow overflow-y-auto pr-2">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Submitted Feedback</h3>
                {feedbackList.length > 0 && (
                    <Button variant="destructive" size="sm" onClick={clearAllFeedback}>
                        <Trash2 className="mr-2 h-4 w-4" /> Clear
                    </Button>
                )}
            </div>
            {feedbackList.length > 0 ? (
            <div className="space-y-4">
                {feedbackList.map((item, index) => (
                <Card key={index} className="bg-secondary/50">
                    <CardHeader className="p-4">
                    <div className="flex items-center gap-3">
                        <UserCircle className="h-6 w-6 text-muted-foreground" />
                        <div>
                            <CardTitle className="text-base">{item.name}</CardTitle>
                            <CardDescription className="text-xs">{new Date(item.date).toLocaleString()}</CardDescription>
                        </div>
                    </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                    <p className="text-sm text-foreground/80">{item.feedback}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
            ) : (
            <div className="text-center py-8">
                <p className="text-sm text-muted-foreground">No feedback yet.</p>
            </div>
            )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
