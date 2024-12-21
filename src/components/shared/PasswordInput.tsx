import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

export const PasswordInput = forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="relative w-full ">
      <Button
        type="button"
        size="icon"
        className="absolute right-0 top-0 h-full px-3 py-2 bg-transparent hover:bg-transparent border-none shadow-none"
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={props.value === "" || props.disabled}
      >
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
        {showPassword ? (
          <FaEye className="h-5 w-5 text-black" aria-hidden="true" />
        ) : (
          <FaEyeSlash className="h-5 w-5 text-black " aria-hidden="true" />
        )}
      </Button>
      <Input
        type={showPassword ? "text" : "password"}
        ref={ref}
        className={cn("pr-10", className)}
        {...props}
      />
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";
