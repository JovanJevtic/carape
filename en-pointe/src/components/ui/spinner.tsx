import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

export function Spinner({ size = "md", className }: SpinnerProps) {
  return (
    <Loader2
      className={cn(
        "animate-spin text-accent",
        sizeClasses[size],
        className
      )}
    />
  );
}

export function LoadingScreen({ message }: { message?: string }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Spinner size="lg" />
      {message && (
        <p className="text-sm text-text-muted">{message}</p>
      )}
    </div>
  );
}

export function LoadingOverlay({ message }: { message?: string }) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-bg-primary/80 backdrop-blur-sm">
      <Spinner size="lg" />
      {message && (
        <p className="text-sm text-text-muted">{message}</p>
      )}
    </div>
  );
}
