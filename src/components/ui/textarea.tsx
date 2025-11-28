import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(
          "min-h-[80px] w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
