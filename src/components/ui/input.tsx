import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      icon,
      containerClassName,
      id,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;

    const input = (
      <input
        id={inputId}
        type={type}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          icon && "ps-10",
          className
        )}
        ref={ref}
        {...props}
      />
    );

    if (!label && !error && !icon) {
      return input;
    }

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            {label}
            {required && (
              <span aria-hidden="true" className="ms-1 text-[var(--errorColor)]">
                *
              </span>
            )}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-gray-400">
              {icon}
            </div>
          )}
          {input}
        </div>
        {error && (
          <p id={errorId} role="alert" className="mt-2 text-sm text-[var(--errorColor)]">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
