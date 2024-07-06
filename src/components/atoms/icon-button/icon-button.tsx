import { Icons } from "@/components";

export function IconButton() {
  return (
    <button className="h-[40px] w-[40px] rounded-md">
      <Icons.barChart className="size-9 text-red-500" />
    </button>
  );
}
