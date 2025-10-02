
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const feedbackFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  feedback: z.string().min(10, {
    message: "Feedback must be at least 10 characters.",
  }),
});

type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

const defaultValues: Partial<FeedbackFormValues> = {
  name: "",
  feedback: "",
};

export function FeedbackForm({ onFeedbackSubmit }: { onFeedbackSubmit: () => void }) {
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: FeedbackFormValues) {
    try {
      const existingFeedback = JSON.parse(localStorage.getItem("feedback") || "[]");
      const newFeedback = [...existingFeedback, { ...data, date: new Date().toISOString() }];
      localStorage.setItem("feedback", JSON.stringify(newFeedback));
    } catch (error) {
      console.error("Could not save feedback to localStorage", error);
    }
    onFeedbackSubmit();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us what you think..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit Feedback</Button>
      </form>
    </Form>
  );
}
