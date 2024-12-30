import React from "react";

import cn from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 h-9 text-sm font-medium rounded-md bg-foreground text-background",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
