import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-sm px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "bg-bg-surface text-text-primary",
        accent: "bg-accent text-white",
        sale: "bg-accent text-white",
        new: "bg-gold text-bg-primary",
        outline: "border border-text-muted text-text-muted",
        gold: "bg-gold text-bg-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
