import { ServiceError } from "@/services/service-error";
import { useToast } from "./use-toast";

export function useErrorHandler() {
  const { toast } = useToast();

  function handler(error: any) {
    if (error instanceof ServiceError) {
      const [errorItem] = error.data.errors;
      toast({
        variant: "destructive",
        title: "Ops!",
        description: errorItem.message,
      });
    }
  }

  return [handler];
}
