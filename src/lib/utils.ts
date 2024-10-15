import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function objectToFormData(obj: {
  [key: string]: string | number | Date | Blob;
}) {
  const formData = new FormData();
  for (const key in obj) {
    formData.append(key, obj[key] as Blob);
  }
  return formData;
}
