import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-sm bg-bg-surface",
        className
      )}
      {...props}
    />
  );
}

function SkeletonText({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "h-4 animate-pulse rounded-sm bg-bg-surface",
        className
      )}
      {...props}
    />
  );
}

function SkeletonCard({ className, ...props }: SkeletonProps) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <Skeleton className="aspect-[3/4] w-full" />
      <div className="space-y-2">
        <SkeletonText className="w-3/4" />
        <SkeletonText className="w-1/2" />
      </div>
    </div>
  );
}

function SkeletonProductGrid({
  count = 4,
  className,
  ...props
}: SkeletonProps & { count?: number }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6",
        className
      )}
      {...props}
    >
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export { Skeleton, SkeletonText, SkeletonCard, SkeletonProductGrid };
