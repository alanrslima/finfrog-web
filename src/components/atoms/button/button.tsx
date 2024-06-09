"use client";
import { useFormStatus } from "react-dom";
import { ButtonProps } from "./button.types";
import { Spinner } from "../spinner/spinner";

export function Button(props: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className="bg-green-light text-sm h-[48px] w-full rounded-lg transition-colors text-dark font-semibold px-8 py-3 hover:bg-green-dark hover:text-white"
    >
      {pending ? <Spinner /> : props.children}
    </button>
  );
}
