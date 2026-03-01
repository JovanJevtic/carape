"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-sm border bg-transparent px-4 py-2 text-base text-text-primary placeholder:text-text-muted transition-colors duration-200",
          "border-text-muted/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-error focus:border-error focus:ring-error",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-sm border bg-transparent px-4 py-3 text-base text-text-primary placeholder:text-text-muted transition-colors duration-200 resize-none",
          "border-text-muted/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-error focus:border-error focus:ring-error",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <label
        className={cn(
          "text-sm font-medium text-text-primary",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
    );
  }
);

Label.displayName = "Label";

export interface FormFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FormField = ({
  label,
  error,
  required,
  children,
  className,
}: FormFieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label required={required}>{label}</Label>}
      {children}
      {error && (
        <p className="text-sm text-error">{error}</p>
      )}
    </div>
  );
};

export { Input, Textarea, Label, FormField };
