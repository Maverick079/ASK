
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, UserCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface Feedback {
  name: string;
  feedback: string;
  date: string;
}

export default function FeedbackPage() {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

  useEffect(() => {
    try {
      const storedFeedback = JSON.parse(localStorage.getItem("feedback") || "[]");
      setFeedbackList(storedFeedback.sort((a: Feedback, b: Feedback) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    } catch (error) {
      console.error("Could not retrieve feedback from localStorage", error);
      setFeedbackList([]);
    }
  }, []);

  const clearAllFeedback = () => {
    try {
      localStorage.removeItem("feedback");
      setFeedbackList([]);
    } catch (error) {
      console.error("Could not clear feedback from localStorage", error);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold font-headline">Submitted Feedback</h1>
            {feedbackList.length > 0 && (
                <Button variant="destructive" onClick={clearAllFeedback}>
                    <Trash2 className="mr-2 h-4 w-4" /> Clear All
                </Button>
            )}
        </div>

        {feedbackList.length > 0 ? (
          <div className="space-y-6">
            {feedbackList.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <UserCircle className="h-8 w-8 text-muted-foreground" />
                    <div>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{new Date(item.date).toLocaleString()}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{item.feedback}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border-2 border-dashed rounded-lg">
            <h2 className="text-xl font-semibold">No Feedback Yet</h2>
            <p className="text-muted-foreground mt-2">Be the first to share your thoughts!</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
