"use client";
import Image from "next/image";
import * as React from "react";


export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  errorMessage?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", label, errorMessage, ...props }, ref) => {
    return (
      <div>
        <div className="mb-2 text-sm font-semibold">{label}</div>
        <input
          type={type}
          placeholder=""
          className={`input-bordered input-primary input w-full bg-transparent text-sm ${
            errorMessage ? "input-error" : ""
          }`}
          ref={ref}
          {...props}
        />
        {errorMessage && <ErrorMessage message={errorMessage as string} />}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };


type ErrorMessageProps = {
  message: string | undefined;
};
function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) {
    return;
  }

  return (
    <div className="flex items-center gap-1 mt-1">
      <Image
        alt="error"
        src="/error.png"
        width={14}
        height={14}
      />
      <p className="text-sm text-error">{message}</p>
    </div>
  );
}
