import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/app/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

const formSchema = z.object({
  value: z.string(),
  description: z.string().min(2).max(50),
  account: z.string().min(2).max(50),
  date: z.date({
    required_error: "A date of birth is required.",
  }),
});

type TransactionFormProps = {
  onSubmit: (values: TransactionFormSubmitProps) => Promise<void>;
};

export type TransactionFormSubmitProps = z.infer<typeof formSchema>;

export function TransactionForm(props: TransactionFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      date: new Date(),
      value: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(props.onSubmit)} className="space-y-8">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Value</FormLabel>
                <FormControl>
                  <Input
                    min="0.00"
                    max="10000.00"
                    step="0.01"
                    placeholder="R$ 0,00"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Supermarket" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="account"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an account" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">Nubank</SelectItem>
                  <SelectItem value="m@google.com">C6 Bank</SelectItem>
                  <SelectItem value="m@support.com">Inter</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Data</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Data que a transação foi realizada
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="font-bold"
          isLoading={form.formState.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
